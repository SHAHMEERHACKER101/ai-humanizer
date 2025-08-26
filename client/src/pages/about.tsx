import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function About() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="font-jetbrains text-4xl md:text-5xl font-bold mb-6 neon-text text-neon-blue">
                About <span className="text-neon-purple">NexusRank Pro</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Empowering content creators with professional AI-powered SEO tools
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="glass-panel p-8 rounded-xl mb-12">
                <h2 className="font-jetbrains text-2xl font-bold mb-6 text-neon-blue">Our Mission</h2>
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="glass-panel p-6 rounded-xl">
                  <i className="fas fa-brain text-3xl text-neon-blue mb-4"></i>
                  <h3 className="font-jetbrains text-lg font-bold mb-2">Advanced AI Technology</h3>
                  <p className="text-gray-400">
                    Powered by cutting-edge AI models for superior content generation, analysis, and optimization.
                  </p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                  <i className="fas fa-shield-alt text-3xl text-neon-purple mb-4"></i>
                  <h3 className="font-jetbrains text-lg font-bold mb-2">Privacy First Approach</h3>
                  <p className="text-gray-400">
                    Your content is never stored. We process and return results without data retention.
                  </p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                  <i className="fas fa-bolt text-3xl text-neon-blue mb-4"></i>
                  <h3 className="font-jetbrains text-lg font-bold mb-2">Lightning Fast Processing</h3>
                  <p className="text-gray-400">
                    Powered by global edge network for instant AI processing worldwide.
                  </p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                  <i className="fas fa-users text-3xl text-neon-purple mb-4"></i>
                  <h3 className="font-jetbrains text-lg font-bold mb-2">Community Focused</h3>
                  <p className="text-gray-400">
                    Built by content creators, for content creators. We understand your needs.
                  </p>
                </div>
              </div>

              <div className="glass-panel p-8 rounded-xl">
                <h2 className="font-jetbrains text-2xl font-bold mb-6 text-neon-purple">Our Tools</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-jetbrains font-bold mb-2 text-neon-blue">AI SEO Writer</h4>
                    <p className="text-gray-400 text-sm mb-4">Generate comprehensive, SEO-optimized articles up to 10,000 words with proper structure and keyword optimization.</p>
                    
                    <h4 className="font-jetbrains font-bold mb-2 text-neon-blue">AI Humanizer</h4>
                    <p className="text-gray-400 text-sm mb-4">Transform AI-generated text to sound naturally human-written with authentic tone and style.</p>
                    
                    <h4 className="font-jetbrains font-bold mb-2 text-neon-blue">AI Detector</h4>
                    <p className="text-gray-400 text-sm">Detect AI-generated content with detailed analysis and probability scores.</p>
                  </div>
                  <div>
                    <h4 className="font-jetbrains font-bold mb-2 text-neon-purple">Paraphrasing Tool</h4>
                    <p className="text-gray-400 text-sm mb-4">Rewrite content while preserving meaning and context with multiple rewriting modes.</p>
                    
                    <h4 className="font-jetbrains font-bold mb-2 text-neon-purple">Grammar Checker</h4>
                    <p className="text-gray-400 text-sm mb-4">Fix grammar, spelling, and punctuation errors with professional-grade accuracy.</p>
                    
                    <h4 className="font-jetbrains font-bold mb-2 text-neon-purple">Text Improver</h4>
                    <p className="text-gray-400 text-sm">Enhance clarity, fluency, and professionalism of your content.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
