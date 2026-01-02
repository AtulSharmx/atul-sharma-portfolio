import { ArrowDown, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToProject = () => {
    document.getElementById("project")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 lg:px-12">
      <div className="max-w-4xl mx-auto w-full">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-muted-foreground font-mono text-sm tracking-wide animate-fade-in-up">
              AI Tool Builder / Cybersecurity Student
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight animate-fade-in-delay-1">
              Atul Sharma
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed animate-fade-in-delay-2">
            I build AI-powered tools that solve real problems. Currently developing Clear CV, 
            an intelligent resume optimizer that helps job seekers beat ATS systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-delay-3">
            <Button 
              variant="default" 
              size="lg"
              onClick={scrollToProject}
              className="group"
            >
              View Project
              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToContact}
              className="group"
            >
              Contact Me
              <Mail className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-in-delay-3">
        <button 
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          className="p-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
