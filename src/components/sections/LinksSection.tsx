import { Github, Linkedin, ExternalLink, FileDown, Mail } from "lucide-react";

const links = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/atulsharma",
    description: "Professional profile",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/atulsharma",
    description: "Code & projects",
  },
  {
    icon: ExternalLink,
    label: "Clear CV Demo",
    href: "https://clearcv.lovable.app",
    description: "Live project",
  },
  {
    icon: FileDown,
    label: "Resume",
    href: "#",
    description: "Download PDF",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:atul.sharma.09.10.2006@gmail.com",
    description: "Get in touch",
  },
];

const LinksSection = () => {
  return (
    <section id="links" className="py-24 lg:py-32 px-6 lg:px-12 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-1">
            <h2 className="text-sm font-mono text-muted-foreground tracking-wide uppercase">
              Connect
            </h2>
          </div>
          
          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group p-5 rounded-lg border border-border bg-background hover:bg-accent transition-all hover-lift"
                >
                  <link.icon className="h-5 w-5 text-muted-foreground mb-3 group-hover:text-foreground transition-colors" />
                  <p className="font-medium group-hover:text-foreground transition-colors">
                    {link.label}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {link.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinksSection;
