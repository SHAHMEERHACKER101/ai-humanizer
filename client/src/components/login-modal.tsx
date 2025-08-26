import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { PRO_CREDENTIALS, setProUser } from "@/lib/usage-tracker";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (username === PRO_CREDENTIALS.username && password === PRO_CREDENTIALS.password) {
      setProUser(true);
      toast({
        title: "Success!",
        description: "Successfully logged in to Pro!",
      });
      onClose();
      window.location.reload(); // Refresh to update UI
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid credentials. Contact support for Pro access after Patreon payment.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-panel border-neon-blue/30 max-w-md" data-testid="login-modal">
        <DialogHeader>
          <DialogTitle className="font-jetbrains text-xl font-bold neon-text text-neon-blue">
            Pro Login
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4" data-testid="login-form">
          <div>
            <Label className="block font-jetbrains text-sm font-bold mb-2 text-neon-blue">
              Username
            </Label>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="cyber-input w-full"
              placeholder="Provided after Patreon payment"
              data-testid="login-username"
            />
          </div>
          
          <div>
            <Label className="block font-jetbrains text-sm font-bold mb-2 text-neon-blue">
              Password
            </Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="cyber-input w-full"
              placeholder="Provided after payment"
              data-testid="login-password"
            />
          </div>
          
          <div className="bg-dark-gray p-4 rounded-lg border border-neon-purple/30">
            <p className="text-xs text-gray-400 mb-2">
              <i className="fas fa-info-circle mr-1"></i>
              Pro credentials are provided after Patreon payment
            </p>
            <p className="text-sm text-neon-purple">Contact support to get your access credentials</p>
          </div>
          
          <Button 
            type="submit" 
            className="neon-button w-full py-3 rounded-lg font-jetbrains"
            data-testid="login-submit"
          >
            <i className="fas fa-sign-in-alt mr-2"></i>
            Login to Pro
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
