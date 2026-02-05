const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">&lt;</span>
            Designed & Built by Vedant Mundel
            <span className="text-primary">/&gt;</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
