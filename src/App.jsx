import { useState } from "react";
import Navbar from "./components/Navbar"
import HomeHero from "./components/HomeHero";
import Skills from "./components/Skills"
import "./App.css";

const categories = [
  "All",
  "Software",
  "Web",
  "Mobile",
  "UI/UX",
  "Embedded",
  "Gaming",
];

const projects = [
  {
    id: 1,
    title: "MockItUp",
    categories: ["Software", "Web", "Mobile", "UI/UX"],
    description:
      "A branding and prototyping assistant app that turns any image you captured or any image you upload into a website prototype, mobile prototype, blog prototype, and many more.",
    image: "/images/mockitup.png",
    tech: ["React", "TypeScript", "PostgreSQL", "Expo"],
    github: "https://github.com/csongco13/Mock-It-Up",
    case: "public/case-studies/mockitup/index.html",
    live:  "https://mock-it-up-three.vercel.app/",
  },

  {
    id: 2,
    title: "CodaNote",
    categories: ["Software", "Web", "Mobile", "UI/UX"],
    description:
      "A note-taking platform designed for computer science students with code blocks, handwriting, toggles, document uploads, and notebook organization.",
    image: "/images/csnotes.png",
    tech: ["React", "TypeScript", "PostgreSQL", "CSS"],
    github: "https://github.com/csongco13/CodaNote",
    case: "public/case-studies/codanote/index.html",
    live: "https://coda-note.vercel.app/",
  },

  {
    id: 3,
    title: "Collide",
    categories: ["Software", "Web"],
    description:
      "Group match-matching social media platform for UC Riverside students utilizing swipe-based UI.",
    image: "/images/collide.png",
    tech: ["React Native", "SQL", "MongoDB"],
    github: "https://github.com/zombby24/Collide",
    live: "",
  },

  {
    id: 4,
    title: "Move-It",
    categories: ["Software", "Embedded", "Gaming"],
    description:
      "A motion-controlled rhythm game that uses ESP32 boards and MPU6050 motion sensors to translate player movement into gameplay.",
    image: "/images/moveit.png",
    tech: ["Godot", "ESP32", "C++", "UDP"],
    github: "https://github.com/",
    live: "https://drive.google.com/drive/u/2/folders/18aF3xZQ2vkpVuV6g5rUQA8jSoTXWzKOQ",
  },

  {
    id: 5,
    title: "Rushmore Food Catering Website Case Study",
    categories: ["Web", "UI/UX"],
    description:
      "A UI/UX case study exploring the research, wireframing, prototyping, and development process behind a responsive portfolio redesign.",
    image: "/images/casestudy.png",
    tech: ["Figma", "React"],
    github: "",
    live: "",
  },
];

function App() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(activeCategory)
        );

  return (
    <main className="portfolio">
      <Navbar/>
      <HomeHero/>
      <section className="about" id="about">
        <div className="section-heading">
          <p className="section-heading__number">
            01
          </p>

          <h2 className="section-heading__title">
            AB
            <span className="section-heading__highlight">
              OUT
            </span>
          </h2>
        </div>

        <div className="about__panel">
          <div className="about__content">
            <p className="about__intro">
              Hi! I'm Courtney Songco, I am a Computer Science student based in California who is currently seeking
              a job in Software Development or UI/UX Design.
            </p>

            <p className="about__text">
              I enjoy making projects involving web and mobile applications. I am getting more involved 
              with game development and embedded systems. I have previous experience of web designing from my
              internship at the USDA, and I also have learned software development skills from my internship
              back in The Philippines.
            </p>
          </div>

        </div>
      </section>

      <Skills/>
      <section className="projects" id="projects">
        <div className="section-heading">
          <p className="section-heading__number">
            03
          </p>

          <h2 className="section-heading__title">
            PRO
            <span className="section-heading__highlight">
              JECTS
            </span>
          </h2>
        </div>

        <div className="projects__filters">
          {categories.map((category) => (
            <button
              className={`projects__filter ${
                activeCategory === category
                  ? "projects__filter--active"
                  : ""
              }`}
              key={category}
              type="button"
              onClick={() =>
                setActiveCategory(category)
              }
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects__list">
          {filteredProjects.map((project, index) => (
            <article
              className={`project-card ${
                index % 2 !== 0
                  ? "project-card--reverse"
                  : ""
              }`}
              key={project.id}
            >
              <div className="project-card__visual">
                <div className="project-card__image-background" />

                <img
                  className="project-card__image"
                  src={project.image}
                  alt={`${project.title} project preview`}
                />
              </div>

              <div className="project-card__content">
                <div className="project-card__top">
                  <div className="project-card__labels">
                    {project.categories.map((category) => (
                      <span
                        className="project-card__label"
                        key={category}
                      >
                        {category}
                      </span>
                    ))}
                  </div>

                  <h3 className="project-card__title">
                    {project.title}
                  </h3>

                  <p className="project-card__description">
                    {project.description}
                  </p>
                </div>

                <div className="project-card__bottom">
                  <p className="project-card__tech">
                    {project.tech.join(" · ")}
                  </p>

                  <div className="project-card__links">
                    {project.github && (
                      <a
                        className="project-card__link"
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} GitHub repository`}
                      >
                        <img
                          className="project-card__link-icon"
                          src="/icons/github.png"
                          alt=""
                        />
                      </a>
                    )}

                    {project.case && (
                      <a
                        className="project-card__link project-card__link--demo"
                        href={project.case}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} ui/ux case study`}
                      >
                        <span className="project-card__external-symbol">
                          See UI/UX Case Study ↗
                        </span>
                      </a>
                    )}

                    {project.live && (
                      <a
                        className="project-card__link project-card__link--demo"
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} live project`}
                      >
                        <span className="project-card__external-symbol">
                          See Live Demo ↗
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p className="footer__text">
          © 2026 Courtney Songco
        </p>
      </footer>
    </main>
  );
}

export default App;