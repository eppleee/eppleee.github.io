import React, { useEffect, useState } from "react";
import logo from "../styles/assets/epple.png";
import { Home, User, Briefcase, Mail, FileText } from "lucide-react";

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  //switch navbar to top bar when scrolled past 100px
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect OS dark mode preference 
  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDark(true);
    }
  }, []);

  // Apply or remove the `dark` class on <html>
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const navItems = [
    { icon: Home, label: "Home", id: "home" },
    { icon: User, label: "About", id: "about" },
    { icon: Briefcase, label: "Projects", id: "projects" },
    { icon: Mail, label: "Contact", id: "contact" }
  ];

  return (
    <nav
      className={`
        fixed z-50 transition-all duration-500 ease-in-out top

        /* UNSCROLLED: left-floating vertical sidebar (default for ALL widths) */
        ${!isScrolled ? "top-25 left-8 bottom-25 w-24 rounded-3xl shadow-2xl" : ""}

        /* SCROLLED: top horizontal bar */
        ${isScrolled ? "top-0 left-0 right-0 h-20 shadow-lg backdrop-blur-md" : ""}

        /* color & border */
        ${isDark ? "bg-gray-800/90 border border-pink-500/20" : "bg-white/90 border border-pink-200"}
      `}
      aria-label="Primary navigation"
    >
      <div
        className={`
          h-full flex items-center transition-all duration-500

          /* left sidebar before scroll */
          ${!isScrolled ? "flex-col justify-center gap-5 py-6" : ""}

          /*top layout after scroll - have to come back to this cause i still dont like the way it looks */
          ${isScrolled ? "flex-row justify-between px-6" : ""}
        `}
      >
        <img
          src={logo}
          alt="Logo"
          className={`
            transition-all duration-300
            ${!isScrolled ? "w-16 h-16 m-2" : "w-10 h-10 m-2"}
          `}
        />

        <div
          className={`
            flex transition-all duration-300

            /* column for sidebar, row for top bar */
            ${!isScrolled ? "flex-col gap-2 items-center" : "flex-row gap-6 items-center"}
          `}
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={`
                  group flex items-center justify-center transition-all duration-200
                  ${!isScrolled ? "flex-col gap-1 px-0 py-1" : "flex-row gap-2 px-2 py-1"}
                  rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300
                `}
                aria-label={item.label}
                title={item.label}
              >
                <div
                  className={`
                    p-2 rounded-xl transition-all duration-200
                    ${activeSection === item.id
                      ? (isDark ? "bg-pink-500 text-white shadow-lg" : "bg-gradient-to-br from-pink-400 to-rose-400 text-white shadow-lg")
                      : (isDark ? "bg-gray-700/60 text-gray-200" : "bg-pink-50 text-pink-600")}
                  `}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <span
                  className={`
                    mt-0 transition-all duration-200
                    ${!isScrolled ? "text-xs" : "text-sm"}
                    ${activeSection === item.id ? (isDark ? "text-pink-300" : "text-pink-600") : (isDark ? "text-gray-300" : "text-gray-600")}
                  `}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* my dark mode button */}
        <div
          className={`
            flex items-center transition-all duration-300
            ${!isScrolled ? "flex-col gap-3 mt-4" : "flex-row gap-3"}
          `}
        >
          <button
            onClick={() => setIsDark((s) => !s)}
            className={`
              p-2 rounded-2xl transition-transform duration-150
              ${isDark ? "bg-pink-500 text-white shadow" : "bg-gradient-to-br from-pink-400 to-rose-400 text-white shadow"}
            `}
            aria-pressed={isDark}
            title="Toggle dark mode"
          >
            {isDark ? "🩷" : "🤍"}
          </button>

          {/* my resume button */}

          {isScrolled ? (
            <a
              href="/Kourtney Giles Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-white transition-transform duration-150 bg-pink-500 rounded-lg shadow hover:scale-105"
            >
              Resume
            </a>
          ) : (
            <a
              href="/Kourtney Giles Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white shadow rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500"
              title="Resume"
            >
              <FileText className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
