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
      className="
        min-h-screen    /* Minimum height of viewport height */
        flex            /* Flexbox layout */
        items-center    /* Vertically center content */
        justify-center  /* Horizontally center content */
        px-4            /* Horizontal padding 1rem (16px) */
        relative        /* Position relative for absolute children */
        overflow-hidden /* Hide content that overflows */
        bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100
        dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
      "
    >
      <InteractiveBg isDark={true} />

      {/* Main content container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center ">
        <BlurText
          text="Kourtney Giles"
          delay={170}
          animateBy="letters"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="relative mb-8 text-6xl font-bold text-white dark:text-pink-500"
        />
        <h2 className="
          mb-6            /* Margin bottom 1.5rem (24px) */
          text-white/90   /* White with 90% opacity */
          px-4            /* Horizontal padding 1rem (16px) */
        ">
          Full Stack Web Developer
        </h2>

        {/* Description */}
        <p className="
          mb-8            /* Margin bottom 2rem (32px) */
          text-white/80   /* White with 80% opacity */
          max-w-4xl       /* Maximum width 42rem (672px) */
          mx-auto         /* Horizontal margin auto (center) */
          px-6            /* Horizontal padding 1rem (16px) */
        ">
          I am a recent graduate from Towson University with a passion for web development and technology. Inspired by the ever-evolving digital world, I strive to create engaging, user-friendly, and efficient web experiences.</p>

        {/* Call-to-action buttons */}
        <div className="
          flex              /* Flexbox layout */
          flex-col          /* Stack vertically */
          sm:flex-row       /* Stack horizontally on small screens (640px+) */
          gap-4             /* Gap 1rem (16px) between items */
          justify-center    /* Center items horizontally */
          mb-8              /* Margin bottom 2rem (32px) */
          px-4              /* Horizontal padding 1rem (16px) */
        ">
          <Button
            onClick={() => scrollToSection('projects')}
            size="lg"
            className="
              bg-white              /* White background */
              text-pink-600       /* Purple text */
              hover:bg-white/90     /* On hover: slightly transparent white */
              w-full                /* Full width */
              sm:w-auto             /* Auto width on small screens (640px+) */
            "
          >
            Projects
          </Button>
          <Button
            onClick={() => scrollToSection('contact')}
            variant="outline"
            size="lg"
            className="
              border-white         /* White border */
              text-white           /* White text */
              hover:bg-white/10    /* On hover: white background with 10% opacity */
              w-full               /* Full width */
              sm:w-auto            /* Auto width on small screens (640px+) */
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
          absolute               /* Position absolutely */
          bottom-8               /* 2rem (32px) from bottom */
          left-1/2               /* 50% from left */
          -translate-x-1/2       /* Move left by 50% of own width (center) */
          text-pink-500/80
          dark:text-white/80
          hover:text-white       /* On hover: fully opaque white */
          transition-colors      /* Animate color changes */
          animate-bounce         /* Built-in bounce animation */
        "
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
}

export default Home;