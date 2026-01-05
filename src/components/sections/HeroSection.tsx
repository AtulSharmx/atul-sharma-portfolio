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
    <section className="min-h-screen flex flex-col justify-center relative px-6 lg:px-12 overflow-hidden">
      <div className="max-w-4xl mx-auto w-full">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-muted-foreground font-mono text-sm tracking-wide animate-blur-in">
              AI Tool Builder / Cybersecurity Student
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight animate-fade-in-delay-1">
              Atul Sharma
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed animate-fade-in-delay-2">
            I create practical AI tools that address genuine challenges people face every day. 
            My current focus is Clear CV, a resume optimization tool designed to help candidates 
            navigate automated screening systems with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-delay-3">
            <Button 
              variant="default" 
              size="lg"
              onClick={scrollToProject}
              className="group hover-magnetic hover:shadow-xl transition-all duration-500"
            >
              View Project
              <ExternalLink className="ml-2 h-4 w-4 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:scale-110" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToContact}
              className="group hover-magnetic hover:shadow-xl transition-all duration-500"
            >
              Contact Me
              <Mail className="ml-2 h-4 w-4 transition-all duration-500 group-hover:translate-x-1 group-hover:scale-110" />
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-in-delay-5">
        <button 
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          className="p-3 text-muted-foreground hover:text-foreground transition-all duration-500 hover:scale-125 group"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="h-5 w-5 animate-float" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
