import { motion } from "framer-motion";
import type { Transition } from 'framer-motion';
import { useEffect, useRef, useState, useMemo } from 'react';

type BlurTextProps = {
    text?: string;
    delay?: number;
    className?: string;
    animateBy?: 'words' | 'letters';
    direction?: 'top' | 'bottom';
    threshold?: number;
    rootMargin?: string;
    animationFrom?: Record<string, string | number | undefined>;
    animationTo?: Array<Record<string, string | number | undefined>>;
    easing?: (t: number) => number;
    onAnimationComplete?: () => void;
    stepDuration?: number;
};

const buildKeyframes = (
    from: Record<string, any>,
    steps: Array<Record<string, any>>
): Record<string, Array<string | number>> => {
    const keys = new Set<string>([...Object.keys(from || {}), ...steps.flatMap(s => Object.keys(s || {}))]);

    const keyframes: Record<string, Array<string | number>> = {};
    keys.forEach(k => {
        const start = from[k] ?? 0;
        keyframes[k] = [start, ...steps.map(s => s[k] ?? start)];
    });
    return keyframes;
};

const BlurText: React.FC<BlurTextProps> = ({
    text = '',
    delay = 200,
    className = '',
    animateBy = 'words',
    direction = 'top',
    threshold = 0.1,
    rootMargin = '0px',
    animationFrom,
    animationTo,
    easing = (t: number) => t,
    onAnimationComplete,
    stepDuration = 0.35
}) => {
    const elements = animateBy === 'words' ? text.split(' ') : text.split('');
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (!ref.current) return;
        const observer = new IntersectionObserver(
            ([entry]: IntersectionObserverEntry[]) => {
                if (!entry) return;
                if (entry.isIntersecting) {
                    setInView(true);
                    if (ref.current) observer.unobserve(ref.current);
                }
            }
            ,
            { threshold, rootMargin }
        );
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    const defaultFrom = useMemo(
        () =>
            direction === 'top' ? { filter: 'blur(10px)', opacity: 0, y: -50 } : { filter: 'blur(10px)', opacity: 0, y: 50 },
        [direction]
    );

    const defaultTo = useMemo(
        () => [
            {
                filter: 'blur(5px)',
                opacity: 0.5,
                y: direction === 'top' ? 5 : -5
            },
            { filter: 'blur(0px)', opacity: 1, y: 0 }
        ],
        [direction]
    );

    const fromSnapshot = animationFrom ?? defaultFrom;
    const toSnapshots = animationTo ?? defaultTo;

    // Ensure a version of `from` without undefineds for framer-motion `initial` prop
    const fromForMotion = useMemo(() => {
        const res: Record<string, string | number> = {};
        Object.keys(fromSnapshot || {}).forEach((k) => {
            const v = (fromSnapshot as any)[k];
            res[k] = v ?? 0;
        });
        return res;
    }, [fromSnapshot]);

    const stepCount = toSnapshots.length + 1;
    const totalDuration = stepDuration * (stepCount - 1);
    const times = Array.from({ length: stepCount }, (_, i) => (stepCount === 1 ? 0 : i / (stepCount - 1)));

    return (
        <p ref={ref} className={className}>
            {elements.map((segment, index) => {
                const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);

                const spanTransition: Transition = {
                    duration: totalDuration,
                    times,
                    delay: (index * delay) / 1000,
                    ease: easing
                };

                return (
                    <motion.span
                        key={index}
                        initial={fromForMotion}
                        animate={inView ? animateKeyframes : fromForMotion}
                        transition={spanTransition}
                        onAnimationComplete={
                            index === elements.length - 1 && onAnimationComplete
                                ? ((() => onAnimationComplete()) as any)
                                : undefined
                        }
                        style={{
                            display: "inline-block",
                            willChange: "transform, filter, opacity",
                        }}
                    >
                        {segment === " " ? "\u00A0" : segment}
                        {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
                    </motion.span>

                );
            })}
        </p>
    );
};

export default BlurText;
