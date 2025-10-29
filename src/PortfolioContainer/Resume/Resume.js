import React, { useState } from "react";
import { FaGraduationCap, FaBriefcase, FaCode, FaProjectDiagram, FaPaintBrush } from "react-icons/fa";
import "./Resume.css";

export default function Resume() {
  const [activeSection, setActiveSection] = useState("education");

  const renderContent = () => {
    switch (activeSection) {
      case "education":
        return (
          <div className="resume-details">
            <div className="resume-item">
              <h3>Rhodes College</h3>
              <p>B.S. in Computer Science & Mathematics</p>
              <span className="year">2023–2027</span>
            </div>
            <div className="resume-item">
              <h3>VNU-HCM High School for the Gifted</h3>
              <p>Advanced Gifted Program – General</p>
              <span className="year">2020-2023</span>
            </div>
          </div>
        );

      case "work":
        return (
          <div className="resume-details">
            <div className="resume-item">
              <h3>Population Reference Bureau</h3>
              <p>Data Analyst Intern — SQL, SAS, Python</p>
              <span className="year">Aug 2025 - Present</span>
            </div>
            <div className="resume-item">
              <h3>RHOK-SAT CubeSat Fellowship</h3>
              <p>Software Engineer Intern— Reac, REST APIs, C++, Python, PostgreSQL</p>
              <span className="year">June 2025 - August 2025</span>
            </div>
            <div className="resume-item">
              <h3>Enrollment Data Service Department </h3>
              <p>Software Engineer — AES-GCM encryption, Azure Blob Storage, Key Vault</p>
              <span className="year">June 2025 - August 2025</span>
            </div>

            <div className="resume-item">
              <h3>Testmaster Online </h3>
              <p>Data Analyst Intern — Python</p>
              <span className="year">May 2024 – August 2024</span>
            </div>

            <div className="resume-item">
              <h3>Sao Khue IT & Solutions </h3>
              <p>Software Engineer Intern — Node.js, Express, HTML, CSS, JavaScript, Figma</p>
              <span className="year">May 2023 – August 2023</span>
            </div>
          </div>
        );

      case "skills":
        return (
          <div className="skills-list">
            <ul>
              <li>Java</li>
              <li>Python</li>
              <li>SQL / SAS</li>
              <li>C, C ++ </li>
              <li>HTML/ CSS/ JavaScript</li>
              <li>Kotlin (Android)</li>
              <li>React/ Node.js,</li>
              <li>Flask/ Pandas</li>
              <li> MongoDB/ Google Cloud/ Azure/ AWS</li>
            </ul>
          </div>
        );

      case "projects":
        return (
          <div className="resume-details">
            <div className="resume-item">
              <h3>Beezy – Focus Reminder Extension </h3>
              <p>React, Manifest V3, OpenAI API, Node.js + Express,  MongoDB Atlas</p>
            </div>

            <div className="resume-item">
              <h3>HealthPocket – Secured Medical Record</h3>
              <p> Kotlin, Node.js + Express, Azure, AES-GCM (Encryption)</p>
            </div>

            <div className="resume-item">
              <h3>Gardenly - Smart Gardening Assistant App</h3>
              <p> Java, Kotlin, Firebase (Authentication, Database, Firestore)</p>
            </div>

            <div className="resume-item">
              <h3>HopeGlow - Donation App</h3>
              <p> HTML, CSS, JavaScript, Python, Google Map API, Firebase</p>
            </div>

          </div>
        );

    }
  };

  return (
    <section className="resume-section">
      <h2 className="resume-title">Resume</h2>
      <p className="subtitle">My Formal Bio Details</p>
      <div className="underline"></div>

      <div className="resume-container">
        {/* Sidebar */}
        <div className="resume-sidebar">
          <button className={activeSection === "education" ? "active" : ""} onClick={() => setActiveSection("education")}>
            <FaGraduationCap /> Education
          </button>
          <button className={activeSection === "work" ? "active" : ""} onClick={() => setActiveSection("work")}>
            <FaBriefcase /> Work History
          </button>
          <button className={activeSection === "skills" ? "active" : ""} onClick={() => setActiveSection("skills")}>
            <FaCode /> Programming Skills
          </button>
          <button className={activeSection === "projects" ? "active" : ""} onClick={() => setActiveSection("projects")}>
            <FaProjectDiagram /> Projects
          </button>
          
        </div>

        {/* Right content */}
        <div className="resume-content">{renderContent()}</div>
      </div>
    </section>
  );
}
