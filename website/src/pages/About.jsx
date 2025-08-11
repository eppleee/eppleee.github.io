import '../pages/pages.css';
import border from '../assets/flowerFrame.png';
import cornerImg from '../assets/branch-petals.png';
import gradImg from '../assets/grad-photo.jpeg';
import flowerStars from '../assets/petals-with-stars.png';
import treeFlower from '../assets/rightside-flowers.png';
import flowerr from'../assets/flowerr.png';

/*imports of all my lang images*/
import jsImg from '../assets/js.png';
import reactImg from '../assets/library.png';
import htmlImg from '../assets/html.png';
import cssImg from '../assets/c-.png';
import sqlImg from '../assets/sql-server.png';
import pythonImg from '../assets/python.png';
import javaImg from '../assets/java.png';

function About() {
    return (
        <section className="about-page">

            <div className="skill-box">
                <h2 className="skill-text">Skills</h2>
                <p className="skill-text">I am proficient in a variety of programming languages and technologies, including:</p>
                <p className="skill-text">JavaScript, React, HTML, CSS, SQL, Python, and Java.</p>
                <div className="lang-images">
                    <img src={jsImg} alt="JavaScript" className="lang-image" />
                    <img src={reactImg} alt="React" className="lang-image" />
                    <img src={htmlImg} alt="HTML" className="lang-image" />
                    <img src={cssImg} alt="CSS" className="lang-image" />
                    <img src={sqlImg} alt="SQL" className="lang-image" />
                    <img src={pythonImg} alt="Python" className="lang-image" />
                    <img src={javaImg} alt="Java" className="lang-image" />
                </div>
            </div>

            <div className="about-box">
                <img src={border} alt="flowerFrame" className="border" />
                <div className="about-content">
                    <div className="about-left">
                        <img src={gradImg} alt="grad" className="grad-image" />
                    </div>
                    <div className="about-right">
                        <h2 className="about-text">About Me</h2>
                        <p className="about-text">
                            I am a passionate web developer with a keen interest in creating dynamic and responsive web applications. My journey in web development has equipped me with a solid foundation in both front-end and back-end technologies.
                        </p>
                        <p className="about-text">
                            I enjoy problem-solving and continuously learning new skills to enhance my development capabilities.
                        </p>
                    </div>
                </div>
            </div>
            {/*
            <img src={cornerImg} alt="branch-petals" className="corner-image" />
            <img src={flowerStars} alt="flower-stars" className="flower-stars flower1" />
            <img src={flowerStars} alt="flower-stars" className="flower-stars flower2" />
            <img src={flowerStars} alt="flower-stars" className="flower-stars flower3" />
            <img src={flowerStars} alt="flower-stars" className="flower-stars flower4" />
            <img src={flowerStars} alt="flower-stars" className="flower-stars flower5" />
            <img src={flowerStars} alt="flower-stars" className="flower-stars flower6" />
            <img src={flowerStars} alt="flower-stars" className="flower-stars flower7" />

            <img src={treeFlower} alt="rightside-flowers" className="tree-flower" />
            <img src={flowerr} alt="flower" className="flower" />

            */}
        </section>
    );
}

export default About;
