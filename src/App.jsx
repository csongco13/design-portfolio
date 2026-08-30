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
    categories: ["Software", "Web", "UI/UX"],
    description:
      "A branding and prototyping assistant app that turns any image you captured or any image you upload into a website prototype, mobile prototype, blog prototype, and many more.",
    image: "/images/mockitup.png",
    tech: ["React", "TypeScript", "Supabase", "Expo"],
    github: "https://github.com/csongco13/Mock-It-Up",
    live: "",
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
    live: "",
  },

  {
    id: 3,
    title: "PaletteAI",
    categories: ["Software", "Mobile", "UI/UX"],
    description:
      "A mobile branding assistant that helps users generate color palettes and visual design concepts from images and moodboards.",
    image: "/images/paletteai.png",
    tech: ["React Native", "Expo", "Firebase"],
    github: "https://github.com/",
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
    live: "",
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
              I’m a software developer and designer interested in
              building interactive digital experiences that combine
              technology, usability, and visual design.
            </p>

            <p className="about__text">
              My work includes web applications, mobile applications,
              UI/UX design, embedded systems, and game development.
              I enjoy working across both engineering and design to
              create products that are functional, approachable, and
              visually engaging.
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

                    {project.live && (
                      <a
                        className="project-card__link"
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} live project`}
                      >
                        <span className="project-card__external-symbol">
                          ↗
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