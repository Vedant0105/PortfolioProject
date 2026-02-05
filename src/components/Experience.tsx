import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Software Specialist",
    company: "Delaplex Ltd.",
    location: "Nagpur, India",
    period: "Oct 2024 – Dec 2025",
    highlights: [
      "Led development of AI-powered LMS for 400+ users with role-based access control",
      "Built scalable backend services using Python, REST APIs, and AWS S3 integration",
      "Reduced API calls by 60% using caching and debouncing techniques",
      "Created reusable React components with TypeScript and Redux, reducing code duplication by 40%",
      "Implemented AI chatbot using RAG pipelines and GPT embeddings",
    ],
  },
  {
    title: "Software Specialist Trainee",
    company: "Delaplex Ltd.",
    location: "Nagpur, India",
    period: "Jan 2024 – Oct 2024",
    highlights: [
      "Built full-stack e-commerce application using Flask, React.js, and MongoDB",
      "Implemented image-based product recommendations using Google Vision API",
      "Designed warehouse management POC improving inventory operations by 50%",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-primary text-lg">03.</span>
            <h2 className="font-mono text-2xl md:text-3xl font-bold text-foreground">Experience</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 md:pl-20">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-8 top-0 w-4 h-4 -translate-x-1/2 bg-primary rounded-full border-4 border-background animate-pulse-glow" />

                  {/* Content Card */}
                  <div className="bg-card border border-border rounded-lg p-6 card-hover">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="font-mono text-xl font-bold text-foreground">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <div className="flex flex-col items-start md:items-end gap-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} />
                          <span className="font-mono">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <span className="text-primary mt-1.5">▹</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
