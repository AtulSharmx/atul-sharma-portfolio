import { ExternalLink, FileText, Sparkles, Download, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: FileText,
    title: "Resume Upload",
    description: "Upload your existing resume in PDF format",
  },
  {
    icon: Sparkles,
    title: "AI Optimization",
    description: "Smart analysis and keyword enhancement",
  },
  {
    icon: CheckCircle,
    title: "ATS-Friendly Output",
    description: "Formatted to pass automated screening",
  },
  {
    icon: Download,
    title: "Easy Export",
    description: "Download or copy your optimized resume",
  },
];

const ProjectSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, rootMargin: "0px 0px -100px 0px" });
  const { ref: featuresRef, isVisible: featuresVisible, getItemStyle } = useStaggeredAnimation(features.length, {
    threshold: 0.1,
    staggerDelay: 120,
  });

  return (
    <section id="project" className="py-24 lg:py-32 px-6 lg:px-12">
      <div 
        ref={ref}
        className={`max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
      >
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          <div 
            className={`lg:col-span-1 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
            }`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '100ms' }}
          >
            <h2 className="text-sm font-mono text-muted-foreground tracking-wide uppercase">
              Featured Project
            </h2>
          </div>
          
          <div className="lg:col-span-2 space-y-8">
            <div 
              className={`space-y-4 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '150ms' }}
            >
              <div className="flex items-center gap-3">
                <h3 className="text-3xl md:text-4xl font-serif font-medium">
                  Clear CV
                </h3>
                <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-mono rounded animate-pulse-subtle">
                  Active
                </span>
              </div>
              <p className="text-xl text-muted-foreground">
                AI-Powered Resume Builder
              </p>
            </div>

            <div 
              className={`space-y-4 text-muted-foreground leading-relaxed transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '250ms' }}
            >
              <p>
                Most job seekers do not realize that their resume might never reach human eyes. 
                Automated screening systems filter out qualified candidates simply because their 
                resumes are not formatted or worded in ways these systems understand. I built 
                Clear CV to level the playing field.
              </p>
              <p>
                The tool analyzes your resume alongside the job description you are targeting, 
                identifies gaps and opportunities, and helps you present your experience in a way 
                that resonates with both algorithms and hiring managers. It is straightforward, 
                practical, and designed with real job seekers in mind.
              </p>
            </div>

            <div ref={featuresRef} className="grid sm:grid-cols-2 gap-6 pt-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="group p-4 rounded-lg border border-border bg-card hover:bg-accent transition-all duration-500 hover-lift"
                  style={getItemStyle(index)}
                >
                  <feature.icon className="h-5 w-5 text-muted-foreground mb-3 group-hover:text-foreground group-hover:scale-110 transition-all duration-500" />
                  <h4 className="font-medium mb-1 group-hover:text-primary transition-colors duration-500">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>

            <div 
              className={`pt-4 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '500ms' }}
            >
              <Button 
                size="lg" 
                className="group hover-magnetic hover:shadow-xl transition-all duration-500"
                asChild
              >
                <a 
                  href="https://github.com/AtulSharmx/clearcv-optimize" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Live Demo
                  <ExternalLink className="ml-2 h-4 w-4 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:scale-110" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
