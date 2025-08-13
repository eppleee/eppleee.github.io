import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/epple.png';
import './components.css';

function Nav() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'horizontal' : 'vertical'}`}>
      <img src={logo} alt="pfpPic" className='logo'></img>
      <div className="desktopMenu">
        <Link className="desktopMenuItem" to="home" spy smooth duration={500} offset={-80} activeClass="active">Home</Link>
        <Link className="desktopMenuItem" to="about" spy smooth duration={500} offset={-80} activeClass="active">About</Link>
        <Link className="desktopMenuItem" to="projects" spy smooth duration={500} offset={-80} activeClass="active">Projects</Link>
        <Link className="desktopMenuItem" to="contact" spy smooth duration={500} offset={-80} activeClass="active">Contact</Link>
      </div>

      <div className="buttonGroup">
        <a
          href="/Kourtney Giles Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="desktopMenuBtn"
        >
          Resume
        </a>
        <button onClick={toggleDarkMode} className="darkMode">
          {isDark ? '🩷' : '🤍'}
        </button>
      </div>
    </nav>
  );
}

export default Nav;