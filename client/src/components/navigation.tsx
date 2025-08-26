import { useState } from "react";
import { Link } from "wouter";
import { LoginModal } from "./login-modal";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [showLogin, setShowLogin] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 glass-panel" data-testid="navigation">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3" data-testid="nav-brand">
              <i className="fas fa-rocket text-neon-blue text-2xl animate-pulse-glow"></i>
              <span className="font-jetbrains text-xl font-bold neon-text text-neon-blue">NexusRank Pro</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-6">
              <a href="#tools" className="hover:text-neon-blue transition-colors" data-testid="nav-tools">Tools</a>
              <Link href="/about" className="hover:text-neon-blue transition-colors" data-testid="nav-about">About</Link>
              <Link href="/contact" className="hover:text-neon-blue transition-colors" data-testid="nav-contact">Contact</Link>
              <Button 
                onClick={() => setShowLogin(true)}
                className="neon-button px-4 py-2 rounded-lg font-jetbrains text-sm"
                data-testid="nav-login-btn"
              >
                <i className="fas fa-user mr-2"></i>Pro Login
              </Button>
            </div>
            
            <Button 
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden text-neon-blue text-xl bg-transparent border-0 hover:bg-transparent"
              data-testid="mobile-menu-btn"
            >
              <i className="fas fa-bars"></i>
            </Button>
          </div>
          
          {/* Mobile Menu */}
          {showMobileMenu && (
            <div className="md:hidden mt-4 space-y-4 border-t border-neon-blue/30 pt-4">
              <a href="#tools" className="block hover:text-neon-blue transition-colors" data-testid="mobile-nav-tools">Tools</a>
              <Link href="/about" className="block hover:text-neon-blue transition-colors" data-testid="mobile-nav-about">About</Link>
              <Link href="/contact" className="block hover:text-neon-blue transition-colors" data-testid="mobile-nav-contact">Contact</Link>
              <Button 
                onClick={() => setShowLogin(true)}
                className="neon-button px-4 py-2 rounded-lg font-jetbrains text-sm w-full"
                data-testid="mobile-nav-login-btn"
              >
                <i className="fas fa-user mr-2"></i>Pro Login
              </Button>
            </div>
          )}
        </div>
      </nav>

      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </>
  );
}
