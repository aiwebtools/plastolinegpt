import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const YoutubeSection = () => {
  // Sample Julian Brown videos - in a real implementation, you'd fetch from YouTube API
  const sampleVideos = [
    {
      id: "iiDMwktd8W4",
      title: "Plastic to Fuel - How to Make Gasoline from Plastic Waste",
      thumbnail: `https://img.youtube.com/vi/iiDMwktd8W4/maxresdefault.jpg`,
      duration: "15:32"
    },
    {
      id: "sample1", 
      title: "Building a DIY Pyrolysis Reactor - Step by Step Guide",
      thumbnail: `https://img.youtube.com/vi/iiDMwktd8W4/maxresdefault.jpg`,
      duration: "22:45"
    },
    {
      id: "sample2",
      title: "Safety Protocols for Plastic to Fuel Conversion",
      thumbnail: `https://img.youtube.com/vi/iiDMwktd8W4/maxresdefault.jpg`, 
      duration: "18:20"
    },
    {
      id: "sample3",
      title: "Microwave Pyrolysis: Advanced Techniques",
      thumbnail: `https://img.youtube.com/vi/iiDMwktd8W4/maxresdefault.jpg`,
      duration: "25:15"
    },
    {
      id: "sample4",
      title: "Converting Plastic Waste to Diesel Fuel",
      thumbnail: `https://img.youtube.com/vi/iiDMwktd8W4/maxresdefault.jpg`,
      duration: "19:30"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-neon-green/5 to-neon-cyan/5 animate-drift"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-orbitron">
            <span className="text-neon-green">Julian</span>{" "}
            <span className="text-neon-red">Brown's</span>{" "}
            <span className="text-foreground">Channel</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Watch Julian "Jab" Brown's original videos and learn directly from the innovator 
            who revolutionized plastic-to-fuel conversion technology.
          </p>
          
          {/* Follow Julian Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="https://www.youtube.com/@naturejab"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="youtube" size="xxl" className="animate-float">
                <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.5 6.2c-.3-1.1-1.1-1.9-2.2-2.2C19.4 3.5 12 3.5 12 3.5s-7.4 0-9.3.5c-1.1.3-1.9 1.1-2.2 2.2C0 8.1 0 12 0 12s0 3.9.5 5.8c.3 1.1 1.1 1.9 2.2 2.2 1.9.5 9.3.5 9.3.5s7.4 0 9.3-.5c1.1-.3 1.9-1.1 2.2-2.2.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8z"/>
                  <path d="M9.5 15.5l6-3.5-6-3.5v7z" fill="black"/>
                </svg>
                FOLLOW JULIAN ON YOUTUBE
              </Button>
            </a>
            <div className="text-muted-foreground font-exo">
              @naturejab • 50K+ subscribers
            </div>
          </div>
        </div>

        {/* Video Grid */}
        <div className="relative">
          <h3 className="text-2xl font-bold text-center mb-8 text-neon-cyan font-space">
            Featured Videos & Tutorials
          </h3>
          
          {/* Scrollable video container */}
          <div className="overflow-x-auto pb-4">
            <div className="flex space-x-6 min-w-max">
              {sampleVideos.map((video, index) => (
                <Card 
                  key={video.id}
                  className="w-80 bg-card/60 border-border hover:border-neon-cyan/40 transition-all duration-500 group overflow-hidden flex-shrink-0"
                >
                  <div className="relative">
                    {/* Video thumbnail */}
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img 
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Play button overlay */}
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 bg-neon-red rounded-full flex items-center justify-center shadow-[0_0_20px_hsl(var(--neon-red)/0.6)] animate-glow-pulse">
                          <svg className="w-8 h-8 text-background ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>

                      {/* Duration badge */}
                      <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm font-mono">
                        {video.duration}
                      </div>
                    </div>

                    {/* Video info */}
                    <div className="p-6">
                      <h4 className="font-semibold text-foreground mb-3 line-clamp-2 leading-tight font-exo">
                        {video.title}
                      </h4>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-muted-foreground text-sm">
                          Julian "Jab" Brown
                        </div>
                        <a 
                          href={`https://www.youtube.com/watch?v=${video.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="hologram" size="sm">
                            Watch
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* View More Button */}
          <div className="text-center mt-8">
            <a 
              href="https://www.youtube.com/@naturejab"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="matrix" size="lg" className="animate-pulse-glow">
                VIEW ALL VIDEOS ON CHANNEL
              </Button>
            </a>
          </div>
        </div>

        {/* Channel Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="p-6 bg-card/40 border-neon-green/20 text-center">
            <div className="text-3xl font-bold text-neon-green mb-2 font-orbitron">50K+</div>
            <div className="text-muted-foreground font-exo">Subscribers</div>
          </Card>
          <Card className="p-6 bg-card/40 border-neon-cyan/20 text-center">
            <div className="text-3xl font-bold text-neon-cyan mb-2 font-orbitron">200+</div>
            <div className="text-muted-foreground font-exo">Videos</div>
          </Card>
          <Card className="p-6 bg-card/40 border-neon-pink/20 text-center">
            <div className="text-3xl font-bold text-neon-pink mb-2 font-orbitron">5M+</div>
            <div className="text-muted-foreground font-exo">Views</div>
          </Card>
          <Card className="p-6 bg-card/40 border-neon-purple/20 text-center">
            <div className="text-3xl font-bold text-neon-purple mb-2 font-orbitron">10+</div>
            <div className="text-muted-foreground font-exo">Years Active</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default YoutubeSection;