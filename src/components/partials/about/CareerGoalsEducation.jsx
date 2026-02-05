import { Icon } from "@iconify/react";

const CareerGoalsEducation = () => {
  const careerGoals = [
    "Become a senior frontend developer with strong React and modern JS expertise.",
    "Build fast, accessible, and user-focused digital products.",
    "Lead UI/UX strategy and support junior developers through mentorship.",
  ];

  const education = [
    {
      degree: "Bachelor of Information Technology",
      institution: "University of Sindh",
      year: "2020 – 2024",
      icon: "mdi:school-outline",
    },
    {
      degree: "Web Development Certificate (PITP Course)",
      institution: "Sukkur IBA",
      year: "Sep – Nov 2025 (2 months)",
      icon: "mdi:certificate-outline",
    },
  ];

  const experience = [
    {
      role: "Frontend Developer",
      company: "Media Production House",
      duration: "Apr – Jun 2024",
      description: "Website cloning using HTML, CSS, and JavaScript.",
      icon: "mdi:briefcase-outline",
    },
    {
      role: "Frontend Developer",
      company: "Digital Ellipticals",
      duration: "1 Oct 2025 – 1 Jan 2025 (3 months)",
      description: "Frontend development and web projects.",
      icon: "mdi:briefcase-outline",
    },
  ];

  return (
    <section className="bg-secondary py-16 sm:py-20 md:py-24">
      <div className="custom_container px-5 sm:px-6 md:px-0">
        <div className="max-w-4xl mx-auto space-y-16 sm:space-y-20 md:space-y-24">
          {/* Career Goals */}
          <div>
            <div className="flex items-center gap-3 mb-8 sm:mb-10">
              <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon icon="mdi:target" className="text-primary" width="24" height="24" />
              </div>
              <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Career Goals
              </h2>
            </div>
            <ul className="space-y-4 sm:space-y-5">
              {careerGoals.map((goal, index) => (
                <li
                  key={index}
                  className="flex gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-secondary border border-white/5 hover:border-primary/20 transition-colors duration-300"
                >
                  <span className="shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <span className="text-primary text-xs font-semibold">{index + 1}</span>
                  </span>
                  <p className="font-roboto text-muted text-sm sm:text-base leading-relaxed pt-0.5">
                    {goal}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8 sm:mb-10">
              <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon icon="mdi:school-outline" className="text-primary" width="24" height="24" />
              </div>
              <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Education
              </h2>
            </div>
            <div className="space-y-4 sm:space-y-5">
              {education.map((item) => (
                <div
                  key={item.degree}
                  className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 rounded-xl bg-secondary border border-white/5 hover:border-primary/20 transition-colors duration-300"
                >
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon icon={item.icon} className="text-primary" width="24" height="24" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-poppins font-semibold text-white text-lg sm:text-xl mb-1">
                      {item.degree}
                    </h3>
                    <p className="font-roboto text-muted text-sm sm:text-base mb-1">
                      {item.institution}
                    </p>
                    <p className="font-roboto text-muted/80 text-xs sm:text-sm">
                      {item.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8 sm:mb-10">
              <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon icon="mdi:briefcase-outline" className="text-primary" width="24" height="24" />
              </div>
              <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Experience
              </h2>
            </div>
            <div className="space-y-4 sm:space-y-5">
              {experience.map((item) => (
                <div
                  key={item.role}
                  className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 rounded-xl bg-secondary border border-white/5 hover:border-primary/20 transition-colors duration-300"
                >
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon icon={item.icon} className="text-primary" width="24" height="24" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-poppins font-semibold text-white text-lg sm:text-xl mb-1">
                      {item.role}
                    </h3>
                    <p className="font-roboto text-muted text-sm sm:text-base mb-1">
                      {item.company} · {item.duration}
                    </p>
                    <p className="font-roboto text-muted/80 text-sm">
                      {item.description}
                    </p>
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

export default CareerGoalsEducation;
