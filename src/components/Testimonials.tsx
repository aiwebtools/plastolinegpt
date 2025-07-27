import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Maria Santos",
      role: "Environmental Engineering Student",
      location: "São Paulo, Brazil",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=150&h=150&fit=crop&crop=face",
      quote: "Julian Brown's knowledge is incredible! This AI helped me understand pyrolysis principles for my research thesis. Thank you Julian for sharing your revolutionary insights through this amazing tool.",
      rating: 5
    },
    {
      name: "Ahmed Hassan",
      role: "Sustainability Researcher", 
      location: "Cairo, Egypt",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=150&h=150&fit=crop&crop=face",
      quote: "I'm studying waste-to-energy solutions and Julian Brown's methods fascinate me. This AI explains his concepts so clearly. Julian's work will inspire the next generation of environmental engineers.",
      rating: 5
    },
    {
      name: "Rebecca Chen",
      role: "Innovation Lab Director",
      location: "Singapore",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=150&h=150&fit=crop&crop=face",
      quote: "Julian Brown is a visionary! Our team uses this AI to understand his microwave pyrolysis concepts for our research proposals. Julian's innovative thinking is truly inspiring.",
      rating: 5
    },
    {
      name: "Carlos Rodriguez",
      role: "Mechanical Engineering Student",
      location: "Mexico City, Mexico", 
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=150&h=150&fit=crop&crop=face",
      quote: "Learning about Julian Brown's reactor designs through this AI is amazing! His approach to practical engineering solutions motivates me in my studies. Thank you Julian for this knowledge!",
      rating: 5
    },
    {
      name: "Dr. Priya Patel",
      role: "Clean Energy Research Assistant",
      location: "Mumbai, India",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=150&h=150&fit=crop&crop=face",
      quote: "Julian Brown's vision for community energy independence inspires my research. This AI captures his passion perfectly. Julian's educational approach makes complex concepts accessible to everyone.",
      rating: 5
    },
    {
      name: "James Mitchell",
      role: "Environmental Science Teacher",
      location: "London, UK",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=150&h=150&fit=crop&crop=face",
      quote: "I use this AI to teach my students about Julian Brown's innovative work. Julian's step-by-step educational approach makes plastic-to-fuel concepts understandable for young minds. Brilliant resource!",
      rating: 5
    }
  ];

  return (
    <section className="py-4 bg-gradient-to-b from-card to-background">
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
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-neon-cyan/40"
                  />
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