import { ArrowDown } from 'lucide-react';
import { Button } from '../components/ui/button';
import { InteractiveBg } from '../components/ui/interactiveBg';
import BlurText from '../components/ui/blur';

export function Home() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen px-4 overflow-hidden font-serif "
    >
      <InteractiveBg isDark={true} />

      <div className="relative z-10 max-w-4xl mx-auto text-center ">
        <BlurText
          text="Kourtney Giles"
          delay={170}
          animateBy="letters"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="relative mb-8 text-6xl font-serif text-[#252c61b9] dark:text-white "
        />
        <h2 className="
          mb-6
          text-[#252c61b9]
          dark:text-white/90
          px-4 
        ">
          Full Stack Web Developer
        </h2>

        {/* Description */}
        <p className="
          mb-8
          text-[#252c61b9]
          dark:text-white/80
          max-w-4xl
          mx-auto
          px-6
        ">
          I am a recent graduate from Towson University with a passion for web development and technology. Inspired by the ever-evolving digital world, I strive to create engaging, user-friendly, and efficient web experiences.</p>

        {/* buttons */}
        <div className="flex flex-col justify-center gap-4 px-4 mb-8 sm:flex-row">
          <Button
            onClick={() => scrollToSection('projects')}
            size="lg"
            className="
              bg-white
              dark:bg-[#bab9ff]/50
              text-[#252c61b9] 
              dark:text-white
              hover:bg-[#55c2f8]/40
              dark:hover:bg-[#f3c8dd]/50
              w-full
              sm:w-auto
            "
          >
            Projects
          </Button>
          <Button
            onClick={() => scrollToSection('contact')}
            variant="outline"
            size="lg"
            className="
              border-[#252c61b9]
              dark:border-white
              text-white
              hover:bg-white/10
              w-full
              sm:w-auto
            "
          >
            Contact Me
          </Button>
        </div>

      </div>

      {/* arrow animation */}
      <button
        onClick={() => scrollToSection('about')}
        className="
          absolute             
          bottom-8             
          left-1/2              
          -translate-x-1/2    
          text-[#252c61b9]
          dark:text-white/90
          transition-colors      
          animate-bounce  
        "
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
}

export default Home;