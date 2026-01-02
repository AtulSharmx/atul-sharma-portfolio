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
  return (
    <section id="skills" className="py-24 lg:py-32 px-6 lg:px-12 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-1">
            <h2 className="text-sm font-mono text-muted-foreground tracking-wide uppercase">
              Skills
            </h2>
          </div>
          
          <div className="lg:col-span-2">
            <div className="space-y-12">
              {skillCategories.map((category, index) => (
                <div key={index} className="space-y-4">
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
                        className="px-4 py-2 bg-secondary text-secondary-foreground text-sm rounded-full transition-colors hover:bg-muted"
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
