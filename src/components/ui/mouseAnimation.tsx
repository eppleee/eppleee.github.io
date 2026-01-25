import { useEffect, useRef, useState } from 'react';

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
    vx: number;
    vy: number;
}

export default function MouseAnimation({ isDark }: { isDark: boolean }) {
    const [particles, setParticles] = useState<Particle[]>([]);
    const idRef = useRef(0);
    const lastMove = useRef(0);

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            const now = performance.now();
            if (now - lastMove.current < 40) return;
            lastMove.current = now;

            const newParticles = Array.from({ length: 2 }).map(() => ({
                id: idRef.current++,
                x: e.clientX,
                y: e.clientY,
                size: Math.random() * 6 + 4,
                opacity: 1,
                vx: (Math.random() - 0.5) * 1.5,
                vy: (Math.random() - 0.5) * 1.5,
            }));

            setParticles((p) => [...p, ...newParticles].slice(-100));
        };

        window.addEventListener('mousemove', handleMove);
        return () => window.removeEventListener('mousemove', handleMove);
    }, []);

    useEffect(() => {
        const raf = () => {
            setParticles((prev) =>
                prev
                    .map((p) => ({
                        ...p,
                        x: p.x + p.vx,
                        y: p.y + p.vy,
                        opacity: p.opacity - 0.025,
                    }))
                    .filter((p) => p.opacity > 0)
            );
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);
    }, []);

    return (
        <div className="fixed inset-0 z-50 pointer-events-none">
            {particles.map((p) => (
                <div
                    key={p.id}
                    className={`absolute rounded-full ${isDark ? 'bg-pink-400' : 'bg-pink-500'
                        }`}
                    style={{
                        left: p.x,
                        top: p.y,
                        width: p.size,
                        height: p.size,
                        opacity: p.opacity,
                        transform: 'translate(-50%, -50%)',
                        boxShadow: `0 0 ${p.size * 2}px rgba(236, 72, 153, 0.6)`,
                    }}
                />
            ))}
        </div>
    );
}
