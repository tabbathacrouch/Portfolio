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
            <div class="techstack">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/100px-HTML5_logo_and_wordmark.svg.png"
                height="100px"
                width="100px"
                alt=""
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/100px-CSS3_logo_and_wordmark.svg.png"
                height="100px"
                width="100px"
                alt=""
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                height="100px"
                width="100px"
                alt=""
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/100px-React-icon.svg.png"
                height="100px"
                width="150px"
                alt=""
              />
              <img
                src="https://user-images.githubusercontent.com/4060187/61057426-4e5a4600-a3c3-11e9-9114-630743e05814.png"
                height="100px"
                width="100px"
                alt=""
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Firebase_Logo.png"
                height="100px"
                width="200px"
                alt=""
              />
              <img
                src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-transparent-svg-vector-bie-supply-13.png"
                height="100px"
                width="150px"
                alt=""
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"
                height="100px"
                width="100px"
                alt=""
              />
              <img
                src="https://www.pngitem.com/pimgs/m/577-5779757_react-material-ui-logo-hd-png-download.png"
                height="100px"
                width="125px"
                alt=""
              />
              <img
                src="https://toppng.com/uploads/preview/bootstrap-featured-image-bootstrap-3-logo-11563293130teouf93qpu.png"
                height="100px"
                width="100px"
                alt=""
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
