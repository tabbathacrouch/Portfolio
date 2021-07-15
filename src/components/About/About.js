import React from "react";
import { Link } from "react-scroll";
import resume from "./assets/Tabbatha_Crouch_Resume.pdf";
import profile from "./assets/profile.jpg";
import "./About.css";

function About() {
  return (
    <div id="about">
      <div className="section-title">About me</div>
      <div className="about-container">
        <img
          className="profile-image"
          width="450px"
          height="300px"
          id="profile"
          src={profile}
          alt="Profile"
        />
        <div className="about-info">
          <div className="about-info-text">
            I recently completed Udemy's The Complete Web Developer in 2021:
            Zero to Mastery. <br />
            Check out my projects below!
          </div>
          <div className="buttons">
            <Link to="projects" activeClass="active" spy={true} smooth={true}>
              <button type="button" className="about-btn">
                View Projects
              </button>
            </Link>
            <a href={resume} target="_blank" rel="noreferrer">
              <button type="submit" className="about-btn">
                View Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
