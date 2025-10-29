import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";
import "./Profile.css";

export default function Profile() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleSendResume = (e) => {
    e.preventDefault();
  
    const templateParams = {
      to_email: email,
      email: email
    };
  
    emailjs
      .send(
        "service_q02b3zo",   
        "template_5id4ahe", 
        templateParams,
        "DuDeUmwPt8VOuRlHA"   
      )
      .then(
        () => {
          setSent(true);
          setShowForm(false);
          setEmail("");
          alert("✅ Resume has been sent to your email!");
        },
        (err) => {
          console.error("FAILED...", err);
          alert("❌ Failed to send resume.");
        }
      );
  };
  

  return (
    <section className="home-container">
      <div className="home-content">
        {/* LEFT SIDE */}
        <div className="home-left">
          <div className="social-links">
            <a
              href="https://github.com/minhngoc24"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/minhngocle"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>

          <h1>
            Hello, I’m <span className="highlight">Minh Ngoc Le</span>
          </h1>
          <h3>Full-Stack Developer | Data & AI Enthusiast</h3>
          <p>
            Passionate about building scalable applications with secure backend
            systems and engaging front-end experiences.
          </p>

          <div className="home-buttons">
            <a href="#contact" className="btn hire-btn">
              Hire Me
            </a>
            <button
              className="btn resume-btn"
              onClick={() => setShowForm(!showForm)}
            >
              Get Resume
            </button>
          </div>

          {showForm && (
            <form onSubmit={handleSendResume} className="resume-form">
              <input
                type="email"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn send-btn">
                Send
              </button>
            </form>
          )}

          {sent && <p className="success-msg">Resume sent successfully!</p>}
        </div>

        {/* RIGHT SIDE */}
        <div className="home-right">
          <div className="profile-pic-container">
            <img
              src="profile-pic.jpg"
              alt="Minh Ngoc Le"
              className="profile-pic"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
