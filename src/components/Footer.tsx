import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-6">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-lg flex items-center justify-center shadow-[0_0_20px_hsl(var(--neon-cyan)/0.3)]">
                <span className="text-2xl font-bold text-background">♻</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold text-neon-cyan">Plastoline Julian AI</h3>
                <p className="text-sm text-neon-pink">Inspired by Julian Brown</p>
                <a 
                  href="https://aiwebtools.lovable.app/?via=aiwebtools" 
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

          {/* Quick Access */}
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
                href="https://www.youtube.com/@naturejab"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-neon-cyan transition-colors"
              >
                Follow Julian on YouTube
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
                href="https://aiwebtools.lovable.app/?via=aiwebtools"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-neon-cyan transition-colors"
              >
                More AI Tools
              </a>
            </div>
          </div>

          {/* Legal & Resources */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Legal & Resources</h4>
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
                href="https://aiwebtools.lovable.app/?via=aiwebtools"
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

        {/* Action Buttons Row */}
        <div className="border-t border-border pt-4 mb-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            <a 
              href="https://chatgpt.com/g/g-68853f78b2988191a919e23f74d724b1-plastic-to-fuel-plastoline-julian-brown"
              target="_blank"
              rel="noopener noreferrer"
              className="lg:col-span-2"
            >
              <Button variant="outline" size="sm" className="w-full text-xs">
                USE AI TOOL
              </Button>
            </a>
            <a 
              href="https://www.youtube.com/@naturejab"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm" className="w-full text-xs">
                FOLLOW JULIAN
              </Button>
            </a>
            <a href="#faq">
              <Button variant="ghost" size="sm" className="w-full text-xs">
                FAQ
              </Button>
            </a>
            <a 
              href="https://aiwebtools.lovable.app/?via=aiwebtools"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="sm" className="w-full text-xs">
                More Tools
              </Button>
            </a>
          </div>
        </div>

        {/* Featured CTA */}
        <div className="text-center mb-4">
          <a 
            href="https://chatgpt.com/g/g-68853f78b2988191a919e23f74d724b1-plastic-to-fuel-plastoline-julian-brown"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="default" size="lg">
              USE THIS AI TOOL TO PRESERVE JULIAN BROWN'S KNOWLEDGE
            </Button>
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <a 
              href="https://aiwebtools.lovable.app/?via=aiwebtools"
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