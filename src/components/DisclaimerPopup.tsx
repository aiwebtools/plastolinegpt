import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const DisclaimerPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAgreed = localStorage.getItem('plastoline-disclaimer-agreed');
    if (!hasAgreed) {
      setIsVisible(true);
    }
  }, []);

  const handleAgree = () => {
    localStorage.setItem('plastoline-disclaimer-agreed', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <Card className="max-w-2xl mx-4 p-8 bg-card border-destructive/50 shadow-2xl">
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">⚠️</div>
          <h2 className="text-3xl font-bold text-destructive mb-4">
            IMPORTANT SAFETY DISCLAIMER
          </h2>
        </div>

        <div className="space-y-4 text-sm leading-relaxed">
          <p className="text-foreground">
            <strong>EXPERIMENTAL TECHNOLOGY - USE AT YOUR OWN RISK</strong>
          </p>
          
          <p className="text-muted-foreground">
            Plastoline Julian provides educational information about plastic-to-fuel conversion technology. 
            This process involves serious risks including fire, explosion, toxic gas exposure, and equipment failure.
          </p>

          <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
            <h3 className="font-semibold text-destructive mb-2">By proceeding, you acknowledge:</h3>
            <ul className="space-y-1 text-muted-foreground text-xs">
              <li>• All activities are undertaken entirely at your own risk</li>
              <li>• You will research and comply with all local safety and legal requirements</li>
              <li>• You understand the serious safety hazards involved</li>
              <li>• This is for educational purposes only</li>
              <li>• AI WEB TOOLS LLC disclaims all liability for damages or injuries</li>
            </ul>
          </div>

          <p className="text-muted-foreground">
            <strong>Required Safety Equipment:</strong> Fire-resistant PPE, chemical respirators, 
            proper ventilation, emergency fire suppression, and professional safety training.
          </p>

          <p className="text-muted-foreground">
            <strong>Legal Compliance:</strong> Many jurisdictions require permits for fuel production. 
            Research all applicable regulations before proceeding.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button 
            variant="cyber" 
            onClick={handleAgree}
            className="flex-1"
          >
            I AGREE - PROCEED TO SITE
          </Button>
          <Button 
            variant="outline" 
            onClick={() => window.location.href = 'https://www.aiwebtools.ai'}
            className="flex-1"
          >
            EXIT - GO TO AI WEB TOOLS
          </Button>
        </div>

        <div className="text-center mt-6">
          <p className="text-xs text-muted-foreground">
            For questions: <a href="mailto:Contact@ai-webtools.com" className="text-neon-cyan">Contact@ai-webtools.com</a>
            {" • "}
            <a href="tel:+14758008096" className="text-neon-cyan">(475) 800-8096</a>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default DisclaimerPopup;