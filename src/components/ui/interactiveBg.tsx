import { useEffect, useRef, useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  delay: number;
  type: 'heart' | 'bubble' | 'flower';
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  vx: number;
  vy: number;
}

export function InteractiveBg({ isDark }: { isDark: boolean }) {
  const [floatingElements, setFloatingElements] = useState<FloatingElement[]>([]);
  const [mouseParticles, setMouseParticles] = useState<Particle[]>([]);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const [, force] = useState(0);
  const particleIdRef = useRef(0);
  const lastMouseMoveRef = useRef(Date.now());

  // Initialize floating elements
  useEffect(() => {
    const elements: FloatingElement[] = [];
    const types: Array<'heart' | 'bubble' | 'flower'> = ['heart', 'bubble', 'flower'];

    for (let i = 0; i < 20; i++) {
      elements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 30 + 15,
        speed: Math.random() * 20 + 15,
        delay: Math.random() * 5,
        type: types[Math.floor(Math.random() * types.length)]!,
      });
    }
    setFloatingElements(elements);
  }, []);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;


      const now = Date.now();
      if (now - lastMouseMoveRef.current > 50) {
        lastMouseMoveRef.current = now;

        // Create sparkle particles on mouse movement
        const newParticles: Particle[] = [];
        for (let i = 0; i < 3; i++) {
          newParticles.push({
            id: particleIdRef.current++,
            x: e.clientX + (Math.random() - 0.5) * 20,
            y: e.clientY + (Math.random() - 0.5) * 20,
            size: Math.random() * 8 + 4,
            opacity: 1,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
          });
        }

        setMouseParticles((prev) => [...prev, ...newParticles].slice(-50));
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const animate = () => {
      current.current.x +=
        (target.current.x - current.current.x) * 0.15;
      current.current.y +=
        (target.current.y - current.current.y) * 0.15;

      force((n) => n + 1);
      requestAnimationFrame(animate);
    };

    animate();
  }, []);


  // Animate mouse particles
  useEffect(() => {
    const interval = setInterval(() => {
      setMouseParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            opacity: p.opacity - 0.02,
          }))
          .filter((p) => p.opacity > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  const [showBubbles, setShowBubbles] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // If scrolled past the first screen (Home page height)
      if (scrollY > window.innerHeight) {
        setShowBubbles(false);
      } else {
        setShowBubbles(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      
      {floatingElements.map((element) => (
        <div
          key={element.id}
          className="absolute animate-float"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            animationDuration: `${element.speed}s`,
            animationDelay: `${element.delay}s`,
          }}
        >
          {element.type === 'heart' && (
            <Heart
              className={`${isDark ? 'text-pink-400 fill-pink-400 opacity-30' : 'text-pink-400 fill-pink-400 opacity-50'
                }`}
              style={{ width: element.size, height: element.size }}
            />
          )}
          {element.type === 'flower' && (
            <div className="relative" style={{ width: element.size, height: element.size }}>
              {/* Flower SVG */}
              <svg viewBox="0 0 100 100" className={`w-full h-full ${isDark ? 'opacity-30' : 'opacity-50'}`}>
                {/* Petals */}
                <circle cx="50" cy="30" r="15" className={isDark ? 'fill-pink-400' : 'fill-pink-500'} />
                <circle cx="70" cy="50" r="15" className={isDark ? 'fill-rose-400' : 'fill-rose-500'} />
                <circle cx="50" cy="70" r="15" className={isDark ? 'fill-pink-400' : 'fill-pink-500'} />
                <circle cx="30" cy="50" r="15" className={isDark ? 'fill-rose-400' : 'fill-rose-500'} />
                {/* Center */}
                <circle cx="50" cy="50" r="12" className={isDark ? 'fill-yellow-300' : 'fill-yellow-400'} />
              </svg>
            </div>
          )}
          {element.type === 'bubble' && (
            <div
              className={`rounded-full ${isDark ? 'opacity-50' : 'opacity-70'} ${isDark ? 'bg-pink-400/30 border-2 border-pink-400/40' : 'bg-pink-300/50 border-2 border-pink-400/60'
                } backdrop-blur-sm`}
              style={{
                width: element.size,
                height: element.size,
              }}
            />
          )}
        </div>
      ))}

      {/* mouse trail */}
      {mouseParticles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute pointer-events-none ${isDark ? 'bg-rose-400' : 'bg-pink-400'
            } rounded-full`}
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            transform: 'translate(-50%, -50%)',
            boxShadow: `0 0 ${particle.size * 2}px ${isDark ? '#4b1535' : '#d183a9'}`,
          }}
        />
      ))}
    </div>
  );
}