import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import '../pages/pages.css';
import flowerStars from '../assets/petals-with-stars.png';
import treeFlower from '../assets/rightside-flowers.png';
import flowerr from '../assets/flowerr.png';

/*importing my about images */
import gradImg from '../assets/grad-photo.jpeg';
import secondImg from '../assets/gradImg2.jpeg';
import thirdImg from '../assets/gradImg3.jpeg';
import forthImg from '../assets/group4.jpeg';
import fifthImg from '../assets/kourtneyT.jpeg';
import sixthImg from '../assets/olgroup.jpeg';
import seventhImg from '../assets/olpic.jpeg';


/*imports of all my lang images*/
import jsImg from '../assets/js.png';
import reactImg from '../assets/library.png';
import htmlImg from '../assets/html.png';
import cssImg from '../assets/c-.png';
import sqlImg from '../assets/sql-server.png';
import pythonImg from '../assets/python.png';
import javaImg from '../assets/java.png';

function About() {

    const images = [gradImg, secondImg, thirdImg,];
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex(prevIndex =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentIndex(prevIndex =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const els = document.querySelectorAll('.about-text p, .about-text2 p');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const parent = entry.target.closest('.about-text, .about-text2');
                    const siblings = parent ? Array.from(parent.querySelectorAll('p')) : [];
                    const index = siblings.indexOf(entry.target);

                    const delayMs = 300;
                    entry.target.style.transitionDelay = `${index * delayMs}ms`;

                    entry.target.classList.add('show');
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -8% 0px'
        });

        els.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Element name="about">
                <section className="about-section">
                    <div className="about-container">
                        <div className="about-text">
                            <p>I am a recent graduate from Towson University with a passion for web development and technology. Inspired by the ever-evolving digital world, I strive to create engaging, user-friendly, and efficient web experiences. My technical skills include React, HTML, JavaScript, C++, SQL, Java, and Python, which I continuously develop through projects and hands-on learning. I love coding and genuinely enjoy the process, which motivates me to work hard and go above and beyond in everything I do. I’m also a fast learner and enjoy collaborating with others to create the best possible solutions.</p>
                            <p>My mission is to leverage technology to build accessible, impactful websites and applications that connect people and solve real-world problems. I am dedicated to lifelong learning and innovation, aiming to grow as a developer who can contribute meaningfully to the tech community.</p>
                        </div>

                        <div className="about-image-wrapper">
                            <div className="image-caption">About Me</div>
                            <button className="arrow left" onClick={prevImage}>
                                &#10094;
                            </button>
                            <img
                                src={images[currentIndex]}
                                alt="About Me"
                                className="about-image"
                            />
                            <button className="arrow right" onClick={nextImage}>
                                &#10095;
                            </button>

                            <div className="languages">
                                <img src={jsImg} alt="JavaScript" className="lang-image" />
                                <img src={reactImg} alt="React" className="lang-image" />
                                <img src={htmlImg} alt="HTML" className="lang-image" />
                                <img src={cssImg} alt="CSS" className="lang-image" />
                                <img src={sqlImg} alt="SQL" className="lang-image" />
                                <img src={pythonImg} alt="Python" className="lang-image" />
                                <img src={javaImg} alt="Java" className="lang-image" />
                            </div>
                        </div>
                        <div className="about-text2">
                            <p>I hope to specialize in front-end development, crafting intuitive and beautiful user interfaces that enhance the digital experience for users everywhere.</p>
                            <p>Before college, I had no experience with coding or programming. But through determination and a strong willingness to learn, I quickly grew to love coding and pushed myself every day to improve. I am proud to have earned my bachelor’s degree while developing the skills and passion that continue to drive me today.</p>
                        </div>
                    </div>

                    <img src={flowerStars} alt="flower-stars" className="flower-stars flower1" />
                    <img src={flowerStars} alt="flower-stars" className="flower-stars flower2" />
                    <img src={flowerStars} alt="flower-stars" className="flower-stars flower3" />
                    <img src={flowerStars} alt="flower-stars" className="flower-stars flower4" />
                    <img src={flowerStars} alt="flower-stars" className="flower-stars flower5" />
                    <img src={flowerStars} alt="flower-stars" className="flower-stars flower6" />
                    <img src={flowerStars} alt="flower-stars" className="flower-stars flower7" />

                </section>
                <section className="backgroundImg">
                    <img src={treeFlower} alt="rightside-flowers" className="tree-flower" />
                    <img src={flowerr} alt="flower" className="flower" />
                </section>
            </Element>
        </>
    );
}

export default About;
