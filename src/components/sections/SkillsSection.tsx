import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillCategories = [
  {
    title: "Programming & Fundamentals",
    skills: ["C", "HTML", "CSS", "Python"],
    note: "Building strong foundations",
  },
  {
    title: "Tools & Platforms",
    skills: ["GitHub", "VS Code", "ChatGPT", "Gemini", "Claude"],
    note: "Daily workflow",
  },
  {
    title: "No-Code & Automation",
    skills: ["Lovable", "Bolt", "Cursor", "AI Workflows"],
    note: "Rapid prototyping",
  },
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="skills" className="py-24 lg:py-32 px-6 lg:px-12 bg-card">
      <div 
        ref={ref}
        className={`max-w-4xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-1">
            <h2 className="text-sm font-mono text-muted-foreground tracking-wide uppercase">
              Skills
            </h2>
          </div>
          
          <div className="lg:col-span-2">
            <div className="space-y-12">
              {skillCategories.map((category, index) => (
                <div 
                  key={index} 
                  className="space-y-4"
                  style={{ 
                    transitionDelay: `${index * 150}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.5s ease-out'
                  }}
                >
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-medium text-lg">{category.title}</h3>
                    <span className="text-xs text-muted-foreground font-mono">
                      {category.note}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-4 py-2 bg-secondary text-secondary-foreground text-sm rounded-full transition-all duration-300 hover:bg-muted hover:scale-105"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
