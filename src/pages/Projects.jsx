import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardFooter } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import construction from '../styles/assets/construction.jpg';
import weatherApp from '../styles/assets/weather.jpg';
import websitePic from '../styles/assets/website.jpeg';
import lostandfound from '../styles/assets/lostfound.jpeg';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../components/ui/carousel';
import ImageWithFallback from '../components/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: 'Lost & Found Web Application',
      description: 'A full-stack e-commerce solution with shopping cart, payment integration, and admin dashboard.',
      image: lostandfound,
      tags: ['JavaScript', 'TailwindCss', 'HTML', 'Astro', 'MongoDB'],
      githubUrl: 'https://github.com/237Codes/towson-lost-and-found-app',
    },
    {
      title: 'Weather App',
      description: 'A collaborative task management application with real-time updates and team features.',
      image: weatherApp,
      tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind'],
      githubUrl: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A drag-and-drop website builder that helps creatives showcase their work online.',
      image: websitePic,
      tags: ['React', 'HTML', 'Tailwind CSS', 'Vue.js', 'JavaScript', 'GitHub Pages'],
      githubUrl: '#'
    },
    {
      title: 'AI Therapy Chatbot',
      description: 'Analytics dashboard for tracking social media performance across multiple platforms.',
      image: construction,
      tags: ['Vue.js', 'Express', 'Chart.js'],
      githubUrl: '#'
    },
    {
      title: 'Learning Hub',
      description: 'Analytics dashboard for tracking social media performance across multiple platforms.',
      image: construction,
      tags: ['Vue.js', 'Express', 'Chart.js'],
      githubUrl: 'https://github.com/eppleee/ai-therapy-chatbot'
    },
  ];

  return (
    <section
      id="projects"
      className="relative z-0 min-h-screen px-4 py-20 overflow-hidden font-serif "
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-center text-5xl font-semibold text-[#252c61b9] dark:text-white">
          Featured Projects
        </h2>

        <p className="px-4 py-3 max-w-2xl mx-auto mb-12 text-center text-[#252c61b9] dark:text-white">
          Here are some of my recent projects that showcase my skills and experience
        </p>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl py-10 mx-auto "
        >
          <CarouselContent className="-ml-4">
            {projects.map((project, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/3 lg:basis-1/3"
              >
                <Card className="
                  overflow-hidden
                  hover:shadow-xl
                  transition-shadow
                  h-full
                  dark:bg-[#252c61b9]
                ">
                  {/* Project image */}
                  <div className="
                    aspect-video
                    overflow-hidden
                    bg-slate-100
                    dark:bg-[#252c6198]
                  ">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  {/* Project details */}
                  <CardContent className="pt-6">
                    <h3 className="mb-2 text-[#252c61e1] dark:text-white">{project.title}</h3>
                    <p className="mb-4 text-[#252c61e1] dark:text-white line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technology tags */}
                    <div className="flex flex-wrap gap-2 ">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="outline"
                          className="text-[#252c61e1] bg-white border-[#d69edb] dark:text-[#640268] dark:border-[#640268]"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  {/* Action buttons */}
                  <CardFooter className="gap-3 pt-6">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1 text-[#8684fd] border-[#d69edb] dark:border-white dark:text-white hover:bg-[#d69edb] hover:text-white dark:hover:bg-white dark:hover:text-[#640268]"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="text-white transition-all duration-300 border-none shadow-lg -left-10 md:-left-16 lg:-left-50 size-12 bg-gradient-to-br from-[#d18cda] to-[#9492f7] hover:text-white hover:shadow-xl hover:scale-110 hover:from-[#9492f7] hover:to-[#74cbf7] disabled:opacity-30 disabled:hover:scale-100 " />
          <CarouselNext className="text-white transition-all duration-300 border-none shadow-lg -right-10 md:-right-16 lg:-right-50 size-12 bg-gradient-to-br from-[#d18cda] to-[#9492f7] hover:text-white hover:shadow-xl hover:scale-110 hover:from-[#9492f7] hover:to-[#74cbf7] disabled:opacity-30 disabled:hover:scale-100 " />
        </Carousel>
      </div>
    </section>
  );
}

export default Projects;
