import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border shadow-[0_0_20px_hsl(var(--neon-cyan)/0.1)]">
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-lg flex items-center justify-center shadow-[0_0_20px_hsl(var(--neon-cyan)/0.3)] animate-glow-pulse">
              <span className="text-xl sm:text-2xl font-bold text-background">♻</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-sm sm:text-lg font-bold text-neon-cyan font-orbitron leading-tight">Plastoline Julian AI</h1>
              <p className="text-xs text-neon-pink font-exo leading-tight">Inspired by Julian Brown</p>
              <a 
                href="https://aiwebtools.lovable.app/?via=aiwebtools" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-neon-pink transition-colors font-exo"
              >
                Presented by AiWebTools.Ai
              </a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-3">
            <a 
              href="https://chatgpt.com/g/g-68853f78b2988191a919e23f74d724b1-plastic-to-fuel-plastoline-julian-brown"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="cyber" size="sm" className="text-xs">
                USE AI TOOL
              </Button>
            </a>
            <a 
              href="https://www.youtube.com/@naturejab"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="youtube" size="sm" className="text-xs">
                FOLLOW JULIAN
              </Button>
            </a>
            <a href="#faq">
              <Button variant="ghost" size="sm" className="text-foreground hover:text-neon-cyan font-space text-xs">
                FAQ
              </Button>
            </a>
            <a href="#disclaimer">
              <Button variant="ghost" size="sm" className="text-foreground hover:text-neon-cyan font-space text-xs">
                Disclaimer
              </Button>
            </a>
            <a 
              href="https://aiwebtools.lovable.app/?via=aiwebtools"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hologram" size="sm" className="text-xs">
                More AI Tools
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-foreground hover:text-neon-cyan"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col space-y-3 pt-4">
              <a 
                href="https://chatgpt.com/g/g-68853f78b2988191a919e23f74d724b1-plastic-to-fuel-plastoline-julian-brown"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button variant="cyber" size="sm" className="w-full font-orbitron">
                  USE THIS AI TOOL
                </Button>
              </a>
              <a 
                href="https://www.youtube.com/@naturejab"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button variant="youtube" size="sm" className="w-full font-exo">
                  FOLLOW JULIAN ON YOUTUBE
                </Button>
              </a>
              <a 
                href="#faq"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button variant="ghost" size="sm" className="w-full text-foreground hover:text-neon-cyan font-space">
                  FAQ
                </Button>
              </a>
              <a 
                href="#disclaimer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button variant="ghost" size="sm" className="w-full text-foreground hover:text-neon-cyan font-space">
                  Disclaimer
                </Button>
              </a>
              <a 
                href="https://aiwebtools.lovable.app/?via=aiwebtools"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button variant="hologram" size="sm" className="w-full font-space">
                  More AI Tools
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;