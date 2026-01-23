import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "AI-Powered LMS",
    description:
      "Learning Management System serving 400+ users with role-based access control, analytics dashboards, and AI chatbot integration using RAG pipelines.",
    tech: ["React", "TypeScript", "Python", "FastAPI", "MongoDB", "AWS S3"],
    featured: true,
  },
  {
    title: "Resume RAG System",
    description:
      "Retrieval-Augmented Generation API enabling PDF ingestion, text chunking, vector embeddings, and semantic search with FAISS for context-aware query responses.",
    tech: ["Python", "FastAPI", "FAISS", "Vector Embeddings"],
    featured: true,
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce application with RESTful APIs for product management, authentication, order processing, and image-based recommendations.",
    tech: ["Flask", "React.js", "MongoDB", "Google Vision API"],
    featured: true,
  },
  {
    title: "Sales Analytics Dashboard",
    description:
      "Interactive data visualization platform providing actionable business insights through KPI tracking and trend analysis.",
    tech: ["Tableau", "Data Analysis", "SQL"],
    featured: false,
  },
  {
    title: "Warehouse Management POC",
    description:
      "Proof of concept supporting CSV/text/image uploads, improving inventory operations efficiency by 50%.",
    tech: ["Python", "React", "MongoDB"],
    featured: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/20 relative">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,hsl(var(--primary)/0.02)_25%,transparent_25%,transparent_75%,hsl(var(--primary)/0.02)_75%)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-primary text-lg">04.</span>
            <h2 className="font-mono text-2xl md:text-3xl font-bold text-foreground">Featured Projects</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Featured Projects */}
          <div className="grid gap-8 mb-12">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <div
                  key={project.title}
                  className="group relative bg-card border border-border rounded-lg p-8 card-hover overflow-hidden"
                >
                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Folder className="text-primary" size={24} />
                      </div>
                      <div className="flex items-center gap-4">
                        <button className="text-muted-foreground hover:text-primary transition-colors">
                          <Github size={20} />
                        </button>
                        <button className="text-muted-foreground hover:text-primary transition-colors">
                          <ExternalLink size={20} />
                        </button>
                      </div>
                    </div>

                    <h3 className="font-mono text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-mono bg-secondary text-primary border border-primary/30 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Other Projects Grid */}
          <h3 className="font-mono text-xl font-semibold text-foreground mb-6">Other Notable Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project) => (
                <div
                  key={project.title}
                  className="group p-6 bg-card border border-border rounded-lg card-hover"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Folder className="text-primary" size={20} />
                    <h4 className="font-mono font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs font-mono text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
