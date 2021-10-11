import React from "react";
import { Link } from "react-scroll";
import resume from "./assets/Tabbatha Crouch_Resume.pdf";
import profile from "./assets/profile.jpg";
import cert1 from "./assets/Udemy Certificate_Course 1.pdf";
import cert2 from "./assets/Udemy Certificate_Course 2.pdf";
import "./About.css";
import html from "./assets/html_logo.png";
import css from "./assets/css_logo.png";
import javascript from "./assets/JavaScript-logo.png";
import reactLogo from "./assets/React_Logo.png";
import formikLogo from "./assets/formik_logo.png";
import firebaseLogo from "./assets/Firebase_Logo.png";
import mySQL_logo from "./assets/mySQL_logo.png";
import postgresLogo from "./assets/postgres_logo.png";
import materialui_logo from "./assets/material-logo.png";
import bootstrapLogo from "./assets/Bootstrap_logo.png";

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
            Former Mathematics educator and content developer turned software
            developer open to opportunities in web development. I recently
            completed Udemy's{" "}
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
          <div className="techstack_container">
            <div className="techstack">
              <div className="techstack_image">
                <img src={html} height="100px" alt="HTML5" />
              </div>
              <div className="techstack_image">
                <img src={css} height="100px" alt="CSS3" />
              </div>
              <div className="techstack_image">
                <img src={javascript} height="100px" alt="JavaScript" />
              </div>
              <div className="techstack_image">
                <img src={reactLogo} height="100px" alt="React" />
              </div>
              <div className="techstack_image">
                <img src={formikLogo} height="100px" alt="Formik" />
              </div>
              <div className="techstack_image">
                <img src={firebaseLogo} height="100px" alt="Firebase" />
              </div>
              <div className="techstack_image">
                <img src={mySQL_logo} height="100px" alt="MySQL" />
              </div>
              <div className="techstack_image">
                <img src={postgresLogo} height="100px" alt="Postgres" />
              </div>
              <div className="techstack_image">
                <img src={materialui_logo} height="100px" alt="Material-ui" />
              </div>
              <div className="techstack_image">
                <img src={bootstrapLogo} height="100px" alt="Bootstrap" />
              </div>
            </div>
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
