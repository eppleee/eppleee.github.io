import React, { useEffect, useState } from "react";
import logo from "../styles/assets/epple.png";
import { Home, User, Briefcase, Mail, FileText } from "lucide-react";

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  //switch navbar to top bar when scrolled 
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDark(true);
    }
  }, []);

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

        ${!isScrolled ? "top-25 left-8 bottom-25 w-24 rounded-3xl shadow-2xl" : ""}

        ${isScrolled ? "top-0 left-0 right-0 h-20 shadow-lg backdrop-blur-md" : ""}

        ${isDark ? "bg-gradient-to-br dark:from-[#4e62aa] border-[#420c66d5]/20" : "bg-gradient-to-br from-[#dcbddf]/90 border border-pink-200"}
      `}
      aria-label="Primary navigation"
    >
      <div
        className={`
          h-full flex items-center transition-all duration-500

          ${!isScrolled ? "flex-col justify-center gap-5 py-6" : ""}

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
                  rounded-lg 
                `}
                aria-label={item.label}
                title={item.label}
              >
                <div
                  className={`
                    p-2 rounded-xl transition-all duration-200
                    ${activeSection === item.id
                      ? (isDark ? "bg-[#640268] text-white shadow-lg" : "bg-[#dcbddf] text-white shadow-lg")
                      : (isDark ? "bg-[#640268] text-[white]" : "bg-[#dcbddf] text-[white]")}
                  `}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <span
                  className={`
                    mt-0 transition-all duration-200
                    ${!isScrolled ? "text-xs" : "text-sm"}
                    ${activeSection === item.id ? (isDark ? "text-white" : "text-[#252c61b9]") : (isDark ? "text-white" : "text-[#252c61b9]")}
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
              ${isDark ? "bg-[#dcbddf] dark:bg-[#640268] text-white shadow" : "bg-[#dcbddf] dark:bg-[#640268] text-white shadow"}
            `}
            aria-pressed={isDark}
            title="Toggle dark mode"
          >
            {isDark ? "🤍" : "🤍"}
          </button>

          {/* my resume button */}

          {isScrolled ? (
            <a
              href="/Kourtney Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-white transition-transform duration-150 bg-[#dcbddf] dark:bg-[#640268] rounded-lg shadow hover:scale-105"
            >
              Resume
            </a>
          ) : (
            <a
              href="/Kourtney Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white shadow rounded-2xl bg-[#dcbddf] dark:bg-[#640268] transition-transform duration-150"
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
