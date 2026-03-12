import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on route change (anchor clicks)
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-3 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
            <div className="w-9 h-9 sm:w-11 sm:h-11 flex-shrink-0 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-lg flex items-center justify-center shadow-[0_0_15px_hsl(var(--neon-cyan)/0.3)]">
              <span className="text-lg sm:text-xl font-bold text-background">♻</span>
            </div>
            <div className="flex flex-col min-w-0">
              <h1 className="text-xs sm:text-base font-bold text-neon-cyan font-orbitron leading-tight truncate">Plastoline Julian AI</h1>
              <p className="text-[10px] sm:text-xs text-neon-pink font-exo leading-tight">Inspired by Julian Brown</p>
              <a 
                href="https://aiwebtools.lovable.app/?via=aiwebtools" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[10px] sm:text-xs text-muted-foreground hover:text-neon-pink transition-colors font-exo truncate"
              >
                Presented by AiWebTools.Ai
              </a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3">
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
            <button 
              className="p-2 text-foreground hover:text-neon-cyan transition-colors active:scale-95"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - slides down */}
        <div 
          ref={menuRef}
          className={`lg:hidden overflow-hidden transition-all duration-200 ease-out ${
            isMobileMenuOpen ? "max-h-[400px] opacity-100 mt-3" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-2 py-3 border-t border-border/50">
            <a 
              href="https://chatgpt.com/g/g-68853f78b2988191a919e23f74d724b1-plastic-to-fuel-plastoline-julian-brown"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              <Button variant="cyber" size="sm" className="w-full text-sm">
                USE THIS AI TOOL
              </Button>
            </a>
            <a 
              href="https://www.youtube.com/@naturejab"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              <Button variant="youtube" size="sm" className="w-full text-sm">
                FOLLOW JULIAN ON YOUTUBE
              </Button>
            </a>
            <a href="#faq" onClick={closeMenu}>
              <Button variant="ghost" size="sm" className="w-full text-foreground hover:text-neon-cyan font-space text-sm justify-start">
                FAQ
              </Button>
            </a>
            <a href="#disclaimer" onClick={closeMenu}>
              <Button variant="ghost" size="sm" className="w-full text-foreground hover:text-neon-cyan font-space text-sm justify-start">
                Disclaimer
              </Button>
            </a>
            <a 
              href="https://aiwebtools.lovable.app/?via=aiwebtools"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              <Button variant="hologram" size="sm" className="w-full text-sm">
                More AI Tools
              </Button>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
