import { useState, useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ToolModal } from "@/components/tool-modal";
import { SupportModal } from "@/components/support-modal";
import { LoginModal } from "@/components/login-modal";
import { Button } from "@/components/ui/button";
import { TOOL_CONFIGS, ToolId } from "@/lib/api";
import { 
  getUsageCounts, 
  isProUser, 
  getRemainingUses, 
  canUseTool, 
  MAX_FREE_USES_LIMIT 
} from "@/lib/usage-tracker";

export default function Home() {
  const [selectedTool, setSelectedTool] = useState<ToolId | null>(null);
  const [showSupport, setShowSupport] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [usageCounts, setUsageCounts] = useState(getUsageCounts());
  const [isPro, setIsPro] = useState(isProUser());

  useEffect(() => {
    const interval = setInterval(() => {
      setUsageCounts(getUsageCounts());
      setIsPro(isProUser());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleToolClick = (toolId: ToolId) => {
    if (!canUseTool(toolId)) {
      setShowSupport(true);
    } else {
      setSelectedTool(toolId);
    }
  };

  const getButtonText = (toolId: ToolId) => {
    if (isPro) {
      return "Use Tool (Pro)";
    }
    return "Use Tool";
  };

  const getUsagePercentage = (toolId: ToolId) => {
    if (isPro) return 100;
    const usage = usageCounts[toolId] || 0;
    return (usage / MAX_FREE_USES_LIMIT) * 100;
  };

  const scrollToTools = () => {
    document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-radial from-neon-blue/10 via-transparent to-transparent opacity-50"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-float">
            <h1 className="font-jetbrains text-5xl md:text-7xl font-bold mb-6 neon-text text-neon-blue" data-testid="hero-title">
              NEXUSRANK PRO
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Professional AI-Powered SEO Toolkit
            </p>
            <p className="text-lg mb-12 text-gray-400 max-w-3xl mx-auto">
              Transform your content strategy with 6 cutting-edge AI tools. 
              Generate, optimize, and perfect your content with advanced artificial intelligence.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToTools}
              className="neon-button px-8 py-4 rounded-lg font-jetbrains text-lg"
              data-testid="get-started-btn"
            >
              <i className="fas fa-rocket mr-2"></i>
              Get Started Free
            </Button>
            <Button 
              onClick={() => setShowSupport(true)}
              className="purple-button px-8 py-4 rounded-lg font-jetbrains text-lg transition-all bg-transparent"
              data-testid="support-btn"
            >
              <i className="fas fa-heart mr-2"></i>
              Support Us
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass-panel p-4 rounded-lg">
              <i className="fas fa-gift text-neon-blue text-3xl mb-2"></i>
              <h3 className="font-jetbrains text-lg mb-2">Freemium Model</h3>
              <p className="text-gray-400">1 free use per tool</p>
            </div>
            <div className="glass-panel p-4 rounded-lg">
              <i className="fas fa-shield-alt text-neon-purple text-3xl mb-2"></i>
              <h3 className="font-jetbrains text-lg mb-2">Privacy First</h3>
              <p className="text-gray-400">Content never stored</p>
            </div>
            <div className="glass-panel p-4 rounded-lg">
              <i className="fas fa-bolt text-neon-blue text-3xl mb-2"></i>
              <h3 className="font-jetbrains text-lg mb-2">Lightning Fast</h3>
              <p className="text-gray-400">Global edge processing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-jetbrains text-4xl md:text-5xl font-bold mb-6 neon-text text-neon-blue">
              AI-POWERED TOOLS
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Six professional-grade AI tools designed to revolutionize your content creation workflow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(TOOL_CONFIGS).map(([toolId, tool]) => (
              <div 
                key={toolId} 
                className="tool-card p-6 rounded-xl cursor-pointer" 
                data-testid={`tool-card-${toolId}`}
                onClick={() => handleToolClick(toolId as ToolId)}
              >
                <div className="text-center mb-6">
                  <i className={`${tool.icon} text-4xl ${toolId === 'humanizer' || toolId === 'paraphraser' || toolId === 'improver' ? 'text-neon-purple' : 'text-neon-blue'} mb-4`}></i>
                  <h3 className="font-jetbrains text-xl font-bold mb-2">{tool.name}</h3>
                  <p className="text-gray-400">{tool.description}</p>
                </div>
                
                <div className="usage-indicator h-2 rounded-full mb-4 bg-gray-700">
                  <div 
                    className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full transition-all duration-300" 
                    style={{ width: `${getUsagePercentage(toolId as ToolId)}%` }}
                  ></div>
                </div>
                
                <div className="text-center">
                  <Button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToolClick(toolId as ToolId);
                    }}
                    className="neon-button w-full py-3 rounded-lg font-jetbrains"
                    data-testid={`tool-btn-${toolId}`}
                  >
                    <i className="fas fa-play mr-2"></i>
                    <span>{getButtonText(toolId as ToolId)}</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-jetbrains text-4xl md:text-5xl font-bold mb-6 neon-text text-neon-purple">
              ABOUT NEXUSRANK PRO
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Empowering content creators with professional AI-powered SEO tools
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-jetbrains text-2xl font-bold mb-6 text-neon-blue">Our Mission</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                NexusRank Pro is dedicated to democratizing access to professional-grade AI writing and SEO tools. 
                We believe that every content creator, regardless of their budget or technical expertise, 
                should have access to cutting-edge AI technology that can transform their content strategy.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our platform combines the power of advanced AI with intuitive design to deliver 
                six essential tools that cover every aspect of content creation and optimization.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <div className="glass-panel p-6 rounded-xl">
                <i className="fas fa-brain text-3xl text-neon-blue mb-4"></i>
                <h4 className="font-jetbrains text-lg font-bold mb-2">Advanced AI</h4>
                <p className="text-gray-400">Powered by cutting-edge AI models for superior content generation and analysis.</p>
              </div>
              
              <div className="glass-panel p-6 rounded-xl">
                <i className="fas fa-shield-alt text-3xl text-neon-purple mb-4"></i>
                <h4 className="font-jetbrains text-lg font-bold mb-2">Privacy First</h4>
                <p className="text-gray-400">Your content is never stored. We process and return results without data retention.</p>
              </div>
              
              <div className="glass-panel p-6 rounded-xl">
                <i className="fas fa-bolt text-3xl text-neon-blue mb-4"></i>
                <h4 className="font-jetbrains text-lg font-bold mb-2">Lightning Fast</h4>
                <p className="text-gray-400">Powered by global edge network for instant AI processing worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <ToolModal 
        isOpen={!!selectedTool} 
        onClose={() => setSelectedTool(null)} 
        toolId={selectedTool} 
      />

      <SupportModal 
        isOpen={showSupport} 
        onClose={() => setShowSupport(false)}
        onShowLogin={() => setShowLogin(true)}
      />

      <LoginModal 
        isOpen={showLogin} 
        onClose={() => setShowLogin(false)} 
      />
    </div>
  );
}
