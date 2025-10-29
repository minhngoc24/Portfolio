import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ResumePopup.css";

const ResumePopup = ({ isOpen, onClose }) => {
  const form = useRef();
  const [status, setStatus] = useState("");

  if (!isOpen) return null; 

  const sendResume = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm("service_xxx", "template_resume", form.current, "public_key_xxx")
      .then(
        () => {
          setStatus("✅ Resume sent! Check your inbox.");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          setStatus("❌ Something went wrong. Try again.");
        }
      );
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <h2>Get My Resume</h2>
        <form ref={form} onSubmit={sendResume}>
          <input type="text" name="to_name" placeholder="Your Name" required />
          <input type="email" name="to_email" placeholder="Your Email" required />
          <button type="submit">Send Resume</button>
        </form>
        <p>{status}</p>
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>
      </div>
    </div>
  );
};

export default ResumePopup;
