import React from "react";
import githubLogo from "./assets/github logo.png";
import linkedInLogo from "./assets/linkedin logo.png";
import "./Contact.css";

function Contact() {
  return (
    <div id="contact">
      <h2 className="contact-title">Contact</h2>
      <div className="email">
        <a className="email-link" href="mailto:tabbathacrouch@gmail.com">
          tabbathacrouch@gmail.com
        </a>
      </div>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/tabbathacrouch/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="linkedin icon" src={linkedInLogo} />
        </a>
        <a
          href="https://github.com/tabbathacrouch"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="github icon" src={githubLogo} />
        </a>
      </div>
    </div>
  );
}

export default Contact;
