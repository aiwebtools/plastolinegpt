import { Card } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Learn Reactor Design",
      description: "Understand microwave pyrolysis technology and how to build reactors from scrap materials.",
      icon: "🔧",
      color: "neon-cyan"
    },
    {
      number: "02", 
      title: "Safety Protocols",
      description: "Master essential safety measures, PPE requirements, and explosion prevention techniques.",
      icon: "🛡️",
      color: "neon-pink"
    },
    {
      number: "03",
      title: "Plastic Processing",
      description: "Learn to sort, clean, and prepare different plastic types for optimal fuel conversion.",
      icon: "♻️",
      color: "neon-purple"
    },
    {
      number: "04",
      title: "Fuel Production",
      description: "Convert waste into gasoline, diesel, and jet fuel through controlled pyrolysis.",
      icon: "⛽",
      color: "neon-green"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-neon-cyan">How</span>{" "}
            <span className="text-neon-pink">It</span>{" "}
            <span className="text-foreground">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Plastoline Julian guides you through Julian Brown's proven methodology 
            for converting plastic waste into clean fuel using DIY pyrolysis reactors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className={`relative p-8 bg-card/80 border-${step.color}/20 hover:border-${step.color}/40 transition-all duration-500 group overflow-hidden`}
            >
              {/* Background glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${step.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Step number */}
                <div className={`text-6xl font-bold text-${step.color}/30 mb-4`}>
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="text-4xl mb-4 animate-float">
                  {step.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Decorative element */}
              <div className={`absolute -bottom-2 -right-2 w-16 h-16 bg-${step.color}/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500`}></div>
            </Card>
          ))}
        </div>

        {/* Technical Process */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-neon-cyan">
            The Pyrolysis Process
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-6 bg-card/50 border-neon-cyan/20">
              <h4 className="text-lg font-semibold mb-4 text-neon-cyan">Input Stage</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Sorted plastic waste (HDPE, PP, PS)</li>
                <li>• Clean, dry feedstock preparation</li>
                <li>• Temperature monitoring setup</li>
                <li>• Safety equipment verification</li>
              </ul>
            </Card>
            
            <Card className="p-6 bg-card/50 border-neon-purple/20">
              <h4 className="text-lg font-semibold mb-4 text-neon-purple">Conversion</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Microwave pyrolysis heating</li>
                <li>• Polymer chain breakdown</li>
                <li>• Vapor collection system</li>
                <li>• Real-time process monitoring</li>
              </ul>
            </Card>
            
            <Card className="p-6 bg-card/50 border-neon-green/20">
              <h4 className="text-lg font-semibold mb-4 text-neon-green">Output</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Gasoline, diesel, jet fuel</li>
                <li>• Quality testing procedures</li>
                <li>• Safe storage methods</li>
                <li>• Environmental compliance</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;