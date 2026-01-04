import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, rootMargin: "0px 0px -100px 0px" });

  return (
    <section id="about" className="py-24 lg:py-32 px-6 lg:px-12">
      <div 
        ref={ref}
        className={`max-w-4xl mx-auto transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          <div 
            className={`lg:col-span-1 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="text-sm font-mono text-muted-foreground tracking-wide uppercase">
              About
            </h2>
          </div>
          
          <div className="lg:col-span-2 space-y-6">
            <p 
              className={`text-2xl md:text-3xl font-serif leading-relaxed transition-all duration-700 delay-150 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              I believe the best solutions come from understanding both the problem and the people it affects.
            </p>
            
            <div 
              className={`space-y-4 text-muted-foreground leading-relaxed transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p>
                I am a second-year Cybersecurity student at SGT University with a genuine curiosity 
                for how things work and a drive to make them work better. My journey into AI tools 
                started when I noticed how many talented people struggle to get past automated 
                resume screening, and I decided to do something about it.
              </p>
              <p>
                What excites me most is building things that are genuinely useful. I approach every 
                project with patience and attention to detail, taking time to understand the real 
                needs before writing a single line of code. Security and reliability are not 
                afterthoughts for me; they are foundational to everything I create.
              </p>
            </div>

            <div 
              className={`pt-6 border-t border-border transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="grid grid-cols-2 gap-8">
                <div className="group">
                  <p className="text-sm text-muted-foreground font-mono">Education</p>
                  <p className="mt-1 font-medium group-hover:text-primary transition-colors duration-300">BCA Cybersecurity</p>
                  <p className="text-sm text-muted-foreground">SGT University</p>
                </div>
                <div className="group">
                  <p className="text-sm text-muted-foreground font-mono">Status</p>
                  <p className="mt-1 font-medium group-hover:text-primary transition-colors duration-300">2nd Semester</p>
                  <p className="text-sm text-muted-foreground">Graduating August 2028</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
