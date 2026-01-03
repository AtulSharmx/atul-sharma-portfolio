import { Github, Linkedin, ExternalLink, FileDown, Mail, Instagram } from "lucide-react";

const links = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/atul-sharma-869715392/",
    description: "Professional profile",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/AtulSharmx",
    description: "Code and projects",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/atul_sharmx_/",
    description: "Personal updates",
  },
  {
    icon: ExternalLink,
    label: "Clear CV",
    href: "https://github.com/AtulSharmx/clearcv-optimize",
    description: "View project",
  },
  {
    icon: FileDown,
    label: "Resume",
    href: "/resume.pdf",
    description: "Download PDF",
    download: true,
  },
  {
    icon: Mail,
    label: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=atul.sharma.09.10.2006@gmail.com",
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
                  download={link.download ? "Atul_Sharma_Resume.pdf" : undefined}
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
