import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company?: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Atul brings a rare combination of technical skill and genuine understanding of user needs. His work on the AI resume tools has helped countless job seekers get past automated screening.",
    name: "Mentor Review",
    role: "Academic Advisor",
    company: "SGT University"
  },
  {
    quote: "What sets Atul apart is his methodical approach to problem-solving. He does not rush to solutions but takes time to understand the root cause before implementing fixes.",
    name: "Peer Feedback",
    role: "Fellow Developer",
    company: "Project Collaboration"
  },
  {
    quote: "His attention to security and reliability is exceptional for someone at his level. Every project he delivers feels polished and production-ready.",
    name: "Project Review",
    role: "Technical Mentor",
    company: "Development Community"
  }
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, rootMargin: "0px 0px -100px 0px" });

  return (
    <section id="testimonials" className="py-24 lg:py-32 px-6 lg:px-12 bg-secondary/30">
      <div 
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 mb-16">
          <div 
            className={`lg:col-span-1 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="text-sm font-mono text-muted-foreground tracking-wide uppercase">
              Testimonials
            </h2>
          </div>
          
          <div className="lg:col-span-2">
            <p 
              className={`text-2xl md:text-3xl font-serif leading-relaxed transition-all duration-700 delay-150 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              What others say about working with me.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative p-8 bg-card border border-border rounded-lg hover-lift transition-all duration-700 ${
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: isVisible ? `${200 + index * 100}ms` : "0ms" }}
            >
              <Quote 
                className="w-8 h-8 text-muted-foreground/30 mb-6 group-hover:text-primary/50 transition-colors duration-300" 
              />
              
              <blockquote className="text-foreground/90 leading-relaxed mb-8 text-sm">
                {testimonial.quote}
              </blockquote>
              
              <div className="mt-auto pt-6 border-t border-border">
                <p className="font-medium text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {testimonial.role}
                  {testimonial.company && (
                    <span className="text-muted-foreground/60"> · {testimonial.company}</span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
