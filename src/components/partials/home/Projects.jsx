import { Icon } from "@iconify/react";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with React and Tailwind CSS.",
      tech: ["React", "Tailwind", "Vite"],
      link: "https://nabiha-fatima.github.io/personal_portfolio",
      image: "/images/personal-portfolio.png",
    },
    {
      title: "Restaurant Website",
      description: "Fully responsive restaurant site built with HTML, CSS, Bootstrap & JavaScript. Includes AOS scroll animations and Swiper slider for gallery and sections.",
      tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "AOS", "Swiper"],
      link: "https://nabiha-fatima.github.io/Tasty-Bites-Restaurant-Website/",
      image: "/images/resturant-website.png",
    },
    {
      title: "Weather Dashboard",
      description: "Weather info with search and favorite cities.",
      tech: ["React", "API", "Tailwind"],
      link: "#",
      image: null,
    },
  ];

  return (
    <section id="projects" className="bg-secondary py-16 sm:py-20 md:py-24">
      <div className="custom_container px-5 sm:px-6 md:px-0">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            Projects
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl bg-secondary border border-white/5 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-video bg-white/5 flex items-center justify-center shrink-0">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <Icon
                    icon="mdi:folder-outline"
                    className="text-muted/50 w-12 h-12 sm:w-14 sm:h-14"
                  />
                )}
              </div>
              <div className="p-4 sm:p-5 flex flex-col flex-1">
                <h3 className="font-poppins font-semibold text-white text-lg sm:text-xl mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="font-roboto text-muted text-sm sm:text-base mb-3 flex-1 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs sm:text-sm font-roboto px-2 py-1 rounded-md bg-primary/10 text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="font-roboto text-primary text-sm font-medium inline-flex items-center gap-1">
                  View project
                  <Icon icon="mdi:arrow-right" width="18" height="18" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
