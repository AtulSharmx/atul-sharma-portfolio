import { Github, Linkedin, ExternalLink, FileDown, Mail, Instagram, Check, Copy } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { toast } from "sonner";

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
    href: "#",
    description: "Copy to clipboard",
    isEmail: true,
  },
];

const LinksSection = () => {
  const [copied, setCopied] = useState(false);
  const { ref, isVisible } = useScrollAnimation(0.1);

  const handleEmailClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    const email = "atul.sharma.09.10.2006@gmail.com";
    
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      toast.success("Email copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy email");
    }
  };

  return (
    <section id="links" className="py-24 lg:py-32 px-6 lg:px-12 bg-card">
      <div 
        ref={ref}
        className={`max-w-4xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-1">
            <h2 className="text-sm font-mono text-muted-foreground tracking-wide uppercase">
              Connect
            </h2>
          </div>
          
          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {links.map((link, index) => {
                const isEmailLink = 'isEmail' in link && link.isEmail;
                
                return (
                  <a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    download={'download' in link && link.download ? "Atul_Sharma_Resume.pdf" : undefined}
                    onClick={isEmailLink ? handleEmailClick : undefined}
                    className={`group p-5 rounded-lg border border-border bg-background hover:bg-accent transition-all duration-300 hover-lift cursor-pointer`}
                    style={{ 
                      transitionDelay: `${index * 50}ms`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                    }}
                  >
                    {isEmailLink && copied ? (
                      <Check className="h-5 w-5 text-green-500 mb-3 transition-all duration-300" />
                    ) : (
                      <link.icon className="h-5 w-5 text-muted-foreground mb-3 group-hover:text-foreground transition-colors duration-300" />
                    )}
                    <p className="font-medium group-hover:text-foreground transition-colors duration-300">
                      {isEmailLink && copied ? "Copied!" : link.label}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {link.description}
                    </p>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinksSection;
