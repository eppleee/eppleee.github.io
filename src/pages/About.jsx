import React from 'react';
import gradImg from '../styles/assets/grad-photo.jpeg';
import secondImg from '../styles/assets/gradImg2.jpeg';
import thirdImg from '../styles/assets/gradImg3.jpeg';
import forthImg from '../styles/assets/group4.jpeg';
import fifthImg from '../styles/assets/kourtneyT.jpeg';
import sixthImg from '../styles/assets/olgroup.jpeg';
import seventhImg from '../styles/assets/olpic.jpeg';

/*imports of all my lang images*/
import jsImg from '../styles/assets/js.png';
import reactImg from '../styles/assets/library.png';
import htmlImg from '../styles/assets/html.png';
import cssImg from '../styles/assets/c-.png';
import sqlImg from '../styles/assets/sql-server.png';
import pythonImg from '../styles/assets/python.png';
import javaImg from '../styles/assets/java.png';

import { useState, useEffect, useRef } from 'react';
import ImageWithFallback from '../components/ImageWithFallback';
import { Heart, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '../components/ui/carousel';

export function About() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    // Intersection Observer to detect when section is in view
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

    const photos = [
        {
            src: gradImg, alt: 'Graduation Photo'
        },
        {
            src: secondImg, alt: 'Graduation Photo'
        },
        {
            src: thirdImg, alt: 'Graduation Photo'
        },
        {
            src: forthImg, alt: 'Graduation Photo'
        }
    ];

    const skillCategories = [
        {
            category: 'Skills & Technologies',
            skills: ['React', 'TypeScript', 'Java', 'JavaScript', 'C++', 'Python', 'HTML/CSS', 
                'Tailwind CSS', 'Next.js', 'Node.js', 'SQL', 'GitHub', 'MongoDB', 'Express.js']
        }
    ];

    return (
        <section
            id="about"
            className="relative min-h-screen px-4 py-20 bg-white "
            ref={sectionRef}
        >
            {/* Pink background container - 40% 60% split on desktop, gradient on mobile */}
            <div className="absolute inset-0 flex ">
                {/* Left 40% - white background (hidden on mobile) */}
                <div className="
          hidden
          md:block      
          w-[40%]       
          bg-white
          dark:bg-gray-800
        "></div>

                {/* Right 60% - pink background */}
                <div className="
          w-full                    
          md:w-[60%]                
          bg-gradient-to-b          
          md:bg-none                
          from-white                
          via-pink-50 
          to-pink-300
                    md:bg-pink-100 
                        dark:from-gray-800
                        dark:to-pink-500
                        dark:via-pink-700
                        dark:md:bg-pink-500
        "></div>
            </div>

            {/* Content container */}
            <div className="relative z-10 max-w-6xl mx-auto ">
                {/* Section heading */}
                <h2 className="mb-4 text-center text-slate-900 dark:text-slate-100">
                    About Me
                </h2>

                {/* Section description */}
                <p className="max-w-2xl mx-auto mb-12 text-center text-slate-600 dark:text-slate-300">
                    I'm a passionate web developer with experience in building modern web applications.
                    I love turning complex problems into simple, beautiful, and intuitive solutions.
                </p>

                {/* 3 Columns with staggered float-up animation */}
                <div className="grid gap-6 mb-12 md:grid-cols-3">
                    {/* left */}
                    <div
                        className={`
              transform          
              transition-all     
              duration-1000      
              ${isVisible
                                ? 'translate-y-0 opacity-100'    /* When visible: normal position, fully opaque */
                                : 'translate-y-20 opacity-0'     /* When hidden: 5rem down, transparent */
                            }
            `}
                        style={{ transitionDelay: '0ms' }}  /* No delay for first card */
                    >
                        <Card className="
              border-slate-200      /* Light gray border */
              hover:shadow-lg       /* On hover: large shadow */
              transition-shadow     /* Animate shadow changes */
              bg-white              /* White background */
              h-full                /* Full height (match sibling cards) */
            ">
                            <CardContent className="pt-6"> {/* Padding top 1.5rem (24px) */}
                                {/* Icon container */}
                                <div className="
                  w-12                       /* Width 3rem (48px) */
                  h-12                       /* Height 3rem (48px) */
                  rounded-lg                 /* Rounded corners */
                  bg-gradient-to-br          /* Gradient from top-left to bottom-right */
                  from-pink-100            /* Start color: purple */
                  to-pink-600                /* End color: pink */
                  flex                       /* Flexbox layout */
                  items-center               /* Vertically center content */
                  justify-center             /* Horizontally center content */
                  mb-4                       /* Margin bottom 1rem (16px) */
                ">
                                    <Lightbulb className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="mb-3 text-slate-900">My Journey</h3>
                                <p className="mb-3 text-slate-600">
                                    I started coding in 2020 and fell in love with creating digital experiences.
                                </p>
                                <p className="text-slate-600">
                                    Every project has been an opportunity to learn something new and push the boundaries of what's possible on the web.
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* center */}
                    <div
                        className={`
              transform
              transition-all
              duration-1000
              ${isVisible
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-20 opacity-0'
                            }
            `}
                        style={{ transitionDelay: '200ms' }}  /* 200ms delay for staggered effect */
                    >
                        <Card className="
              border-slate-200
              hover:shadow-lg
              transition-shadow
              bg-white
              h-full
              overflow-hidden  /* Hide overflow for carousel */
            ">
                            <CardContent className="p-0"> {/* No padding for full-width carousel */}
                                <Carousel
                                    opts={{
                                        align: "start",
                                        loop: true,
                                    }}
                                    className="w-full" /* Full width */
                                >
                                    <CarouselContent>
                                        {photos.map((photo, index) => (
                                            <CarouselItem key={index} classname="flex items-center justify-end">
                                                <div className="aspect-[3/4] w-full max-w-sm mx-auto overflow-hidden bg-slate-100 rounded-x1">
                                                    <ImageWithFallback
                                                        src={photo.src}
                                                        alt={photo.alt}
                                                        className="object-cover w-full h-full"
                                                    />
                                                </div>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    {/* Carousel navigation buttons */}
                                    <CarouselPrevious className="absolute z-10 p-1 text-pink-600 transition-all -translate-y-1/2 border-2 border-pink-300 shadow-lg pointer-events-auto top-1/2 left-1 rounded-2xl bg-white/80 dark:bg-white/80 dark:text-pink-300 dark:border-pink-400 backdrop-blur-md hover:scale-110 active:scale-95 hover:border-pink-400 dark:hover:border-pink-300 hover:shadow-pink-300/50"
                                    />
                                    <CarouselNext
                                        className="absolute z-10 p-1 text-pink-600 transition-all -translate-y-1/2 border-2 border-pink-300 shadow-lg pointer-events-auto p- top-1/2 right-1 rounded-2xl bg-white/80 dark:bg-white/80 dark:text-pink-300 dark:border-pink-400 backdrop-blur-md hover:scale-110 active:scale-95 hover:border-pink-400 dark:hover:border-pink-300 hover:shadow-pink-300/50"
                                    />
                                </Carousel>
                            </CardContent>
                        </Card>
                    </div>

                    {/* right */}
                    <div
                        className={`
              transform
              transition-all
              duration-1000
              ${isVisible
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-20 opacity-0'
                            }
            `}
                        style={{ transitionDelay: '400ms' }}  /* 400ms delay for staggered effect */
                    >
                        <Card className="h-full transition-shadow bg-white border-slate-200 hover:shadow-lg">
                            <CardContent className="pt-6">
                                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-pink-100 to-pink-600">
                                    <Heart className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="mb-3 text-slate-900">What I Love</h3>
                                <p className="mb-3 text-slate-600">
                                    I love to create responsive, accessible websites that make a real difference.
                                </p>
                                <p className="text-slate-600">
                                    When I'm not coding, you'll find me exploring new technologies, teaching, and working on creative side projects.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>


                {/* Skills Section - Moved Closer */}
                <div className="mt-8">

                    <div className="flex items-center justify-center">
                        {skillCategories.map((category, index) => (
                            <div
                                key={index}
                                className="p-6 bg-white border rounded-lg shadow-sm  border-slate-200"
                            >
                                <h4 className="mb-4 text-slate-900">{category.category}</h4>

                                <div className="flex flex-wrap justify-center gap-2 ">
                                    {category.skills.map((skill, skillIndex) => (
                                        <Badge
                                            key={skillIndex}
                                            variant="secondary"
                                            className="px-3 py-1 "
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;