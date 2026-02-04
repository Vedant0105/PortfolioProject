import { Mail, MapPin, Phone, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex-1 h-px bg-border max-w-[100px]" />
            <span className="font-mono text-primary text-lg">05.</span>
            <h2 className="font-mono text-2xl md:text-3xl font-bold text-foreground">Get In Touch</h2>
            <div className="flex-1 h-px bg-border max-w-[100px]" />
          </div>

          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            I'm currently open to new opportunities and always interested in connecting with fellow developers. 
            Whether you have a question or just want to say hi, I'll do my best to get back to you!
          </p>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:mundelvedant152@gmail.com"
              className="group p-6 bg-card border border-border rounded-lg card-hover text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="text-primary" size={24} />
              </div>
              <h3 className="font-mono font-semibold text-foreground mb-2">Email</h3>
              <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                mundelvedant152@gmail.com
              </p>
            </a>

            <a
              href="tel:+918379962123"
              className="group p-6 bg-card border border-border rounded-lg card-hover text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="text-primary" size={24} />
              </div>
              <h3 className="font-mono font-semibold text-foreground mb-2">Phone</h3>
              <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                +91-8379962123
              </p>
            </a>

            <div className="group p-6 bg-card border border-border rounded-lg text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <MapPin className="text-primary" size={24} />
              </div>
              <h3 className="font-mono font-semibold text-foreground mb-2">Location</h3>
              <p className="text-sm text-muted-foreground">Pune, India</p>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="mailto:mundelvedant152@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-mono font-medium text-lg transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] group"
          >
            <span>Say Hello</span>
            <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <a
              href="https://www.linkedin.com/in/vedant-mundel"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-secondary rounded-full text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
