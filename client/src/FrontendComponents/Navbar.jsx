import "../styles/nav.css";
import { Link } from "react-router-dom";
import logo from "./logo.png";
function Navbar() {
  return (
    <nav className="Navbar">
      <div className="logo">
        <img
          src={logo}
          alt="logo"
        />
        <h1>MetaDrive</h1>
      </div>

      <div className="navigation">
        <button className=" nav-btn features">Features</button>
        <button className=" nav-btn working">How it Works</button>
        <button className=" nav-btn about">About</button>
        <Link to="/backend" className="nav-btn launch-btn">
          Launch App
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
