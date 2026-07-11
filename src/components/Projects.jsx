import "./Projects.css";

function Projects() {
    const projects = [
        {
            title: "PyCoCard",
            category: "Education Card Game",
            image: "/PyCoCardScreenshot.png",
            infoLink: "https://github.com/csongco13/PyCoCard",
            demoLink: "https://py-co-card.vercel.app/"
        },
        {
            title: "Collide",
            category: "Student Matching App",
            image: "/CollideScreenshot.png",
            infoLink: "https://github.com/zombby24/Collide",
            demoLink: "https://humorous-transformation-production.up.railway.app/"
        },
        {
            title: "Move-It",
            category: "Motion Rhythm Game",
            image: "/MoveItScreenshot.png",
            infoLink: "https://github.com/Noah-Wisner/Move-It-CS179J",
            demoLink: "https://drive.google.com/file/d/1_2EH-XA_DEjyFZJq1Fza50mElsaligse/view?usp=sharing"
        },
        {
            title: "Mock Trial",
            category: "Student Mock Trial Website",
            image: "/MockTrialSS.png",
            infoLink: "https://www.figma.com/design/fGmpfiiGvSQvV9xvVA08ID/Spring--25--Mock-Trial?node-id=0-1&t=se8fJJZk2sIu9xs9-0",
            demoLink: "https://www.figma.com/proto/fGmpfiiGvSQvV9xvVA08ID/Spring--25--Mock-Trial?node-id=344-57&p=f&t=lpgWGE7gKaJM3pyg-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=436%3A159"
        }

    ];

    return (
        <section className="projects-section">
            <div className="projects-header">
                <p className="projects-small-title">SELECTED WORKS</p>
                <h2 className="projects-title">WEBSITES</h2>
                <p className="projects-description">
                    A collection of web, UI/UX, and creative development projects.
                </p>
            </div>

            <div className="project-carousel">
                {projects.map((project) => (
                    <div className="project-card" key={project.title}>
                        <img className="project-image" src={project.image} alt={project.title} />

                        <div className="project-overlay">
                            <h3 className="project-name">{project.title}</h3>
                            <p className="project-category">{project.category}</p>

                            <div className="project-links">
                                <a className="project-link" href={project.infoLink}>
                                    See More Info
                                </a>

                                <a
                                    className="project-link"
                                    href={project.demoLink}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;