import { Icon } from "@iconify/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    { name: "home", path: "/" },
    { name: "about", path: "/about" },
    { name: "skills", path: "/skills" },
    { name: "projects", path: "/projects" },
    { name: "contacts", path: "/contacts" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-white/5 py-4 px-4 sm:px-6 md:px-0 md:pr-6 lg:pr-8">
        <div className="custom_container">
          <div className="md:flex md:flex-nowrap md:justify-between md:items-center block relative">
            <NavLink
              to="/"
              className="inline-block font-poppins text-primary text-2xl font-bold hover:opacity-90 transition-opacity duration-300 whitespace-nowrap shrink-0"
            >
              Nabiha&nbsp;Fatima
            </NavLink>
            {/* menu btn - mobile */}
            <button
              type="button"
              aria-label="Toggle menu"
              className="md:hidden text-white absolute top-0 right-0 p-2 rounded-lg hover:bg-white/5 transition-colors"
              onClick={() => setOpen(!open)}
            >
              <Icon icon="line-md:menu" width="28" height="28" />
            </button>

            {/* overlay when mobile menu open */}
            {open && (
              <div
                className="md:hidden fixed inset-0 bg-black/50 z-10 transition-opacity"
                onClick={() => setOpen(false)}
                aria-hidden="true"
              />
            )}

            <ul
              className={`md:flex md:flex-nowrap md:gap-1 md:static md:ml-8 fixed top-0 z-20 left-0 h-screen md:h-auto w-72 md:w-auto md:shrink-0 bg-secondary md:bg-transparent border-r md:border-r-0 border-white/5 px-6 md:px-0 py-10 md:py-0 transition-transform duration-300 ease-out ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
            >
              {/* close btn - mobile */}
              {open && (
                <button
                  type="button"
                  aria-label="Close menu"
                  className="md:hidden absolute top-6 right-4 p-2 rounded-lg text-muted hover:text-white hover:bg-white/5 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <Icon icon="charm:cross" width="28" height="28" />
                </button>
              )}

              {links.map((link) => (
                <li className="md:flex md:items-center py-2 md:py-0" key={link.path}>
                  <NavLink
                    to={link.path}
                    end={link.path === "/"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block font-poppins capitalize text-sm font-medium rounded-lg px-4 py-2.5 md:py-2 transition-all duration-300 whitespace-nowrap
                      ${isActive ? "text-primary bg-primary/10" : "text-muted hover:text-white hover:bg-white/5 md:hover:bg-primary/5"}`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
