const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-white/5 py-6 sm:py-8">
      <div className="custom_container px-5 sm:px-6 md:px-0">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 text-center sm:text-left">
          <p className="font-roboto text-muted text-sm">
            © {currentYear} Nabiha Fatima. All rights reserved.
          </p>
          <p className="font-roboto text-muted/80 text-xs sm:text-sm">
            Created by Nabiha Fatima
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;