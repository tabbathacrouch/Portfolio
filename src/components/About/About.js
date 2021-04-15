import React from "react";
import { Link } from "react-scroll";
import resume from "./assets/Tabbatha_Crouch_Resume.pdf";
import profile from './assets/profile.jpg';
import "./About.css";

function About() {
  return (
    <div id="about" className="about">
      <h2 className="section-title">About me</h2>
      <div className="about-section">
        <div className="about-info" >
          <img  className='profile-image' id="profile" src={profile} alt="Profile"/>
          <div className="about-info-text">
            <p>
              I recently completed Udemy's The Complete Web Developer in 2021:
              Zero to Mastery. <br />
              Check out my projects below!
            </p>
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
