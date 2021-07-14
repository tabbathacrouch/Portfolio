import React from "react";
import githubLogo from "./assets/github logo.png";
import linkedInLogo from "./assets/linkedin logo.png";
import "./Contact.css";

function Contact() {
  return (
    <div id="contact">
      <div className="contact-title">Contact</div>
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
          <img
            alt="linkedin icon"
            src={linkedInLogo}
            width="64px"
            height="55px"
          />
        </a>
        <a
          href="https://github.com/tabbathacrouch"
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
    </div>
  );
}

export default Contact;
