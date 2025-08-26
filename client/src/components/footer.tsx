import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-cyber-black border-t border-neon-blue/30 py-12" data-testid="footer">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <i className="fas fa-rocket text-neon-blue text-2xl"></i>
              <span className="font-jetbrains text-xl font-bold text-neon-blue">NexusRank Pro</span>
            </div>
            <p className="text-gray-400">Professional AI-powered SEO toolkit for modern content creators.</p>
          </div>
          
          <div>
            <h4 className="font-jetbrains font-bold text-neon-purple mb-4">Tools</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#seo-writer" className="hover:text-neon-blue transition-colors" data-testid="footer-seo-writer">AI SEO Writer</a></li>
              <li><a href="#humanizer" className="hover:text-neon-blue transition-colors" data-testid="footer-humanizer">AI Humanizer</a></li>
              <li><a href="#detector" className="hover:text-neon-blue transition-colors" data-testid="footer-detector">AI Detector</a></li>
              <li><a href="#paraphraser" className="hover:text-neon-blue transition-colors" data-testid="footer-paraphraser">Paraphrasing Tool</a></li>
              <li><a href="#grammar" className="hover:text-neon-blue transition-colors" data-testid="footer-grammar">Grammar Checker</a></li>
              <li><a href="#improver" className="hover:text-neon-blue transition-colors" data-testid="footer-improver">Text Improver</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-jetbrains font-bold text-neon-purple mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-neon-blue transition-colors" data-testid="footer-about">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-neon-blue transition-colors" data-testid="footer-contact">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-neon-blue transition-colors" data-testid="footer-privacy">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-neon-blue transition-colors" data-testid="footer-terms">Terms of Service</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-neon-blue transition-colors" data-testid="footer-cookies">Cookie Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-jetbrains font-bold text-neon-purple mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://www.patreon.com/posts/seo-tools-137228615?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_creator&utm_content=join_link" target="_blank" rel="noopener noreferrer" className="hover:text-neon-blue transition-colors" data-testid="footer-patreon">Support on Patreon</a></li>
              <li><a href="/contact" className="hover:text-neon-blue transition-colors" data-testid="footer-help">Help Center</a></li>
              <li><a href="/contact" className="hover:text-neon-blue transition-colors" data-testid="footer-api">API Documentation</a></li>
              <li><a href="/contact" className="hover:text-neon-blue transition-colors" data-testid="footer-status">Status Page</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neon-blue/30 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2025 NexusRank Pro. All rights reserved. Powered by advanced AI technology.
          </p>
        </div>
      </div>
    </footer>
  );
}
