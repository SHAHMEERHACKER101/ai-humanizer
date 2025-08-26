import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { callAITool, AI_TOOLS, TOOL_CONFIGS, ToolId, AIToolRequest } from "@/lib/api";
import { incrementUsage, isProUser } from "@/lib/usage-tracker";

interface ToolModalProps {
  isOpen: boolean;
  onClose: () => void;
  toolId: ToolId | null;
}

export function ToolModal({ isOpen, onClose, toolId }: ToolModalProps) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [options, setOptions] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const tool = toolId ? TOOL_CONFIGS[toolId] : null;

  const processMutation = useMutation({
    mutationFn: async (data: AIToolRequest) => {
      if (!toolId) throw new Error("No tool selected");
      return callAITool(AI_TOOLS[toolId], data);
    },
    onSuccess: (data) => {
      setOutput(data.content);
      if (!isProUser() && toolId) {
        incrementUsage(toolId);
      }
      toast({
        title: "Success!",
        description: "Content processed successfully.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  useEffect(() => {
    if (isOpen && tool) {
      setInput("");
      setOutput("");
      setOptions({});
    }
  }, [isOpen, tool]);

  const handleProcess = () => {
    if (!input.trim()) {
      toast({
        title: "Input Required",
        description: "Please enter some text to process.",
        variant: "destructive",
      });
      return;
    }

    processMutation.mutate({
      text: input,
      tool: toolId || undefined,
      options,
    });
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(output);
      toast({
        title: "Copied!",
        description: "Content copied to clipboard.",
      });
    } catch (error) {
      toast({
        title: "Copy Failed",
        description: "Failed to copy content to clipboard.",
        variant: "destructive",
      });
    }
  };

  const handleDownload = () => {
    const blob = new Blob([output], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `nexusrank-${toolId}-output.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (!tool) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-panel border-neon-blue/30 max-w-4xl max-h-[90vh]" data-testid="tool-modal">
        <DialogHeader>
          <DialogTitle className="font-jetbrains text-2xl font-bold neon-text text-neon-blue">
            {tool.name}
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            {tool.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <Label className="block font-jetbrains text-sm font-bold mb-2 text-neon-blue">
                Input
              </Label>
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="cyber-input w-full h-64 resize-none font-mono text-sm"
                placeholder="Enter your text here..."
                data-testid="tool-input"
              />
              
              <div className="mt-4 grid grid-cols-2 gap-4">
                {tool.options.map((option) => (
                  <div key={option.label}>
                    <Label className="block font-jetbrains text-xs font-bold mb-1 text-neon-blue">
                      {option.label}
                    </Label>
                    <Select 
                      onValueChange={(value) => setOptions(prev => ({ ...prev, [option.label]: value }))}
                      data-testid={`tool-option-${option.label.toLowerCase().replace(' ', '-')}`}
                    >
                      <SelectTrigger className="cyber-input">
                        <SelectValue placeholder={`Select ${option.label}`} />
                      </SelectTrigger>
                      <SelectContent className="bg-cyber-gray border-neon-blue/30">
                        {option.options.map((opt) => (
                          <SelectItem key={opt} value={opt} className="text-white hover:bg-neon-blue/20">
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                ))}
              </div>
              
              <Button 
                onClick={handleProcess}
                disabled={processMutation.isPending}
                className="neon-button w-full mt-6 py-3 rounded-lg font-jetbrains"
                data-testid="process-btn"
              >
                {processMutation.isPending ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    Processing...
                  </>
                ) : (
                  <>
                    <i className="fas fa-cogs mr-2"></i>
                    Process Text
                  </>
                )}
              </Button>
            </div>
            
            <div>
              <Label className="block font-jetbrains text-sm font-bold mb-2 text-neon-purple">
                Output
              </Label>
              <div className="cyber-input w-full h-64 p-4 rounded-lg overflow-y-auto" data-testid="tool-output">
                {processMutation.isPending ? (
                  <div className="text-neon-blue text-center py-12">
                    <i className="fas fa-spinner fa-spin text-4xl mb-4"></i>
                    <p>AI is processing your request...</p>
                  </div>
                ) : output ? (
                  <pre className="whitespace-pre-wrap text-gray-300 text-sm">{output}</pre>
                ) : (
                  <div className="text-gray-500 text-center py-12">
                    <i className={`${tool.icon} text-4xl mb-4`}></i>
                    <p>AI-generated content will appear here</p>
                  </div>
                )}
              </div>
              
              <div className="mt-4 flex gap-4">
                <Button 
                  onClick={handleCopy}
                  disabled={!output}
                  className="flex-1 border-2 border-neon-blue text-neon-blue py-2 rounded-lg font-jetbrains hover:bg-neon-blue hover:text-black transition-all bg-transparent"
                  data-testid="copy-btn"
                >
                  <i className="fas fa-copy mr-2"></i>
                  Copy
                </Button>
                <Button 
                  onClick={handleDownload}
                  disabled={!output}
                  className="flex-1 border-2 border-neon-purple text-neon-purple py-2 rounded-lg font-jetbrains hover:bg-neon-purple hover:text-black transition-all bg-transparent"
                  data-testid="download-btn"
                >
                  <i className="fas fa-download mr-2"></i>
                  Download
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
