import Nav from './components/Nav.tsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';

function App() {

  return (
    <>
        <Nav />
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />

    </>
  );
}

export default App