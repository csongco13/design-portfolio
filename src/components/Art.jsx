import { useState } from "react";
import "./Art.css";

function Art() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedArt, setSelectedArt] = useState(null);

    const artworks = [
        {
            title: "Artwork 1",
            type: "Digital Art",
            image: "/art/IMG_1557.JPG"
        },
        {
            title: "Artwork 2",
            type: "Illustration",
            image: "/art/LARGER GASLIGHTING INFORGRAPH.jpg"
        },
        {
            title: "Artwork 3",
            type: "Graphic Design",
            image: "/art/illustration-img-1.jpeg"
        },
        {
            title: "Artwork 4",
            type: "Poster Design",
            image: "/art/illustration-img-2.jpg"
        },
        {
            title: "Artwork 5",
            type: "Character Design",
            image: "/art/illustration-img-3.jpeg"
        },
        {
            title: "Artwork 6",
            type: "Visual Design",
            image: "/art/illustration-img-4.jpg"
        },
        {
            title: "Artwork 7",
            type: "Digital Art",
            image: "/art/illustration-img-5.jpg"
        },
        {
            title: "Artwork 8",
            type: "Illustration",
            image: "/art/illustration-img-6.jpg"
        },
        {
            title: "Artwork 9",
            type: "Graphic Design",
            image: "/art/IMG_2514.PNG"
        },
        {
            title: "Artwork 10",
            type: "Poster Design",
            image: "/art/IMG_2516.PNG"
        },
        {
            title: "Artwork 11",
            type: "Creative Work",
            image: "/art/IMG_2517.PNG"
        },
        {
            title: "Artwork 12",
            type: "Poster Design",
            image: "/art/IMG_2518.PNG"
        },
                {
            title: "Artwork 13",
            type: "Poster Design",
            image: "/art/IMG_2519.PNG"
        },
    ];

   function openArt(artwork) {
        setSelectedArt(artwork);
    }

    function closeArt() {
        setSelectedArt(null);
    }

    return (
        <section className="art-section">
            <div className="art-header">
                <p className="art-small-title">CREATIVE WORKS</p>
                <h2 className="art-title">ART</h2>
                <p className="art-description">
                    A collection of my digital art, visual design, and creative work.
                </p>
            </div>

            <button className="art-dropdown-button" onClick={() => setIsOpen(!isOpen)}>
                <span className="art-dropdown-text">View Art Gallery</span>
                <span className="art-dropdown-icon">{isOpen ? "−" : "+"}</span>
            </button>

            {isOpen && (
                <div className="art-grid">
                    {artworks.map((artwork) => (
                        <button
                            className="art-card"
                            key={artwork.title}
                            onClick={() => openArt(artwork)}
                        >
                            <img className="art-image" src={artwork.image} alt={artwork.title} />

                            <div className="art-overlay">
                                <h3 className="art-name">{artwork.title}</h3>
                                <p className="art-type">{artwork.type}</p>
                                <p className="art-click-text">Click to enlarge</p>
                            </div>
                        </button>
                    ))}
                </div>
            )}

            {selectedArt && (
                <div className="art-modal" onClick={closeArt}>
                    <div className="art-modal-content" onClick={(event) => event.stopPropagation()}>
                        <button className="art-modal-close" onClick={closeArt}>
                            ×
                        </button>

                        <img
                            className="art-modal-image"
                            src={selectedArt.image}
                            alt={selectedArt.title}
                        />

                        <div className="art-modal-info">
                            <h3 className="art-modal-title">{selectedArt.title}</h3>
                            <p className="art-modal-type">{selectedArt.type}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Art;