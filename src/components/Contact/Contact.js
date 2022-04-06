import React from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import githubLogo from "./assets/github logo.png";
import linkedInLogo from "./assets/linkedin logo.png";
import "./Contact.css";

function Contact() {
  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_serviceID,
        process.env.REACT_APP_templateID,
        e.target,
        process.env.REACT_APP_userID
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Message Sent Successfully",
          });
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Sorry! Something went wrong",
            text: error.text,
          });
        }
      );
    e.target.reset();
  };

  return (
    <div id="contact">
      <div className="contact-title">Contact</div>
      <div className="contact-form">
        <form className="form" onSubmit={handleContactFormSubmit}>
          <label>
            Name: <input type="text" name="name" required />
          </label>
          <label>
            Email: <input type="text" name="email" required />
          </label>
          <label>
            Message:{" "}
            <textarea
              type="text"
              name="message"
              required
              style={{ minHeight: "8em" }}
            />
          </label>
          <button type="submit" className="form-submit">
            Submit
          </button>
        </form>
      </div>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/tabbathacrouch/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt="linkedin icon"
            src={linkedInLogo}
            width="64px"
            height="55px"
          />
        </a>
        <a
          href="https://github.com/tabbathacrouch/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt="github icon"
            src={githubLogo}
            width="64px"
            height="64px"
            className="github"
          />
        </a>
      </div>
      <div className="email">
        <a className="email-link" href="mailto:tabbathacrouch@gmail.com">
          tabbathacrouch@gmail.com
        </a>
      </div>
    </div>
  );
}

export default Contact;
