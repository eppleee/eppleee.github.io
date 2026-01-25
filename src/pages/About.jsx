import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Code2, Lightbulb, Wrench, Sparkles } from 'lucide-react';

export function About() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const highlights = [
        {
            icon: Code2,
            title: "My Journey",
            description: "From zero coding experience to a full-stack web developer, my journey is fueled by curiosity, growth, and a love for creating.",
            gradient: "from-[#d6b1da] to-[#a19ff8]"
        },
        {
            icon: Lightbulb,
            title: "What Inspires Me",
            description: "I love coming up with clean, cool interfaces and bringing ideas to life with code, animations, and thoughtful designs.",
            gradient: "from-[#a19ff8] to-[#74cbf7]"
        },
        {
            icon: Wrench,
            title: "How I Work",
            description: "I focus on accessible, efficient, and maintainable web experiences, constantly learning new tools and techniques.",
            gradient: "from-[#74cbf7] to-[#d6b1da]"
        }
    ];

    const skillsData = {
        frontend: {
            title: "Frontend",
            skills: ["JavaScript", "React", "Next.js", "TypeScript", "HTML5", "TailwindCSS", "Python"],
            gradient: "from-[#d6b1da] via-[#a19ff8] to-[#98a8da]"
        },
        backend: {
            title: "Backend",
            skills: ["Node.js", "Express", "MongoDB", "SQL", "Java", "C++", "RESTful APIs"],
            gradient: "from-[#a19ff8] via-[#74cbf7] to-[#55c2f8]"
        },
        tools: {
            title: "Tools & Technologies",
            skills: ["Git", "GitHub", "VS Code", "npm"],
            gradient: "from-[#74cbf7] via-[#d6b1da] to-[#d6b1da]"
        }
    };

    return (
        <section
            id="about"
            className="relative z-0 min-h-screen px-4 py-20 overflow-hidden font-serif"
            ref={sectionRef}
        >
            <div
                className="absolute inset-0 -z-10 bg-gradient-to-b from-[#252c61b7] via-[#252c61a4]/90 to-transparent
  "
            /><div className="mx-auto max-w-7xl">

                {/*header*/}
                <motion.div
                    className="mb-20 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-[#d6b1da]/20 to-[#55c2f8]/20 dark:from-[#6b0f6e]/20 dark:to-[#420c66]/20 backdrop-blur-sm">
                        <Sparkles className="w-4 h-4 text-[#a19ff8] dark:text-[#98a8da]" />
                        <span className="text-sm font-medium text-white/90">
                            Full-Stack Developer
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-gradient-to-br from-[#ead1ec] via-[#bfbefa] to-[#74ccf8] dark:from-[#761c79] dark:via-[#98a8da] dark:to-[#67149e] bg-clip-text">
                        About Me
                    </h1>

                    <p className="mx-auto leading-relaxed max-w-1xl md:text-xl text-white/90">
                        I'm a passionate web developer who transforms ideas into beautiful, functional digital experiences.
                        With a strong foundation in modern web technologies and an eye for design,
                        I create user-centered solutions that make an impact.
                    </p>
                </motion.div>

                {/* cards */}
                <div className="grid gap-6 mb-24 md:grid-cols-3">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={item.title}
                            className="relative group"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                        >
                            <div className="relative h-full p-8 rounded-2xl bg-white dark:bg-[#252c61b9] shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-[#a19ff8]/30 dark:hover:border-[#98a8da]/30">
                                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.gradient} mb-4`}>
                                    <item.icon className="w-6 h-6 text-white" />
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-[#252c61b9] dark:text-white">
                                    {item.title}
                                </h3>
                                <p className="text-[#252c61b9]/80 dark:text-white/70 leading-relaxed">
                                    {item.description}
                                </p>

                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                >
                    <h2 className="text-4xl md:text-5xl leading-snug mb-12 text-center text-transparent bg-gradient-to-br from-[#ead1ec] via-[#bfbefa] to-[#74ccf8] dark:from-[#761c79] dark:via-[#98a8da] dark:to-[#67149e] bg-clip-text">
                        Technologies & Skills
                    </h2>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {Object.entries(skillsData).map(([key, category], categoryIndex) => (
                            <motion.div
                                key={key}
                                className="relative group"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, delay: 0.8 + categoryIndex * 0.1 }}
                            >
                                <div className="h-full p-8 rounded-2xl bg-white dark:bg-[#252c61b9] shadow-lg hover:shadow-2xl transition-all duration-300">
                                    <div className="mb-6">
                                        <h3 className={`text-2xl font-bold text-transparent bg-gradient-to-r ${category.gradient} bg-clip-text`}>
                                            {category.title}
                                        </h3>
                                        <div className={`h-1 w-16 mt-2 rounded-full bg-gradient-to-r ${category.gradient}`} />
                                    </div>

                                    {/* tech */}
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill, skillIndex) => (
                                            <motion.span
                                                key={skill}
                                                className={`px-3 py-1.5 text-sm font-medium rounded-lg bg-gradient-to-r ${category.gradient} text-white shadow-sm`}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                                transition={{
                                                    duration: 0.3,
                                                    delay: 0.9 + categoryIndex * 0.1 + skillIndex * 0.05
                                                }}
                                                whileHover={{ scale: 1.05, y: -2 }}
                                            >
                                                {skill}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>

                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`} />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="mt-0 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                >
                </motion.div>
            </div>
        </section>
    );
}

export default About;
