import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./ContactMe.css";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_q02b3zo",     
        "template_k5a015a",    
        form.current,
        "DuDeUmwPt8VOuRlHA"     
      )
      .then(
        (result) => {
          console.log("SUCCESS:", result.text);
          setStatus("success");
          e.target.reset();
        },
        (error) => {
          console.error("FAILED:", error.text);
          setStatus("error");
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="title">Contact Me</h2>
      <p className="subtitle">Let’s Keep in Touch</p>
      <div className="underline"></div>

      <div className="contact-container">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label>Name</label>
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />

          <label>Message</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit" className="send-btn">
            {status === "sending" ? "Sending..." : "Send ✈️"}
          </button>

          {status === "success" && (
            <p className="success-msg">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="error-msg">Something went wrong. Try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}
