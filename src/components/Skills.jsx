import "./Skills.css";
const skillGroups = [
  {
    title: "Programming",
    skills: [
      {
        name: "JavaScript",
        icon: "/icons/javascript.png",
      },
      {
        name: "TypeScript",
        icon: "/icons/typescript.png",
      },
      {
        name: "Python",
        icon: "/icons/python.png",
      },
      {
        name: "C++",
        icon: "/icons/cpp.png",
      },
      {
        name: "SQL",
        icon: "/icons/sql.png",
      },
      {
        name: "HTML",
        icon: "/icons/html.png",
      },
      {
        name: "CSS",
        icon: "/icons/css.png",
      },
    ],
  },

  {
    title: "Developer Tools",
    skills: [
      {
        name: "Git",
        icon: "/icons/git.png",
      },
      {
        name: "GitHub",
        icon: "/icons/github.png",
      },
      {
        name: "Unity",
        icon: "/icons/unity.png",
      },
      {
        name: "Godot",
        icon: "/icons/godot.png",
      },
    ],
  },

  {
    title: "Frameworks",
    skills: [
      {
        name: "React",
        icon: "/icons/react.png",
      },
      {
        name: "Node.js",
        icon: "/icons/nodejs.png",
      },
      {
        name: "Expo",
        icon: "/icons/expo.png",
      },
    ],
  },

  {
    title: "Design",
    skills: [
      {
        name: "Figma",
        icon: "/icons/figma.png",
      },
      {
        name: "Adobe Photoshop",
        icon: "/icons/adobe-photoshop.png",
      },
      {
        name: "Adobe Illustrator",
        icon: "/icons/adobe-illustrator.png",
      },
    ],
  },
];      

function Skills(){
    return(
      <section className="skills" id="skills">
        <div className="section-heading">
          <p className="section-heading__number">
            02
          </p>

          <h2 className="section-heading__title">
            SKI
            <span className="section-heading__highlight">
              LLS
            </span>
          </h2>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <article
              className="skills__card"
              key={group.title}
            >
              <h3 className="skills__card-title">
                {group.title}
              </h3>

              <ul className="skills__list">
                {group.skills.map((skill) => (
                  <li
                    className="skills__item"
                    key={skill.name}
                  >
                    <img
                      className="skills__icon"
                      src={skill.icon}
                      alt=""
                    />

                    <span className="skills__name">
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    );
}

export default Skills;