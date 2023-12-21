import react from "react";
import "./Nav.css";
import logo from "../../Images/logo.png";

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-links">
        <ul>
          <li className="nav-item">Home</li>
          <li className="nav-item">Experience</li>
          <li className="nav-item">Projects</li>
          <li className="nav-item">Resume</li>
        </ul>
      </div>
    </div>
  );
}
