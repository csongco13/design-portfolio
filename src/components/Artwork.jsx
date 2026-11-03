import { useCallback, useEffect, useState } from "react";
import "./Artwork.css";

const artCategories = ["All", "Digital", "Traditional", "Graphic Design"];

const artworks = [
  {
    id: 1,
    title: "Bad Mood",
    category: "Digital",
    medium: "Vector illustration",
    image: "/artwork/bad-mood.jpg",
  },
  {
    id: 2,
    title: "Spiraling Out of Control",
    category: "Traditional",
    medium: "Graphite & ink",
    image: "/artwork/spiraling.jpg",
  },
  {
    id: 3,
    title: "Joyride",
    category: "Digital",
    medium: "Vector illustration",
    image: "/artwork/pink-car.jpg",
  },
  {
    id: 4,
    title: "Celestial Halo",
    category: "Traditional",
    medium: "Ink & graphite",
    image: "/artwork/celestial-halo.jpg",
  },
  {
    id: 5,
    title: "Falling",
    category: "Digital",
    medium: "Digital papercut",
    image: "/artwork/wonderland-fall.jpg",
  },
  {
    id: 6,
    title: "Is My Partner Gaslighting Me?",
    category: "Graphic Design",
    medium: "Infographic · Illustrator",
    image: "/artwork/gaslighting-infographic.jpg",
  },
  {
    id: 7,
    title: "Beanie",
    category: "Digital",
    medium: "Vector portrait",
    image: "/artwork/pink-portrait-beanie.jpg",
  },
  {
    id: 8,
    title: "In Bloom",
    category: "Traditional",
    medium: "Pen & ink",
    image: "/artwork/floral-eyepatch.jpg",
  },
  {
    id: 9,
    title: "Pink Noir",
    category: "Digital",
    medium: "Vector illustration",
    image: "/artwork/pink-noir.jpg",
  },
  {
    id: 10,
    title: "Space & Sea",
    category: "Traditional",
    medium: "Graphite & ink",
    image: "/artwork/space-and-sea.jpg",
  },
  {
    id: 11,
    title: "Papercut Portrait",
    category: "Digital",
    medium: "Digital papercut",
    image: "/artwork/papercut-portrait.jpg",
  },
  {
    id: 12,
    title: "Balance",
    category: "Traditional",
    medium: "Pen & ink",
    image: "/artwork/yin-yang-bath.jpg",
  },
  {
    id: 13,
    title: "To Kill a Mockingbird",
    category: "Graphic Design",
    medium: "Editorial spread · Photoshop",
    image: "/artwork/mockingbird-spread.jpg",
  },
];

function Artwork() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState(null);

  const filteredArt =
    activeCategory === "All"
      ? artworks
      : artworks.filter((art) => art.category === activeCategory);

  const close = useCallback(() => setOpenIndex(null), []);

  const step = useCallback(
    (direction) =>
      setOpenIndex((current) =>
        current === null
          ? current
          : (current + direction + filteredArt.length) % filteredArt.length
      ),
    [filteredArt.length]
  );

  useEffect(() => {
    if (openIndex === null) return undefined;

    const handleKey = (event) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [openIndex, close, step]);

  const openArt = openIndex !== null ? filteredArt[openIndex] : null;

  return (
    <section className="artwork" id="artwork">
      <div className="section-heading">
        <p className="section-heading__number">04</p>

        <h2 className="section-heading__title">
          ART
          <span className="section-heading__highlight">WORK</span>
        </h2>
      </div>

      <p className="artwork__intro">
        Before UX, I was a graphic designer and illustrator. Here's a mix of
        digital pieces, pen-and-ink drawings, and design work.
      </p>

      <div className="projects__filters">
        {artCategories.map((category) => (
          <button
            className={`projects__filter ${
              activeCategory === category ? "projects__filter--active" : ""
            }`}
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="artwork__gallery">
        {filteredArt.map((art, index) => (
          <button
            className="art-card"
            key={art.id}
            type="button"
            onClick={() => setOpenIndex(index)}
            aria-label={`View ${art.title} larger`}
          >
            <div className="art-card__frame">
              <img
                className="art-card__image"
                src={art.image}
                alt={art.title}
                loading="lazy"
              />
            </div>

            <div className="art-card__caption">
              <div>
                <h3 className="art-card__title">{art.title}</h3>
                <p className="art-card__medium">{art.medium}</p>
              </div>

              <span className="project-card__label art-card__label">
                {art.category}
              </span>
            </div>
          </button>
        ))}
      </div>

      {openArt && (
        <div
          className="art-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={openArt.title}
          onClick={close}
        >
          <button
            className="art-lightbox__close"
            type="button"
            onClick={close}
            aria-label="Close"
          >
            ✕
          </button>

          <button
            className="art-lightbox__arrow art-lightbox__arrow--prev"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              step(-1);
            }}
            aria-label="Previous artwork"
          >
            ←
          </button>

          <figure
            className="art-lightbox__figure"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              className="art-lightbox__image"
              src={openArt.image}
              alt={openArt.title}
            />

            <figcaption className="art-lightbox__caption">
              <span className="art-lightbox__title">{openArt.title}</span>
              <span className="art-lightbox__meta">
                {openArt.medium} · {openIndex + 1} / {filteredArt.length}
              </span>
            </figcaption>
          </figure>

          <button
            className="art-lightbox__arrow art-lightbox__arrow--next"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              step(1);
            }}
            aria-label="Next artwork"
          >
            →
          </button>
        </div>
      )}
    </section>
  );
}

export default Artwork;