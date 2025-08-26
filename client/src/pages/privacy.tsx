import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="font-jetbrains text-4xl md:text-5xl font-bold mb-6 neon-text text-neon-blue">
                Privacy <span className="text-neon-purple">Policy</span>
              </h1>
              <p className="text-xl text-gray-300">
                Last updated: August 26, 2025
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <div className="glass-panel p-8 rounded-xl">
                <h2 className="font-jetbrains text-2xl font-bold mb-4 text-neon-blue">Information We Collect</h2>
                
                <h3 className="font-jetbrains text-lg font-bold mb-3 text-neon-purple">Content You Provide</h3>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>Text input for AI processing (not stored after processing)</li>
                  <li>Tool preferences and settings (stored locally)</li>
                  <li>Usage patterns (stored locally in browser)</li>
                </ul>

                <h3 className="font-jetbrains text-lg font-bold mb-3 text-neon-purple">Technical Information</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Browser type and version</li>
                  <li>Device information</li>
                  <li>IP address (for security and performance)</li>
                  <li>Usage analytics (aggregated and anonymized)</li>
                </ul>
              </div>

              <div className="glass-panel p-8 rounded-xl">
                <h2 className="font-jetbrains text-2xl font-bold mb-4 text-neon-blue">How We Use Your Information</h2>
                
                <h3 className="font-jetbrains text-lg font-bold mb-3 text-neon-purple">Service Provision</h3>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>Process your content through AI models</li>
                  <li>Deliver generated results to you</li>
                  <li>Track usage limits for free users</li>
                  <li>Authenticate Pro users</li>
                </ul>

                <h3 className="font-jetbrains text-lg font-bold mb-3 text-neon-purple">Service Improvement</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Monitor system performance and uptime</li>
                  <li>Analyze usage patterns (anonymized)</li>
                  <li>Improve AI model performance</li>
                  <li>Enhance user experience</li>
                </ul>
              </div>

              <div className="glass-panel p-8 rounded-xl">
                <h2 className="font-jetbrains text-2xl font-bold mb-4 text-neon-blue">Data Storage and Security</h2>
                
                <div className="bg-neon-blue/10 border border-neon-blue/30 rounded-lg p-6 mb-6">
                  <h3 className="font-jetbrains text-lg font-bold mb-2 text-neon-blue flex items-center">
                    <i className="fas fa-shield-alt mr-2"></i>
                    Content Protection
                  </h3>
                  <p className="text-gray-300">
                    Your content is processed in real-time and never stored on our servers. 
                    Once processing is complete, your input and output are immediately discarded.
                  </p>
                </div>

                <h3 className="font-jetbrains text-lg font-bold mb-3 text-neon-purple">Local Storage</h3>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>Usage counts stored in browser localStorage</li>
                  <li>Pro login status stored locally</li>
                  <li>User preferences and settings</li>
                  <li>No personal data sent to external servers</li>
                </ul>

                <h3 className="font-jetbrains text-lg font-bold mb-3 text-neon-purple">Security Measures</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>HTTPS encryption for all communications</li>
                  <li>Secure API endpoints with authentication</li>
                  <li>Regular security audits and updates</li>
                  <li>No third-party data sharing</li>
                </ul>
              </div>

              <div className="glass-panel p-8 rounded-xl">
                <h2 className="font-jetbrains text-2xl font-bold mb-4 text-neon-blue">Your Rights and Choices</h2>
                
                <h3 className="font-jetbrains text-lg font-bold mb-3 text-neon-purple">Data Control</h3>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>Clear browser data to remove usage tracking</li>
                  <li>Disable cookies in browser settings</li>
                  <li>Contact us to delete any stored information</li>
                  <li>Export your usage data upon request</li>
                </ul>

                <h3 className="font-jetbrains text-lg font-bold mb-3 text-neon-purple">GDPR Rights (EU Users)</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Right to access your personal data</li>
                  <li>Right to rectification of inaccurate data</li>
                  <li>Right to erasure ("right to be forgotten")</li>
                  <li>Right to data portability</li>
                  <li>Right to object to processing</li>
                </ul>
              </div>

              <div className="glass-panel p-8 rounded-xl">
                <h2 className="font-jetbrains text-2xl font-bold mb-4 text-neon-blue">Third-Party Services</h2>
                
                <h3 className="font-jetbrains text-lg font-bold mb-3 text-neon-purple">AI Processing</h3>
                <p className="text-gray-300 mb-4">
                  We use third-party AI services to process your content. Your data is sent securely 
                  to these services for processing and is not stored by them.
                </p>

                <h3 className="font-jetbrains text-lg font-bold mb-3 text-neon-purple">Analytics</h3>
                <p className="text-gray-300 mb-4">
                  We may use anonymized analytics to understand usage patterns and improve our service. 
                  No personal information is included in these analytics.
                </p>
              </div>

              <div className="glass-panel p-8 rounded-xl">
                <h2 className="font-jetbrains text-2xl font-bold mb-4 text-neon-blue">Updates to This Policy</h2>
                <p className="text-gray-300 mb-4">
                  We may update this Privacy Policy from time to time. We will notify you of any 
                  material changes by posting the new Privacy Policy on this page and updating 
                  the "Last updated" date.
                </p>
                <p className="text-gray-300">
                  Continued use of NexusRank Pro after any changes constitutes acceptance of the 
                  updated Privacy Policy.
                </p>
              </div>

              <div className="glass-panel p-8 rounded-xl">
                <h2 className="font-jetbrains text-2xl font-bold mb-4 text-neon-blue">Contact Us</h2>
                <p className="text-gray-300 mb-4">
                  If you have any questions about this Privacy Policy or our privacy practices, 
                  please contact us:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li><strong>Email:</strong> privacy@nexusrankpro.com</li>
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
