import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function Terms() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="font-jetbrains text-4xl md:text-5xl font-bold mb-6 neon-text text-neon-blue">
                Terms of <span className="text-neon-purple">Service</span>
              </h1>
              <p className="text-xl text-gray-300">
                Last updated: August 26, 2025
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <div className="glass-panel p-8 rounded-xl">
                <h2 className="font-jetbrains text-2xl font-bold mb-4 text-neon-blue">Agreement to Terms</h2>
                <p className="text-gray-300">
                  By accessing and using NexusRank Pro ("Service"), you accept and agree to be bound by the 
                  terms and provision of this agreement. If you do not agree to abide by the above, please 
                  do not use this service.
                </p>
              </div>

              <div className="glass-panel p-8 rounded-xl">
                <h2 className="font-jetbrains text-2xl font-bold mb-4 text-neon-blue">Description of Service</h2>
                <p className="text-gray-300 mb-4">
                  NexusRank Pro provides AI-powered content creation and SEO tools including:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>AI SEO Writer for creating optimized articles</li>
                  <li>AI Humanizer for making content sound natural</li>
                  <li>AI Detector for identifying AI-generated content</li>
                  <li>Paraphrasing Tool for content rewriting</li>
                  <li>Grammar Checker for error correction</li>
                  <li>Text Improver for content enhancement</li>
                </ul>
              </div>

              <div className="glass-panel p-8 rounded-xl">
                <h2 className="font-jetbrains text-2xl font-bold mb-4 text-neon-blue">User Accounts and Registration</h2>
                
                <h3 className="font-jetbrains text-lg font-bold mb-3 text-neon-purple">Free Users</h3>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>No registration required for basic usage</li>
                  <li>Limited to 1 use per tool</li>
                  <li>Usage tracked locally in browser storage</li>
                </ul>

                <h3 className="font-jetbrains text-lg font-bold mb-3 text-neon-purple">Pro Users</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Access through provided demo credentials</li>
                  <li>Unlimited usage of all tools</li>
                  <li>Priority processing and support</li>
                </ul>
              </div>

              <div className="glass-panel p-8 rounded-xl">
                <h2 className="font-jetbrains text-2xl font-bold mb-4 text-neon-blue">Acceptable Use Policy</h2>
                
                <h3 className="font-jetbrains text-lg font-bold mb-3 text-neon-purple">Permitted Uses</h3>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>Creating original content for personal or commercial use</li>
                  <li>Improving and editing existing content</li>
                  <li>Analyzing content for AI detection</li>
                  <li>Educational and research purposes</li>
                </ul>

                <h3 className="font-jetbrains text-lg font-bold mb-3 text-neon-purple">Prohibited Uses</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Creating harmful, illegal, or inappropriate content</li>
                  <li>Violating intellectual property rights</li>
                  <li>Attempting to reverse engineer or bypass service limits</li>
                  <li>Creating spam, malware, or phishing content</li>
                  <li>Impersonating others or creating misleading content</li>
                  <li>Overloading or attempting to disrupt our services</li>
                </ul>
              </div>

              <div className="glass-panel p-8 rounded-xl">
                <h2 className="font-jetbrains text-2xl font-bold mb-4 text-neon-blue">Content and Intellectual Property</h2>
                
                <h3 className="font-jetbrains text-lg font-bold mb-3 text-neon-purple">Your Content</h3>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>You retain full ownership of content you create using our tools</li>
                  <li>You are responsible for ensuring your content complies with applicable laws</li>
                  <li>You grant us permission to process your content through AI services</li>
                  <li>We do not store or retain your content after processing</li>
                </ul>

                <h3 className="font-jetbrains text-lg font-bold mb-3 text-neon-purple">Our Intellectual Property</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>The Service, including software, design, and algorithms, is our property</li>
                  <li>You may not copy, modify, or distribute our intellectual property</li>
                  <li>Trademarks and logos are protected and may not be used without permission</li>
                </ul>
              </div>

              <div className="glass-panel p-8 rounded-xl">
                <h2 className="font-jetbrains text-2xl font-bold mb-4 text-neon-blue">Payment and Billing</h2>
                
                <div className="bg-neon-blue/10 border border-neon-blue/30 rounded-lg p-6 mb-6">
                  <h3 className="font-jetbrains text-lg font-bold mb-2 text-neon-blue flex items-center">
                    <i className="fas fa-gift mr-2"></i>
                    Current Offering
                  </h3>
                  <p className="text-gray-300">
                    NexusRank Pro currently operates with a freemium model with demo Pro access. 
                    Paid subscriptions may be introduced in the future with advance notice.
                  </p>
                </div>

                <h3 className="font-jetbrains text-lg font-bold mb-3 text-neon-purple">Future Billing Terms</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Billing cycles and payment methods will be clearly disclosed</li>
                  <li>All fees are non-refundable unless required by law</li>
                  <li>Price changes will be communicated with 30 days notice</li>
                  <li>Failed payments may result in service suspension</li>
                </ul>
              </div>

              <div className="glass-panel p-8 rounded-xl">
                <h2 className="font-jetbrains text-2xl font-bold mb-4 text-neon-blue">Privacy and Data Protection</h2>
                <p className="text-gray-300 mb-4">
                  Your privacy is important to us. Our data collection and use practices are outlined 
                  in our Privacy Policy, which forms part of these terms.
                </p>
                
                <h3 className="font-jetbrains text-lg font-bold mb-3 text-neon-purple">Key Privacy Points</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>We do not store your content after processing</li>
                  <li>Usage data is stored locally in your browser</li>
                  <li>Technical data may be collected for service improvement</li>
                </ul>
              </div>

              <div className="glass-panel p-8 rounded-xl">
                <h2 className="font-jetbrains text-2xl font-bold mb-4 text-neon-blue">Disclaimers and Limitations</h2>
                
                <h3 className="font-jetbrains text-lg font-bold mb-3 text-neon-purple">Service Disclaimers</h3>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>AI-generated content may contain inaccuracies or biases</li>
                  <li>Users should review and verify all generated content</li>
                  <li>We do not guarantee specific results or outcomes</li>
                  <li>Service is provided "as is" without warranties</li>
                </ul>

                <h3 className="font-jetbrains text-lg font-bold mb-3 text-neon-purple">Limitation of Liability</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Our liability is limited to the amount paid for the service</li>
                  <li>We are not liable for indirect, incidental, or consequential damages</li>
                  <li>Users are responsible for backup and data protection</li>
                </ul>
              </div>

              <div className="glass-panel p-8 rounded-xl">
                <h2 className="font-jetbrains text-2xl font-bold mb-4 text-neon-blue">Contact Information</h2>
                <p className="text-gray-300 mb-4">
                  For questions about these Terms of Service, please contact us:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li><strong>Email:</strong> legal@nexusrankpro.com</li>
                  <li><strong>Contact Form:</strong> Available on our Contact page</li>
                  <li><strong>Support:</strong> support@nexusrankpro.com</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
