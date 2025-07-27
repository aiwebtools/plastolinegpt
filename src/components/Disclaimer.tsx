import { Card } from "@/components/ui/card";

const Disclaimer = () => {
  return (
    <section id="disclaimer" className="py-12 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-neon-pink">Legal</span>{" "}
            <span className="text-neon-cyan">Disclaimer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Important safety and legal information regarding the use of Plastoline Julian and plastic-to-fuel conversion technology.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Main Disclaimer */}
          <Card className="p-8 bg-card/60 border-destructive/30">
            <div className="flex items-start space-x-4 mb-6">
              <div className="text-4xl">⚠️</div>
              <div>
                <h3 className="text-2xl font-bold text-destructive mb-4">
                  EXPERIMENTAL TECHNOLOGY - USE AT YOUR OWN RISK
                </h3>
                <p className="text-foreground leading-relaxed">
                  The information provided by Plastoline Julian is for educational purposes only. 
                  Plastic-to-fuel conversion involves inherent risks including but not limited to fire, 
                  explosion, toxic gas exposure, and equipment failure. All activities are undertaken 
                  entirely at your own risk.
                </p>
              </div>
            </div>
          </Card>

          {/* Safety Warnings */}
          <Card className="p-8 bg-card/60 border-neon-pink/20">
            <h3 className="text-xl font-bold text-neon-pink mb-6">Safety Requirements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-foreground">Personal Protective Equipment</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Fire-resistant clothing and gloves</li>
                  <li>• Chemical-resistant respirator</li>
                  <li>• Safety goggles and face shield</li>
                  <li>• Proper ventilation systems</li>
                  <li>• Emergency fire suppression equipment</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-foreground">Environmental Hazards</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Toxic vapor emissions</li>
                  <li>• Flammable gas production</li>
                  <li>• High temperature operations</li>
                  <li>• Pressure vessel risks</li>
                  <li>• Chemical waste disposal</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Legal Information */}
          <Card className="p-8 bg-card/60 border-neon-cyan/20">
            <h3 className="text-xl font-bold text-neon-cyan mb-6">Legal Compliance</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Local Regulations:</strong> You are solely responsible for 
                ensuring compliance with all local, state, and federal regulations regarding fuel production, 
                environmental protection, and workplace safety.
              </p>
              <p>
                <strong className="text-foreground">Permits and Licensing:</strong> Many jurisdictions require 
                permits for fuel production equipment. Research and obtain all necessary approvals before 
                beginning any construction or operation.
              </p>
              <p>
                <strong className="text-foreground">Environmental Impact:</strong> Improper operation may 
                violate environmental protection laws. Ensure proper waste handling and emissions control.
              </p>
            </div>
          </Card>

          {/* Liability Limitation */}
          <Card className="p-8 bg-card/60 border-neon-purple/20">
            <h3 className="text-xl font-bold text-neon-purple mb-6">Limitation of Liability</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                AI WEB TOOLS LLC, its affiliates, and contributors provide this information "as is" without 
                warranty of any kind. We disclaim all liability for any damages, injuries, or losses 
                resulting from the use of this information.
              </p>
              <p>
                <strong className="text-foreground">No Professional Advice:</strong> This AI tool does not 
                provide professional engineering, legal, or safety advice. Consult qualified professionals 
                before undertaking any construction or operation.
              </p>
              <p>
                <strong className="text-foreground">Educational Purpose:</strong> This tool is designed to 
                preserve and share knowledge about Julian Brown's work for educational purposes only.
              </p>
            </div>
          </Card>

          {/* Emergency Information */}
          <Card className="p-8 bg-card/60 border-destructive/20">
            <h3 className="text-xl font-bold text-destructive mb-6">Emergency Preparedness</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-foreground">Fire Safety</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Class ABC fire extinguishers</li>
                  <li>• Emergency shut-off systems</li>
                  <li>• Clear evacuation routes</li>
                  <li>• Local fire department contact</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-foreground">Chemical Exposure</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Emergency eyewash stations</li>
                  <li>• Poison control contact: (800) 222-1222</li>
                  <li>• First aid supplies</li>
                  <li>• Emergency medical contact</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-foreground">Equipment Failure</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Pressure relief systems</li>
                  <li>• Emergency power cutoffs</li>
                  <li>• Backup safety systems</li>
                  <li>• Professional emergency services</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Contact for Legal */}
          <div className="text-center pt-8">
            <p className="text-muted-foreground mb-4">
              For legal inquiries or to report safety concerns:
            </p>
            <div className="space-y-2">
              <a 
                href="mailto:Contact@ai-webtools.com" 
                className="text-neon-cyan hover:text-neon-pink transition-colors"
              >
                Contact@ai-webtools.com
              </a>
              <br />
              <a 
                href="tel:+14758008096" 
                className="text-neon-cyan hover:text-neon-pink transition-colors"
              >
                (475) 800-8096
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;