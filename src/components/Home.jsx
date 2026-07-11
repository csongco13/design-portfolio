import "./Home.css"

function Home() {
    return (
        <section className="home">
            <div className="sun-left"></div>
            <div className="sun-right"></div>

            <div className="home-container">
                <h1 className="title">
                    PORTFOLIO
                </h1>
            </div>

            <div className="tag-row">
                <span className="tag tag-uiux">UI/UX</span>
                <span className="tag tag-swdev">SOFTWARE DEVELOPMENT</span>
                <span className="tag tag-prodmgmt">PRODUCT MANAGEMENT</span>
            </div>

            <div className="intro-container">
                <p className="title">HELLO, I'M</p>

                <h2 className="name">
                    COURTNEY<br/>SONGCO
                </h2>

                <h3 className="subtitle">CREATING USER-FRIENDLY DIGITAL EXPERIENCES</h3>

                <p className="description">
                    Hi! I specialize in UI/UX research and product design through research
                    and creative problem solving.
                </p>

                <div className="buttons">
                    <button className="location-button">RIVERSIDE, CA</button>
                    <button className="availability-button">AVAILABLE FOR PROJECTS</button>
                </div>
            </div>

            <div className="image-card">
                <div className="image-placeholder">
                    <p className="text">
                        SCROLL<br/>DOWN<br/>TO SEE<br/>MY WORKS
                    </p>
                </div>
                

                <div className="stamp-card">
                    <p className="text">CREATE</p>
                    <p className="text">★</p>
                    <p className="text">RIGHT</p>
                </div>

                <div className="circle-badge">
                    <p className="text">DESIGN WITH A PURPOSE</p>
                </div>
            </div>
        </section>
    );
}
export default Home;