import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Hero = () => {
  return (
    <section className="hero_section min-h-[calc(100vh-80px)] bg-secondary flex items-center relative overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="custom_container relative z-10 px-5 sm:px-6 pt-12 pb-24 sm:py-16 md:py-24 flex flex-col md:flex-row md:justify-between md:items-center md:gap-8 lg:gap-12">
        <div className="max-w-2xl mx-auto md:mx-0 text-center md:text-left md:flex-1 md:min-w-70">
          <span className="inline-block font-roboto text-primary text-sm md:text-base tracking-widest uppercase mb-4">
            Hello, I&apos;m
          </span>
          <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 whitespace-nowrap">
            Nabiha Fatima
          </h1>
          <p className="font-roboto text-lg sm:text-xl md:text-xl lg:text-2xl text-muted mb-2 wrap-break-word">
            Frontend Developer & Creative Designer
          </p>
          <p className="font-roboto text-muted/80 text-base md:text-lg mb-8 max-w-lg mx-auto md:mx-0">
            I build modern, responsive web experiences with React and clean code.
            Passionate about turning ideas into pixel-perfect interfaces.
          </p>

          <div className="flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 md:justify-start md:flex-nowrap">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 font-poppins font-medium px-5 py-3 sm:px-6 sm:py-3 bg-primary text-secondary rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 whitespace-nowrap shrink-0"
            >
              View Projects
              <Icon icon="mdi:arrow-right" width="20" height="20" className="shrink-0" />
            </Link>
            <Link
              to="/contacts"
              className="inline-flex items-center justify-center gap-2 font-poppins font-medium px-5 py-3 sm:px-6 sm:py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-all duration-300 whitespace-nowrap shrink-0"
            >
              Get in Touch
              <Icon icon="mdi:email-outline" width="20" height="20" className="shrink-0" />
            </Link>
          </div>
        </div>

        {/* Right side visual - md se upar dikhe, neeche (mobile/sm) par na dikhe */}
        <div className="hidden md:flex md:shrink-0 md:justify-center md:items-center">
          <div className="w-44 h-44 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 rounded-full border-2 border-primary/30 flex items-center justify-center bg-primary/5 backdrop-blur-sm">
            <Icon icon="mdi:code-braces" className="text-primary/60 w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 xl:w-32 xl:h-32" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon icon="mdi:chevron-double-down" className="text-muted/60" width="32" height="32" />
      </div>
    </section>
  );
};

export default Hero;
