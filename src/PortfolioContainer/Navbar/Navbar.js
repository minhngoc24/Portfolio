import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Hàm cuộn mượt
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setOpen(false);
  };

  // Theo dõi vị trí scroll để biết section nào đang hiển thị
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "resume", "projects", "contact"];
      let current = "home";

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <h3 className="logo">Minh Ngoc Le</h3>
        <FaBars className="menu-toggle" onClick={() => setOpen(!open)} />
        <ul className={`nav-links ${open ? "show" : ""}`}>
          {["home", "about", "resume", "projects", "contact"].map((id) => (
            <li
              key={id}
              className={activeSection === id ? "active" : ""}
              onClick={() => scrollToSection(id)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
