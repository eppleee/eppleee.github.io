import '../pages/pages.css';
import Card from '../components/Card.jsx';
import profilePic from '../assets/pfpPic.jpg';

function Projects() {
    const projects = [
        { title: 'Solitaire', role: 'filer', imgSrc: profilePic, description: 'game' },
        { title: 'Music Bot', role: 'filer', imgSrc: profilePic, description: 'music' },
        { title: 'Desktop Simulator', role: 'filer', imgSrc: profilePic, description: 'simulator' }
    ];

    return (
        <section className="project-page">

            <div className="projects">
                <h1 className="project-text">Projects</h1>
                <div className="card-grid">
                    {projects.map((p, index) => (
                        <Card key={index} {...p} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
