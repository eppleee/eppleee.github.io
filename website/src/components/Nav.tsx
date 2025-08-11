import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/pfpPic.jpg';
import './components.css';

/*navbar fixed top-0 left-0 h-screen w-48 flex flex-col items-start bg-primary p-4 z-50 shadow-lg
^^ this is what i was using to make it start at the left side of the site but i removed it for now*/

function Nav() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100); // adjust scroll threshold here
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'horizontal' : 'vertical'}`}>
      <img src={logo} alt="pfpPic" className='logo'></img>
      <div className="desktopMenu">
        <Link className="desktopMenuItem" to="home" smooth={true}> Home</Link>
        <Link className="desktopMenuItem" to="about" smooth={true}> About</Link>
        <Link className="desktopMenuItem" to="projects" smooth={true}> Projects</Link>
        <Link className="desktopMenuItem" to="contact" smooth={true}> Contact</Link>
      </div>

      <button className="desktopMenuBtn"> Resume</button>
    </nav>
  );
}

export default Nav;