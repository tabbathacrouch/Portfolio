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
            . <br />
            <div className="techstack">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
                height="100px"
                width="100px"
                alt="HTML5"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/726px-CSS3_logo_and_wordmark.svg.png"
                height="100px"
                width="70px"
                alt="CSS3"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                height="100px"
                width="100px"
                alt="JavaScript"
              />
              <img
                src="https://luminfire.com/wp-content/uploads/2017/12/React_Logo_596x200.png"
                height="100px"
                width="298px"
                alt="React"
              />
              <img
                src="https://user-images.githubusercontent.com/4060187/61057426-4e5a4600-a3c3-11e9-9114-630743e05814.png"
                height="100px"
                width="116px"
                alt="Formik"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Firebase_Logo.png"
                height="100px"
                width="290px"
                alt="Firebase"
              />
              <img
                src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-transparent-svg-vector-bie-supply-13.png"
                height="100px"
                width="150px"
                alt="MySQL"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"
                height="100px"
                width="100px"
                alt="Postgres"
              />
              <img
                src="https://material-ui.com/static/logo.png"
                height="100px"
                width="100px"
                alt="Material-ui"
              />
              <img
                src="https://commons.bmstu.wiki/images/b/b8/Bootstrap.png"
                height="100px"
                width="100px"
                alt="Bootstrap"
              />
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
