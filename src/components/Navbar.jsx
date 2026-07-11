import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            {/* LEFT SIDE NAVBAR */}
            <div className="left">
                <p className="left-text">UI/UX</p>
                <p className="left-text">DESIGNER</p>
            </div>
            {/* CENTER NAVBAR */}
            <div className="center">
                <span className="navbar-line"></span>
            </div>
            {/* RIGHT SIDE NAVBAR */}
            <div className="right">
                <p className="right-text">SOFTWARE</p>
                <p className="right-text">DEVELOPER</p>
            </div>
        </nav>
    );
}
export default Navbar;