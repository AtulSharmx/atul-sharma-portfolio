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
              I believe the best solutions come from understanding both the problem and the people it affects.
            </p>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
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
