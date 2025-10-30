import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./AboutMe.css";

export default function About() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleSendResume = (e) => {
    e.preventDefault();

    const templateParams = {
      to_email: email, 
      email: email,    
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
          alert("Resume has been sent to your email!");
        },
        (err) => {
          console.error("FAILED...", err);
          alert("Failed to send resume. Check console for details!");
        }
      );
  };

  return (
    <section className="about-section" id="about">
      <h2 className="about-title">About Me</h2>
      <p className="about-subtitle">Who I Am</p>
      <div className="divider"></div>

      <div className="about-content">
      
        <div className="about-left">
          <img src="Aboutme.JPG" alt="Minh Ngoc Le" className="about-img" />
        </div>

       
        <div className="about-right">
          <p className="about-text">
            Hi! I’m <strong>Minh Ngoc Le</strong> —I am a junior at Rhodes College, currently pursuing a major in Computer Science. With a passion for technology and problem-solving, I am eager to deepen my understanding of software development, data structures, and algorithms. My academic journey so far has equipped me with a solid foundation in computer science principles, and I am excited to continue expanding my skills through coursework, projects, and internships.
            I am always open to connecting with professionals in the field and exploring opportunities that will allow me to apply my knowledge and grow as a computer scientist. Feel free to reach out if you'd like to connect or discuss potential collaborations.
          </p>

          <div className="about-buttons">
            <a href="#contact" className="btn hire-btn">
              Contact Me
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
      </div>
    </section>
  );
}
