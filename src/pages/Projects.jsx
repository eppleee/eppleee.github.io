import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import profilePic from '../styles/assets/pfpPic.jpg';
import cards from '../styles/assets/cards.jpg';
import music from '../styles/assets/music.jpg'
import desktop from '../styles/assets/desktop.jpg'

import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardFooter } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
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
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with shopping cart, payment integration, and admin dashboard.',
      image: '',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team features.',
      image: '',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'Portfolio Website Builder',
      description: 'A drag-and-drop website builder that helps creatives showcase their work online.',
      image: '',
      tags: ['React', 'Firebase', 'Material-UI'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for tracking social media performance across multiple platforms.',
      image: '',
      tags: ['Vue.js', 'Express', 'Chart.js'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'Fitness Tracker',
      description: 'Mobile-first fitness tracking app with workout plans and progress visualization.',
      image: '',
      tags: ['React Native', 'Redux', 'SQLite'],
      githubUrl: '#',
      liveUrl: '#'
    },
  ];

  return (
    <section
      id="projects"
      className="px-4 py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark: dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="
        max-w-7xl   /* Maximum width 80rem (1280px) */
        mx-auto     /* Horizontal margin auto (center) */
      ">
        {/* Section heading */}
        <h2 className="
          text-center    /* Center-align text */
          mb-4           /* Margin bottom 1rem (16px) */
          text-slate-900
            dark:text-slate-100
        ">
          Featured Projects
        </h2>

        {/* Section description */}
        <p className="
          text-center    /* Center-align text */
          text-slate-600
          dark:text-slate-300
          max-w-2xl      /* Maximum width 42rem (672px) */
          mx-auto        /* Horizontal margin auto (center) */
          mb-12          /* Margin bottom 3rem (48px) */
        ">
          Here are some of my recent projects that showcase my skills and experience
        </p>

        {/* Projects Carousel */}
        <Carousel
          opts={{
            align: "start",  // Align items to start
            loop: true,      // Enable infinite loop
          }}
          className="
            w-full        /* Full width */
            max-w-6xl     /* Maximum width 72rem (1152px) */
            mx-auto       /* Horizontal margin auto (center) */
          "
        >
          <CarouselContent className="-ml-4"> {/* Negative left margin to offset item padding */}
            {projects.map((project, index) => (
              <CarouselItem
                key={index}
                className="
                  pl-4              /* Padding left 1rem (16px) */
                  md:basis-1/2      /* On medium screens: 50% width (2 items visible) */
                  lg:basis-1/3      /* On large screens: 33.33% width (3 items visible) */
                "
              >
                <Card className="
                  overflow-hidden        /* Hide overflow */
                  hover:shadow-xl        /* On hover: extra large shadow */
                  transition-shadow      /* Animate shadow changes */
                  h-full                 /* Full height (match sibling cards) */
                ">
                  {/* Project image */}
                  <div className="
                    aspect-video       /* Aspect ratio 16:9 */
                    overflow-hidden    /* Hide overflow */
                    bg-slate-100       /* Light gray background */
                  ">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="
                        w-full                    /* Full width */
                        h-full                    /* Full height */
                        object-cover              /* Cover area while maintaining aspect ratio */
                        hover:scale-105           /* On hover: scale to 105% */
                        transition-transform      /* Animate transform changes */
                        duration-300              /* Animation takes 300ms */
                      "
                    />
                  </div>

                  {/* Project details */}
                  <CardContent className="pt-6"> {/* Padding top 1.5rem (24px) */}
                    <h3 className="mb-2 text-slate-900">{project.title}</h3>
                    <p className="
                      text-slate-600  /* Medium gray text */
                      mb-4            /* Margin bottom 1rem (16px) */
                      line-clamp-2    /* Limit to 2 lines with ellipsis */
                    ">
                      {project.description}
                    </p>

                    {/* Technology tags */}
                    <div className="
                      flex       /* Flexbox layout */
                      flex-wrap  /* Allow items to wrap to new lines */
                      gap-2      /* Gap 0.5rem (8px) between items */
                    ">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="outline"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  {/* Action buttons */}
                  <CardFooter className="gap-2"> {/* Gap 0.5rem (8px) between buttons */}
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1" /* Flex grow to fill available space equally */
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" /> {/* Icon with right margin */}
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      asChild
                      className="flex-1"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Carousel navigation buttons */}
          <CarouselPrevious className="
            hidden              /* Hidden by default */
            md:flex             /* Show as flex on medium screens (768px+) */
            -left-12            /* 3rem (48px) left of carousel */
            lg:-left-16         /* 4rem (64px) left on large screens (1024px+) */
            bg-pink-400
            dark:bg-pink-600
            text-white
            hover:bg-pink-600
            border-white
          " />
          <CarouselNext className="
            hidden
            md:flex
            -right-12           /* 3rem (48px) right of carousel */
            lg:-right-16        /* 4rem (64px) right on large screens (1024px+) */
            bg-pink-400
            dark:bg-pink-600
            text-white
            hover:bg-pink-400
            border-white
          " />
        </Carousel>
      </div>
    </section>
  );
}

export default Projects;
