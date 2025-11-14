import Nav from './components/Nav.tsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import './styles/global.css';

function App() {

  return (
    <div className="min-h-screen">
      <Nav />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div >
  );
}

export default App