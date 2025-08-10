import { useState, useEffect } from 'react';
import Nav from './components/Nav.tsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if user prefers dark mode
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    // Apply dark mode class to document
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
    <>
      <button
        onClick={toggleDarkMode}
        className="darkMode fixed top-4 right-4 p-2 rounded-lg bg-accent hover:bg-accent/80 transition-colors z-50"
      >
        {isDark ? '🩷' : '🤍'}
      </button>
      <Nav />
        <Header/>
        <Footer />
    </>
  );
}

export default App