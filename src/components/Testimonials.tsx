import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Maria Santos",
      role: "Environmental Engineer",
      location: "São Paulo, Brazil",
      image: "👩‍🔬",
      quote: "Plastoline Julian helped me understand the technical aspects of pyrolysis that I never grasped before. The step-by-step guidance on reactor design was invaluable for our community project.",
      rating: 5
    },
    {
      name: "Ahmed Hassan",
      role: "Sustainability Researcher", 
      location: "Cairo, Egypt",
      image: "👨‍💼",
      quote: "As someone studying waste-to-energy solutions, this AI provided insights into Julian Brown's work that I couldn't find anywhere else. The safety protocols are comprehensive and practical.",
      rating: 5
    },
    {
      name: "Rebecca Chen",
      role: "Innovation Lab Director",
      location: "Singapore",
      image: "👩‍💻",
      quote: "We've been exploring plastic waste solutions for months. Plastoline Julian accelerated our understanding dramatically. The detailed explanations of microwave pyrolysis are exceptional.",
      rating: 5
    },
    {
      name: "Carlos Rodriguez",
      role: "Mechanical Engineer",
      location: "Mexico City, Mexico", 
      image: "👨‍🔧",
      quote: "The practical approach to building reactors from scrap materials is genius. Julian's methodology, explained through this AI, is revolutionizing how we think about waste management.",
      rating: 5
    },
    {
      name: "Dr. Priya Patel",
      role: "Clean Energy Consultant",
      location: "Mumbai, India",
      image: "👩‍⚕️",
      quote: "This AI captures Julian's passion and knowledge perfectly. The emphasis on community empowerment and local energy independence resonates with our work in rural areas.",
      rating: 5
    },
    {
      name: "James Mitchell",
      role: "Environmental Activist",
      location: "London, UK",
      image: "👨‍🌾",
      quote: "Finally, accessible knowledge about converting plastic waste to fuel! The safety warnings and step-by-step instructions make this technology approachable for everyday inventors.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-neon-pink">What</span>{" "}
            <span className="text-neon-cyan">Experts</span>{" "}
            <span className="text-foreground">Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Researchers, engineers, and innovators worldwide trust Plastoline Julian 
            to provide accurate, practical knowledge about plastic-to-fuel conversion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/60 border-border hover:border-neon-cyan/40 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Rating Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-neon-cyan text-lg">⭐</span>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Profile */}
                <div className="flex items-center">
                  <div className="text-3xl mr-4 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-full w-12 h-12 flex items-center justify-center">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-neon-cyan">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-neon-pink/10 to-transparent"></div>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-cyan mb-2">10,000+</div>
              <div className="text-muted-foreground">Users Worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-purple mb-2">95%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-pink mb-2">24/7</div>
              <div className="text-muted-foreground">Available Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-green mb-2">50+</div>
              <div className="text-muted-foreground">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;