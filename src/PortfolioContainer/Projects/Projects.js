import React, { useState } from "react";
import "./Projects.css";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: "beezy",
      title: "🐝 Beezy – Focus Reminder Extension",
      tech: "React, Manifest V3, OpenAI API, Node.js + Express, MongoDB Atlas",
      description:
        "Beezy is a Chrome extension that detects distractions and displays an animated bee reminding you to stay focused. Built with AI prompts and local storage tracking.",
      features: [
        {
          img: "projects/beezy/beezy-feature1.png",
          caption: "Bee appears when visiting distracting sites",
        },
        {
          img: "projects/beezy/beezy-feature2.png",
          caption: "Focus timer & productivity dashboard",
        },
        {
          img: "projects/beezy/beezy-feature3.png",
          caption: "Customizable focus and break intervals",
        },
      ],
    },
    {
      id: "healthpocket",
      title: "🏥 HealthPocket – Secured Medical Record",
      tech: "Kotlin, Node.js + Express, Azure, AES-GCM Encryption",
      description:
        "An Android app for securely managing encrypted electronic health records with OTP and Face ID authentication.",
      features: [
        {
          img: "projects/healthpocket/healthpocket-feature1.png",
          caption: "Azure OTP verification for login",
        },
        {
          img: "projects/healthpocket/healthpocket-feature2.png",
          caption: "Role-based access for doctor",
        },
        {
          img: "projects/healthpocket/healthpocket-feature3.png",
          caption: "Role-based access for patient",
        },
      ],
    },
    {
      id: "hopegrow",
      title: "✨ HopeGlow – Donation Matching App",
      tech: "HTML, CSS, JavaScript, Python, Google Maps API, Firebase",
      description:
        "A web app connecting donors and charities with distance-based search and AI item classification for faster matching.",
      features: [
        {
          img: "projects/hopeglow/hopeglow-feature1.png",
          caption: "AI-generated item description for donations",
        },
        {
          img: "projects/hopeglow/hopeglow-feature2.png",
          caption: "Show maps when enter address",
        },
        {
          img: "projects/hopeglow/hopeglow-feature3.png",
          caption: "Sort items based on distance",
        },
      ],
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Highlighted Projects</h2>
      <p className="projects-subtitle">Things I’ve Built & Designed</p>
      <div className="divider"></div>

      <div className="project-list">
        {projects.map((p) => (
          <div
            key={p.id}
            className={`project-card ${activeProject === p.id ? "open" : ""}`}
            id={p.id}
          >
            <h3
              className="project-name"
              onClick={() =>
                setActiveProject(activeProject === p.id ? null : p.id)
              }
            >
              {p.title}
            </h3>
            <p className="project-tech">{p.tech}</p>

            {activeProject === p.id && (
              <div className="project-detail">
                <p className="project-desc">{p.description}</p>
                <div className="feature-gallery">
                  {p.features.map((f, i) => (
                    <div key={i} className="feature-item">
                      <img src={f.img} alt={f.caption} />
                      <p className="feature-caption">{f.caption}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
