import { Terminal, Code2, Database, Cpu } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-primary text-lg">01.</span>
            <h2 className="font-mono text-2xl md:text-3xl font-bold text-foreground">About Me</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I'm a Full Stack Developer based in{" "}
                <span className="text-primary">Pune, India</span>, with a passion for building 
                applications that are not only functional but also scalable and maintainable.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With over <span className="text-primary">2 years</span> of professional experience, 
                I've had the privilege of working on AI-powered Learning Management Systems, 
                e-commerce platforms, and innovative RAG-based solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I hold a <span className="text-primary">B.Tech in Information Technology</span> from 
                Yeshwantrao Chavan College of Engineering with a CGPA of 8.2/10. When I'm not coding, 
                you'll find me solving problems on LeetCode or exploring new technologies.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="p-4 bg-card border border-border rounded-lg card-hover">
                  <p className="font-mono text-3xl font-bold text-primary">400+</p>
                  <p className="text-sm text-muted-foreground">Users Served</p>
                </div>
                <div className="p-4 bg-card border border-border rounded-lg card-hover">
                  <p className="font-mono text-3xl font-bold text-primary">60%</p>
                  <p className="text-sm text-muted-foreground">API Optimization</p>
                </div>
                <div className="p-4 bg-card border border-border rounded-lg card-hover">
                  <p className="font-mono text-3xl font-bold text-primary">150+</p>
                  <p className="text-sm text-muted-foreground">LeetCode Problems</p>
                </div>
                <div className="p-4 bg-card border border-border rounded-lg card-hover">
                  <p className="font-mono text-3xl font-bold text-primary">40%</p>
                  <p className="text-sm text-muted-foreground">Code Reusability</p>
                </div>
              </div>
            </div>

            {/* Terminal Card */}
            <div className="bg-card border border-border rounded-lg overflow-hidden glow-border">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-terminal-green" />
                <span className="ml-2 font-mono text-xs text-muted-foreground">vedant@portfolio:~</span>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm space-y-4">
                <div>
                  <span className="text-primary">$</span>
                  <span className="text-muted-foreground"> cat about.json</span>
                </div>
                <pre className="text-muted-foreground bg-code-bg p-4 rounded overflow-x-auto">
{`{
  "name": "Vedant Mundel",
  "role": "Full Stack Developer",
  "location": "Nagpur, India",
  "experience": "1.8+ years",
  "focus": [
    "Web Applications",
    "AI/ML Integration",
    "Performance Optimization"
  ],
  "education": {
    "degree": "B.Tech IT",
    "cgpa": "8.2/10"
  }
}`}
                </pre>
                <div className="flex items-center gap-2">
                  <span className="text-primary">$</span>
                  <span className="typing-cursor text-muted-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
