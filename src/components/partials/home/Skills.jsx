import { Icon } from "@iconify/react";

const Skills = () => {
  const skills = [
    { name: "React", icon: "mdi:react" },
    { name: "JavaScript", icon: "mdi:language-javascript" },
    { name: "HTML5", icon: "mdi:language-html5" },
    { name: "CSS5", icon: "mdi:language-css3" },
    { name: "Tailwind CSS", icon: "mdi:tailwind" },
    { name: "Git", icon: "mdi:git" },
    { name: "Figma", icon: "simple-icons:figma" },
    { name: "Responsive Design", icon: "mdi:responsive" },
  ];

  return (
    <section id="skills" className="bg-secondary/95 py-16 sm:py-20 md:py-24">
      <div className="custom_container px-5 sm:px-6 md:px-0">
        {/* Section heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            Skills
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Skills – highlight-style cards (same as About highlights) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 sm:p-5 rounded-xl bg-secondary border border-white/5 hover:border-primary/20 transition-colors duration-300"
            >
              <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon icon={skill.icon} className="text-primary" width="24" height="24" />
              </div>
              <div>
                <h3 className="font-poppins font-semibold text-white text-lg">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
