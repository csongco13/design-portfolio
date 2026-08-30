import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [activeItem, setActiveItem] = useState("home");

  const navItems = [
    {
      id: "home",
      label: "HOME",
      icon: "/icons/home.png",
      href: "#home",
    },
    {
      id: "skills",
      label: "SKILLS",
      icon: "/icons/skills.png",
      href: "#skills",
    },
    {
      id: "projects",
      label: "PROJECTS",
      icon: "/icons/projects.png",
      href: "#projects",
    },
    {
      id: "contact",
      label: "CONTACT",
      icon: "/icons/email.•png",
      href: "#home",
    },
  ];

  return (
    <nav className="portfolio-nav">
      <div className="portfolio-nav__menu">
        {navItems.map((item) => (
          <a
            key={item.id}
            className={`portfolio-nav__item ${
              activeItem === item.id
                ? "portfolio-nav__item--active"
                : ""
            }`}
            href={item.href}
            onClick={() => setActiveItem(item.id)}
          >
            <img
              className="portfolio-nav__icon"
              src={item.icon}
              alt=""
            />

            {activeItem === item.id && (
              <span className="portfolio-nav__label">
                {item.label}
              </span>
            )}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;