import Nav from './components/Nav.tsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import Mouse from './components/ui/mouseAnimation.tsx';
import './styles/global.css';

function App() {

  return (
    <>
    <div
      className="
        min-h-screen
        bg-gradient-to-br
        from-[#9cdbfa]
        via-[#bab9ff]
        to-[#dcbddf]
        dark:from-[#420c66]
        dark:via-[#4e62aa]
        dark:to-[#640268]
      "
    >

      
      <Mouse />
      <Nav />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div >
    </>
  );
}

export default App