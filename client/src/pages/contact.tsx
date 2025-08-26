import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real implementation, this would send the form data to a backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="font-jetbrains text-4xl md:text-5xl font-bold mb-6 neon-text text-neon-blue">
                Get In <span className="text-neon-purple">Touch</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Have questions? We're here to help you make the most of our AI-powered tools
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <h3 className="font-jetbrains text-2xl font-bold mb-6 text-neon-purple">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="glass-panel p-6 rounded-xl">
                    <div className="flex items-center">
                      <i className="fas fa-envelope text-2xl text-neon-blue mr-4"></i>
                      <div>
                        <h4 className="font-jetbrains font-bold">Email Support</h4>
                        <p className="text-gray-400">support@nexusrankpro.com</p>
                        <span className="text-xs text-neon-blue">Response within 24 hours</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass-panel p-6 rounded-xl">
                    <div className="flex items-center">
                      <i className="fas fa-comments text-2xl text-neon-purple mr-4"></i>
                      <div>
                        <h4 className="font-jetbrains font-bold">Live Chat</h4>
                        <p className="text-gray-400">Available on our platform</p>
                        <span className="text-xs text-neon-purple">Mon-Fri 9 AM - 6 PM EST</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass-panel p-6 rounded-xl">
                    <div className="flex items-center">
                      <i className="fas fa-question-circle text-2xl text-neon-blue mr-4"></i>
                      <div>
                        <h4 className="font-jetbrains font-bold">Help Center</h4>
                        <p className="text-gray-400">Comprehensive guides and FAQs</p>
                        <span className="text-xs text-neon-blue">Available 24/7</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-jetbrains text-2xl font-bold mb-6 text-neon-blue">Send us a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                  <div>
                    <Label className="block font-jetbrains text-sm font-bold mb-2 text-neon-blue">Your Name</Label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="cyber-input w-full"
                      placeholder="Enter your name"
                      required
                      data-testid="contact-name"
                    />
                  </div>
                  
                  <div>
                    <Label className="block font-jetbrains text-sm font-bold mb-2 text-neon-blue">Email Address</Label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="cyber-input w-full"
                      placeholder="Enter your email"
                      required
                      data-testid="contact-email"
                    />
                  </div>
                  
                  <div>
                    <Label className="block font-jetbrains text-sm font-bold mb-2 text-neon-blue">Subject</Label>
                    <Select onValueChange={(value) => setFormData(prev => ({ ...prev, subject: value }))}>
                      <SelectTrigger className="cyber-input w-full" data-testid="contact-subject">
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent className="bg-cyber-gray border-neon-blue/30">
                        <SelectItem value="technical-support" className="text-white hover:bg-neon-blue/20">Technical Support</SelectItem>
                        <SelectItem value="billing" className="text-white hover:bg-neon-blue/20">Billing & Pro Account</SelectItem>
                        <SelectItem value="feature-request" className="text-white hover:bg-neon-blue/20">Feature Request</SelectItem>
                        <SelectItem value="bug-report" className="text-white hover:bg-neon-blue/20">Bug Report</SelectItem>
                        <SelectItem value="general" className="text-white hover:bg-neon-blue/20">General Inquiry</SelectItem>
                        <SelectItem value="partnership" className="text-white hover:bg-neon-blue/20">Partnership</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label className="block font-jetbrains text-sm font-bold mb-2 text-neon-blue">Message</Label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className="cyber-input w-full h-32 resize-none"
                      placeholder="Please describe your question or issue in detail..."
                      required
                      data-testid="contact-message"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="neon-button w-full py-3 rounded-lg font-jetbrains"
                    data-testid="contact-submit"
                  >
                    <i className="fas fa-paper-plane mr-2"></i>
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
