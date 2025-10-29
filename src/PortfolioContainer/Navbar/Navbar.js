import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <h3 className="logo">Minh Ngoc Le</h3>
        <FaBars className="menu-toggle" onClick={() => setOpen(!open)} />
        <ul className={`nav-links ${open ? "show" : ""}`}>
          <li onClick={() => scrollToSection("home")}>Home</li>
          <li onClick={() => scrollToSection("about")}>About</li>
          <li onClick={() => scrollToSection("resume")}>Resume</li>
          
          <li onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>
      </div>
    </nav>
  );
}
