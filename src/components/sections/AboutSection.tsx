const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-1">
            <h2 className="text-sm font-mono text-muted-foreground tracking-wide uppercase">
              About
            </h2>
          </div>
          
          <div className="lg:col-span-2 space-y-6">
            <p className="text-2xl md:text-3xl font-serif leading-relaxed">
              I transform complex problems into elegant, functional solutions through code and AI.
            </p>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Currently pursuing a BCA in Cybersecurity at SGT University, I focus on building 
                practical tools that create real impact. My approach combines technical fundamentals 
                with modern AI capabilities to develop solutions that matter.
              </p>
              <p>
                As a problem solver at heart, I thrive on understanding systems deeply and finding 
                efficient ways to improve them. Whether it is optimizing a resume for ATS compatibility 
                or exploring cybersecurity vulnerabilities, I bring the same methodical, detail-oriented 
                approach to every project.
              </p>
            </div>

            <div className="pt-6 border-t border-border">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-sm text-muted-foreground font-mono">Education</p>
                  <p className="mt-1 font-medium">BCA Cybersecurity</p>
                  <p className="text-sm text-muted-foreground">SGT University</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-mono">Status</p>
                  <p className="mt-1 font-medium">2nd Semester</p>
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
