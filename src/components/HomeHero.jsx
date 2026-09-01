import { useEffect, useState } from "react";
import "./HomeHero.css";

function HomeHero() {
  const introMessage = "Hi, I am Courtney Songco";
  const roleMessage = "Software Developer | UI/UX Designer | Product Manager";

  const [introText, setIntroText] = useState("");
  const [roleText, setRoleText] = useState("");
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    let introIndex = 0;

    const introTimer = setInterval(() => {
      setIntroText(introMessage.slice(0, introIndex + 1));
      introIndex += 1;

      if (introIndex === introMessage.length) {
        clearInterval(introTimer);

        setTimeout(() => {
          setIntroDone(true);
        }, 500);
      }
    }, 85);

    return () => clearInterval(introTimer);
  }, []);

  useEffect(() => {
    if (!introDone) return;

    let roleIndex = 0;

    const roleTimer = setInterval(() => {
      setRoleText(roleMessage.slice(0, roleIndex + 1));
      roleIndex += 1;

      if (roleIndex === roleMessage.length) {
        clearInterval(roleTimer);
      }
    }, 55);

    return () => clearInterval(roleTimer);
  }, [introDone]);

  return (
    <section className="home-hero">
      <div className="home-hero__mockup">
        <img
          className="home-hero__image"
          src="/images/vintage-computer.png"
          alt="Vintage computer"
        />

        <div className="home-hero__screen">
          <p className="home-hero__intro">
            {introText}
            {!introDone && (
              <span className="home-hero__cursor">|</span>
            )}
          </p>

          <p className="home-hero__role">
            {roleText}
            {introDone && (
              <span className="home-hero__cursor">|</span>
            )}
          </p>
        </div>
      </div>

      <div className="home-hero__socials">
        <a
          className="home-hero__social-link"
          href="https://github.com/csongco13"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <img
            className="home-hero__social-icon"
            src="/icons/github.png"
            alt=""
          />
        </a>

        <a
          className="home-hero__social-link"
          href="https://www.linkedin.com/in/courtney-s-094589200/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <img
            className="home-hero__social-icon"
            src="/icons/linkedin.png"
            alt=""
          />
        </a>

        <a
          className="home-hero__social-link"
          href="mailto:songcokurt.edu@gmail.com"
          aria-label="Email"
        >
          <img
            className="home-hero__social-icon"
            src="/icons/email.png"
            alt=""
          />
        </a>

        <a
          className="home-hero__social-link"
          href="https://www.instagram.com/escope21?igsi=Y3JjbGJha3I4ZGRq&utm_source=qr"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <img
            className="home-hero__social-icon"
            src="/icons/instagram.png"
            alt=""
          />
        </a>
      </div>
    </section>
  );
}

export default HomeHero;