import React from "react";
import { Link } from "react-scroll";
import resume from "./assets/Tabbatha_Crouch_Resume.pdf";
import profile from "./assets/profile.jpg";
import cert1 from "./assets/Udemy Certificate_Course 1.pdf";
import cert2 from "./assets/Udemy Certificate_Course 2.pdf";
import "./About.css";
import TechstackCarousel from "./TechstackCarousel";

function About() {
  return (
    <div className="about">
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
            Self-taught full stack developer with a soft spot for front end. My
            previous experience as a Mathematics content developer makes me a
            stickler for documentation. My software journey started in
            JavaScript and React, and has recently shifted to TypeScript and
            React-Native. I am active on{" "}
            <a
              href="https://exercism.org/profiles/tabbathacrouch/"
              target="_blank"
              rel="noreferrer"
            >
              Exercism
            </a>{" "}
            and have completed a couple of Udemy courses:{" "}
            <a href={cert1} target="_blank" rel="noreferrer">
              The Complete Web Developer in 2021: Zero to Mastery
            </a>{" "}
            and{" "}
            <a href={cert2} target="_blank" rel="noreferrer">
              The Complete Junior to Senior Web Developer Roadmap (2021)
            </a>{" "}
            courses as taught by{" "}
            <a
              href="https://www.udemy.com/user/andrei-neagoie/"
              target="_blank"
              rel="noreferrer"
            >
              Andrei Neagoie
            </a>
            .
          </div>
        </div>
        <TechstackCarousel />
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
  );
}

export default About;
