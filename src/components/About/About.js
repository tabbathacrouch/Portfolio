import React from "react";
import { Link } from "react-scroll";
import resume from "./assets/Tabbatha Crouch_Resume.pdf";
import profile from "./assets/profile.jpg";
import cert1 from "./assets/Udemy Certificate_Course 1.pdf";
import cert2 from "./assets/Udemy Certificate_Course 2.pdf";
import "./About.css";

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
            Former Mathematics educator and content developer --> now a
            self-taught developer seeking a full-time role in front-end web
            development. I recently completed Udemy's{" "}
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
            . <br />
            Languages, technologies, databases, and libaries that I am familiar
            with include (not limited to): HTML5, CSS, JavaScript, Reactjs,
            Formik, Yup, Firebase, SQL, Postgres, MaterialUI, and Bootstrap.
            <br />
            <br />
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
