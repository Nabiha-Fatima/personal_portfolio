import { Icon } from "@iconify/react";

const About = () => {
  const highlights = [
    {
      icon: "mdi:code-tags",
      title: "Frontend Focus",
      text: "React, JavaScript, Tailwind CSS",
    },
    {
      icon: "mdi:palette-outline",
      title: "Design",
      text: "Clean UI & responsive layouts",
    },
    {
      icon: "mdi:school-outline",
      title: "Learning",
      text: "Always improving my craft",
    },
  ];

  return (
    <section id="about" className="bg-secondary/95 py-16 sm:py-20 md:py-24">
      <div className="custom_container px-5 sm:px-6 md:px-0">
        {/* Section heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            About Me
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
          {/* Left: intro text */}
          <div className="flex-1 text-center md:text-left mb-10 lg:mb-0">
            <p className="font-roboto text-muted text-base sm:text-lg leading-relaxed mb-4">
              I&apos;m <span className="text-primary font-medium">Nabiha Fatima</span>, a frontend developer
              and designer focused on building fast, accessible, and visually clear web experiences.
            </p>
            <p className="font-roboto text-muted/90 text-base sm:text-lg leading-relaxed">
              I enjoy turning ideas into real interfaces—from wireframes to production code. 
              Clean structure, responsive design, and attention to detail are at the heart of my work.
            </p>
          </div>

          {/* Right: highlights */}
          <div className="flex-1 space-y-4 sm:space-y-5">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 sm:p-5 rounded-xl bg-secondary border border-white/5 hover:border-primary/20 transition-colors duration-300"
              >
                <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon icon={item.icon} className="text-primary" width="24" height="24" />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-white text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="font-roboto text-muted text-sm sm:text-base">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
