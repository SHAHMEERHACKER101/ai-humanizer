import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="font-jetbrains text-4xl md:text-5xl font-bold mb-6 neon-text text-neon-blue">
                Cookie <span className="text-neon-purple">Policy</span>
              </h1>
              <p className="text-xl text-gray-300">
                Last updated: August 26, 2025
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <div className="glass-panel p-8 rounded-xl">
                <h2 className="font-jetbrains text-2xl font-bold mb-4 text-neon-blue">What Are Cookies</h2>
                <p className="text-gray-300 mb-4">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and 
                  understanding how you use our service.
                </p>
                <p className="text-gray-300">
                  NexusRank Pro primarily uses localStorage instead of traditional cookies to store 
                  your usage data and preferences locally on your device.
                </p>
              </div>

              <div className="glass-panel p-8 rounded-xl">
                <h2 className="font-jetbrains text-2xl font-bold mb-4 text-neon-blue">How We Use Local Storage</h2>
                
                <h3 className="font-jetbrains text-lg font-bold mb-3 text-neon-purple">Essential Storage</h3>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>Tool usage counts for free users</li>
                  <li>Pro login status</li>
                  <li>User preferences and settings</li>
                  <li>Tool configuration options</li>
                </ul>

                <h3 className="font-jetbrains text-lg font-bold mb-3 text-neon-purple">Performance Data</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Service Worker cache management</li>
                  <li>Offline functionality support</li>
                  <li>Progressive Web App features</li>
                </ul>
              </div>

              <div className="glass-panel p-8 rounded-xl">
                <h2 className="font-jetbrains text-2xl font-bold mb-4 text-neon-blue">Third-Party Services</h2>
                
                <h3 className="font-jetbrains text-lg font-bold mb-3 text-neon-purple">Font Services</h3>
                <p className="text-gray-300 mb-4">
                  We use Google Fonts to provide better typography. Google may set cookies to 
                  optimize font delivery, but no personal data is shared.
                </p>

                <h3 className="font-jetbrains text-lg font-bold mb-3 text-neon-purple">Content Delivery Networks</h3>
                <p className="text-gray-300 mb-4">
                  We use CDNs (like Font Awesome) to deliver resources efficiently. These services 
                  may use cookies for performance optimization.
                </p>

                <h3 className="font-jetbrains text-lg font-bold mb-3 text-neon-purple">Development Tools</h3>
                <p className="text-gray-300">
                  In development mode, Replit may add tools that use cookies. These are not present 
                  in the production version of our service.
                </p>
              </div>

              <div className="glass-panel p-8 rounded-xl">
                <h2 className="font-jetbrains text-2xl font-bold mb-4 text-neon-blue">Managing Your Data</h2>
                
                <h3 className="font-jetbrains text-lg font-bold mb-3 text-neon-purple">Browser Controls</h3>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>Clear browser data to remove all stored information</li>
                  <li>Disable localStorage in browser settings</li>
                  <li>Use incognito/private browsing mode</li>
                  <li>Block third-party cookies in browser settings</li>
                </ul>

                <h3 className="font-jetbrains text-lg font-bold mb-3 text-neon-purple">Service-Level Controls</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Reset usage counts by clearing browser data</li>
                  <li>Log out of Pro account to clear login status</li>
                  <li>Reset tool preferences to defaults</li>
                </ul>
              </div>

              <div className="glass-panel p-8 rounded-xl">
                <h2 className="font-jetbrains text-2xl font-bold mb-4 text-neon-blue">Data Retention</h2>
                
                <div className="bg-neon-blue/10 border border-neon-blue/30 rounded-lg p-6 mb-6">
                  <h3 className="font-jetbrains text-lg font-bold mb-2 text-neon-blue flex items-center">
                    <i className="fas fa-clock mr-2"></i>
                    Local Storage Duration
                  </h3>
                  <p className="text-gray-300">
                    Data stored in localStorage persists until you clear your browser data or 
                    specifically delete it. We do not automatically expire this data.
                  </p>
                </div>

                <h3 className="font-jetbrains text-lg font-bold mb-3 text-neon-purple">Content Processing</h3>
                <p className="text-gray-300 mb-4">
                  Content you submit for AI processing is not stored and is discarded immediately 
                  after processing is complete.
                </p>

                <h3 className="font-jetbrains text-lg font-bold mb-3 text-neon-purple">Server Logs</h3>
                <p className="text-gray-300">
                  Server access logs may be retained for security and performance monitoring purposes. 
                  These logs do not contain personal information or content data.
                </p>
              </div>

              <div className="glass-panel p-8 rounded-xl">
                <h2 className="font-jetbrains text-2xl font-bold mb-4 text-neon-blue">Updates to This Policy</h2>
                <p className="text-gray-300 mb-4">
                  We may update this Cookie Policy from time to time to reflect changes in our 
                  practices or for other operational, legal, or regulatory reasons.
                </p>
                <p className="text-gray-300">
                  When we make changes, we will update the "Last updated" date at the top of this policy. 
                  We encourage you to review this policy periodically.
                </p>
              </div>

              <div className="glass-panel p-8 rounded-xl">
                <h2 className="font-jetbrains text-2xl font-bold mb-4 text-neon-blue">Contact Us</h2>
                <p className="text-gray-300 mb-4">
                  If you have any questions about this Cookie Policy or our data practices, 
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
