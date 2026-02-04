import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />
      
      {/* Gradient Orb */}
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Terminal Header */}
          <div className="animate-slide-up opacity-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 border border-border rounded-full mb-8">
              <span className="w-2 h-2 bg-terminal-green rounded-full animate-pulse" />
              <span className="font-mono text-sm text-muted-foreground">Immediate Joiner</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold mb-6 animate-slide-up opacity-0 delay-100">
            <span className="text-muted-foreground">Hi, I'm</span>
            <br />
            <span className="gradient-text glow-text">Vedant Mundel</span>
          </h1>

          {/* Subtitle with typing effect */}
          <div className="animate-slide-up opacity-0 delay-200">
            <p className="font-mono text-xl md:text-2xl text-muted-foreground mb-4">
              <span className="text-primary">&gt;</span> Full Stack Developer
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mb-8">
              Building scalable web applications and AI-powered solutions with 
              <span className="text-primary"> 1.8+ years</span> of experience. 
              Passionate about clean code architecture and performance optimization.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12 animate-slide-up opacity-0 delay-300">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono font-medium transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)]"
            >
              View My Work
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-mono font-medium hover:border-primary hover:text-primary transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 animate-slide-up opacity-0 delay-400">
            <a
              href="https://www.linkedin.com/in/vedant-mundel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
