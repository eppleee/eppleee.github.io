import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import profilePic from '../assets/pfpPic.jpg';
import cards from '../assets/cards.jpg';
import music from '../assets/music.jpg'
import desktop from '../assets/desktop.jpg'

function Projects() {
  const projects = [
    { title: 'Solitaire', description: 'A classic card game built in React.', img: cards },
    { title: 'Music Bot', description: 'A Discord bot that plays music.', img: music },
    { title: 'Desktop Simulator', description: 'An interactive desktop UI simulation.', img: desktop },
    { title: 'Extra Project', description: 'Bonus project coming soon...', img: profilePic },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [projects.length]);

  return (
    <>
      <Element name="projects">
        <section className="projects-section">
          <div className="projects-list">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className={`project-item ${idx === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
              >
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
              </div>
            ))}
            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{ animationDuration: '5s' }}
              />
            </div>
          </div>

          <div className="projects-image">
            <img src={projects[activeIndex].img} alt={projects[activeIndex].title} />
          </div>
        </section>
      </Element>
    </>
  );
}

export default Projects;
