import { ExternalLink, FileText, Sparkles, Download, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  return (
    <section id="project" className="py-24 lg:py-32 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-1">
            <h2 className="text-sm font-mono text-muted-foreground tracking-wide uppercase">
              Featured Project
            </h2>
          </div>
          
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <h3 className="text-3xl md:text-4xl font-serif font-medium">
                  Clear CV
                </h3>
                <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-mono rounded">
                  Active
                </span>
              </div>
              <p className="text-xl text-muted-foreground">
                AI-Powered Resume Builder
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Over 75% of resumes are rejected by ATS systems before a human ever sees them. 
                Clear CV solves this by intelligently analyzing your resume against job descriptions 
                and optimizing it for automated screening systems.
              </p>
              <p>
                Built to be practical and effective, it provides real-time feedback and generates 
                ATS-compatible output that maintains your professional narrative while maximizing 
                your chances of getting past the initial screening.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="group p-4 rounded-lg border border-border bg-card hover:bg-accent transition-colors"
                >
                  <feature.icon className="h-5 w-5 text-muted-foreground mb-3 group-hover:text-foreground transition-colors" />
                  <h4 className="font-medium mb-1">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button 
                size="lg" 
                className="group"
                asChild
              >
                <a 
                  href="https://clearcv.lovable.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Live Demo
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
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
