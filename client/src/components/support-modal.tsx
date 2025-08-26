import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowLogin?: () => void;
}

export function SupportModal({ isOpen, onClose, onShowLogin }: SupportModalProps) {
  const handleProLogin = () => {
    onClose();
    if (onShowLogin) {
      onShowLogin();
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-panel border-neon-purple/30 max-w-md" data-testid="support-modal">
        <DialogHeader>
          <DialogTitle className="font-jetbrains text-xl font-bold neon-text text-neon-purple">
            Support NexusRank Pro
          </DialogTitle>
        </DialogHeader>
        
        <div className="text-center">
          <i className="fas fa-heart text-6xl text-neon-purple mb-6"></i>
          <h4 className="font-jetbrains text-lg mb-4">Free Usage Limit Reached!</h4>
          <p className="text-gray-400 mb-6">
            You've used your free trial. Choose an option below to continue using our AI tools.
          </p>
          
          <div className="space-y-4 mb-6">
            <a 
              href="https://www.patreon.com/posts/seo-tools-137228615?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_creator&utm_content=join_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="neon-button inline-block px-8 py-3 rounded-lg font-jetbrains w-full no-underline"
              data-testid="patreon-link"
            >
              <i className="fab fa-patreon mr-2"></i>
              Get Unlimited Access
            </a>
            
            <Button 
              onClick={handleProLogin}
              className="purple-button px-8 py-3 rounded-lg font-jetbrains w-full"
              data-testid="pro-login-option"
            >
              <i className="fas fa-user mr-2"></i>
              Already Have Pro? Login
            </Button>
          </div>
          
          <div className="text-xs text-gray-500">
            <p>• Unlimited tool usage</p>
            <p>• Priority support</p>
            <p>• Early access to new features</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
