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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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
      setMousePosition({ x: e.clientX, y: e.clientY });

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

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0">
        <div
          className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-30 animate-pulse ${isDark ? 'bg-pink-500' : 'bg-pink-300'
            }`}
          style={{ animationDuration: '4s' }}
        />
        <div
          className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-30 animate-pulse ${isDark ? 'bg-rose-500' : 'bg-rose-300'
            }`}
          style={{ animationDuration: '6s', animationDelay: '1s' }}
        />
        <div
          className={`absolute top-1/2 right-1/3 w-64 h-64 rounded-full blur-3xl opacity-20 animate-pulse ${isDark ? 'bg-purple-500' : 'bg-purple-300'
            }`}
          style={{ animationDuration: '5s', animationDelay: '2s' }}
        />
      </div>

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
              className={`rounded-full ${isDark ? 'bg-pink-400/30 border-2 border-pink-400/40' : 'bg-pink-300/50 border-2 border-pink-400/60'
                } backdrop-blur-sm`}
              style={{
                width: element.size,
                height: element.size,
              }}
            />
          )}
        </div>
      ))}

      {/* Mouse trail sparkles */}
      {mouseParticles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute pointer-events-none ${isDark ? 'bg-pink-400' : 'bg-pink-500'
            } rounded-full`}
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            transform: 'translate(-50%, -50%)',
            boxShadow: `0 0 ${particle.size * 2}px ${isDark ? 'rgba(244, 114, 182, 0.5)' : 'rgba(236, 72, 153, 0.5)'
              }`,
          }}
        />
      ))}

      {/* Mouse follower glow */}
      <div
        className={`absolute w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none transition-all duration-200 ${isDark ? 'bg-pink-500' : 'bg-pink-400'
          }`}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Sparkle icon that follows mouse */}
      <div
        className="absolute transition-all duration-100 ease-out pointer-events-none"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Sparkles
          className={`opacity-40 animate-spin ${isDark ? 'text-pink-300' : 'text-pink-500'
            }`}
          style={{ animationDuration: '3s' }}
          size={20}
        />
      </div>
    </div>
  );
}