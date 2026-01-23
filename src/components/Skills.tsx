const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: ["React.js", "Redux", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: ["Python", "FastAPI", "Node.js", "RESTful APIs", "JWT Auth"],
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: ["MongoDB", "QdrantDB", "IndexedDB"],
  },
  {
    title: "AI/ML",
    icon: "🤖",
    skills: ["RAG Pipelines", "Vector Embeddings", "Google Vision API", "FAISS"],
  },
  {
    title: "Cloud & Tools",
    icon: "☁️",
    skills: ["AWS S3", "Git", "GitHub", "Tableau"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-primary text-lg">02.</span>
            <h2 className="font-mono text-2xl md:text-3xl font-bold text-foreground">Skills & Technologies</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="group p-6 bg-card border border-border rounded-lg card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="font-mono text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm font-mono bg-secondary text-muted-foreground border border-border rounded hover:border-primary hover:text-primary transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Achievement Banner */}
          <div className="mt-12 p-6 bg-card border border-primary/30 rounded-lg glow-border">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="text-3xl">🏆</span>
                <div>
                  <h4 className="font-mono font-semibold text-foreground">Winner – Internal Cyber Hackathon</h4>
                  <p className="text-sm text-muted-foreground">Delaplex Ltd.</p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
                <span className="font-mono text-primary">LeetCode 150+</span>
                <span className="text-muted-foreground">Problems Solved</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
