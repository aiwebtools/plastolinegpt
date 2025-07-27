import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import StarfieldBackground from "./StarfieldBackground";

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-20 pb-16 relative overflow-hidden">
      {/* Animated Starfield Background */}
      <StarfieldBackground />
      
      {/* Additional background effects */}
      <div className="absolute inset-0 opacity-20 z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 via-transparent to-neon-purple/10 animate-drift"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-pink/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-cyan/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight font-orbitron">
                <span className="text-neon-cyan animate-glow-pulse">Plastoline</span>
                <br />
                <span className="text-neon-pink animate-mega-glow">Julian</span>
                <br />
                <span className="text-foreground text-2xl sm:text-3xl lg:text-4xl font-exo">AI Assistant</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0 font-space">
                Transform plastic waste into usable fuel with the knowledge of Julian "Jab" Brown. 
                Learn pyrolysis reactor design, operation, and safety - step by step.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 bg-card/50 border-neon-cyan/20 hover:border-neon-cyan/40 transition-all duration-300">
                <div className="text-neon-cyan text-2xl mb-2">⚡</div>
                <h3 className="font-semibold text-foreground">DIY Reactors</h3>
                <p className="text-sm text-muted-foreground">Build from scrap parts</p>
              </Card>
              
              <Card className="p-4 bg-card/50 border-neon-purple/20 hover:border-neon-purple/40 transition-all duration-300">
                <div className="text-neon-purple text-2xl mb-2">🔬</div>
                <h3 className="font-semibold text-foreground">Expert Knowledge</h3>
                <p className="text-sm text-muted-foreground">Julian's proven methods</p>
              </Card>
              
              <Card className="p-4 bg-card/50 border-neon-pink/20 hover:border-neon-pink/40 transition-all duration-300">
                <div className="text-neon-pink text-2xl mb-2">🛡️</div>
                <h3 className="font-semibold text-foreground">Safety First</h3>
                <p className="text-sm text-muted-foreground">Comprehensive warnings</p>
              </Card>
              
              <Card className="p-4 bg-card/50 border-neon-green/20 hover:border-neon-green/40 transition-all duration-300">
                <div className="text-neon-green text-2xl mb-2">🌍</div>
                <h3 className="font-semibold text-foreground">Global Impact</h3>
                <p className="text-sm text-muted-foreground">End plastic pollution</p>
              </Card>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://chatgpt.com/g/g-68853f78b2988191a919e23f74d724b1-plastic-to-fuel-plastoline-julian-brown"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="cyber" size="xl" className="w-full">
                  START LEARNING NOW
                </Button>
              </a>
              <a href="#how-it-works" className="flex-1">
                <Button variant="neon" size="xl" className="w-full">
                  How It Works
                </Button>
              </a>
            </div>
          </div>

          {/* Right Content - Video */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-neon-cyan/20 to-neon-purple/20 z-10"></div>
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/iiDMwktd8W4?autoplay=1&mute=0&quality=hd1080"
                title="Julian Brown Plastic to Fuel"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="relative z-0"
              ></iframe>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-neon-pink/20 rounded-full animate-float blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-neon-cyan/20 rounded-full animate-float blur-xl" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;