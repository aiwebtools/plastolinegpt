import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-lg flex items-center justify-center shadow-[0_0_20px_hsl(var(--neon-cyan)/0.3)]">
                <span className="text-2xl font-bold text-background">♻</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold text-neon-cyan">Plastoline Julian</h3>
                <a 
                  href="https://www.aiwebtools.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-neon-pink transition-colors"
                >
                  Presented by AiWebTools.Ai
                </a>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Preserving Julian Brown's revolutionary knowledge of plastic-to-fuel conversion 
              through AI technology. Empowering communities worldwide to transform waste into energy.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <span className="text-neon-cyan">📧</span>
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="text-muted-foreground hover:text-neon-cyan transition-colors"
                >
                  Contact@ai-webtools.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-neon-cyan">📞</span>
                <a 
                  href="tel:+14758008096" 
                  className="text-muted-foreground hover:text-neon-cyan transition-colors"
                >
                  (475) 800-8096
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Quick Access</h4>
            <div className="space-y-4">
              <a 
                href="https://chatgpt.com/g/g-68853f78b2988191a919e23f74d724b1-plastic-to-fuel-plastoline-julian-brown"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-neon-cyan transition-colors"
              >
                Use This AI Tool
              </a>
              <a 
                href="https://chatgpt.com/g/g-68853f78b2988191a919e23f74d724b1-plastic-to-fuel-plastoline-julian-brown"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-neon-cyan transition-colors"
              >
                Access Julian AI
              </a>
              <a 
                href="#faq"
                className="block text-muted-foreground hover:text-neon-cyan transition-colors"
              >
                FAQ
              </a>
              <a 
                href="#disclaimer"
                className="block text-muted-foreground hover:text-neon-cyan transition-colors"
              >
                Disclaimer
              </a>
              <a 
                href="https://www.aiwebtools.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-neon-cyan transition-colors"
              >
                More AI Tools
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Legal</h4>
            <div className="space-y-4">
              <a 
                href="https://openai.com/policies/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-neon-cyan transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="https://aiwebtools.ai/terms-of-services"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-neon-cyan transition-colors"
              >
                Terms of Service
              </a>
              <a 
                href="#disclaimer"
                className="block text-muted-foreground hover:text-neon-cyan transition-colors"
              >
                Safety Disclaimer
              </a>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a 
            href="https://chatgpt.com/g/g-68853f78b2988191a919e23f74d724b1-plastic-to-fuel-plastoline-julian-brown"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="cyber" size="lg" className="w-full sm:w-auto">
              USE THIS AI TOOL INSPIRED TO PRESERVE THE KNOWLEDGE OF JULIAN BROWN FOREVER
            </Button>
          </a>
        </div>

        {/* More AI Tools Button (Corner) */}
        <div className="relative">
          <a 
            href="https://www.aiwebtools.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-40"
          >
            <Button 
              variant="glow" 
              className="rounded-full px-6 py-3 shadow-2xl animate-float"
            >
              More AI Tools
            </Button>
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <a 
              href="https://www.aiwebtools.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-neon-cyan transition-colors text-center md:text-left"
            >
              © 2025 AI WEB TOOLS LLC All rights reserved.
            </a>
            
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-muted-foreground text-sm">Powered by Julian Brown's Vision</span>
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-neon-pink rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="w-2 h-2 bg-neon-purple rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;