import React from "react";
import "./Projects.css";
import faceDetection from "./assets/faceDetection.png";
import birthdayCard from "./assets/birthday card.png";
import robofriend from "./assets/robofriend.png";
import VanillaTilt from "vanilla-tilt";

const cardTilt = () => {
  VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 25,
    speed: 400,
  });
};

function Projects() {
  return (
    <div id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        <div className="row">
          <div className="project-text">
            <p className="project-title">Face Detection App</p>
            <div>
              <p className="project-info">
                Sign in or register a user and detect faces using a Clarifai
                API. Simply enter the url of an image and watch the API locate
                the face and display a blue rectangle.
              </p>
            </div>
            <a
              className="see-live"
              href="https://peaceful-plains-96573.herokuapp.com"
              target="_blank"
              rel="noreferrer"
            >
              See Live
            </a>
            <a
              className="source-code"
              href="https://github.com/tabbathacrouch/facerecognition_frontend"
              target="_blank"
              rel="noreferrer"
            >
              Source Code
            </a>
          </div>

          <div className="card" onMouseOver={cardTilt}>
            <a
              href="https://peaceful-plains-96573.herokuapp.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="project-image"
                src={faceDetection}
                alt="project 1"
              />
            </a>
          </div>
        </div>

        <div className="row">
          <div className="project-text">
            <p className="project-title">Birthday Cards</p>
            <div>
              <p className="project-info">
                I love sending birthday cards to friends and family members! I
                created an app that helps me keep track of all their birthdays,
                generates number facts using an API, and creates a birthday card
                using an printable template.
              </p>
            </div>
            <a
              className="see-live"
              href="https://peaceful-plains-96573.herokuapp.com"
              target="_blank"
              rel="noreferrer"
            >
              See Live
            </a>
            <a
              className="source-code"
              href="https://github.com/tabbathacrouch/facerecognition_frontend"
              target="_blank"
              rel="noreferrer"
            >
              Source Code
            </a>
          </div>
          <div className="card" onMouseOver={cardTilt}>
            <a
              href="https://peaceful-plains-96573.herokuapp.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="project-image"
                src={birthdayCard}
                alt="project 1"
              />
            </a>
          </div>
        </div>

        <div className="row">
          <div className="project-text">
            <p className="project-title">Robofriends</p>
            <div>
              <p className="project-info">
                Search through a list of robofriends.
              </p>
            </div>
            <a
              className="see-live"
              href="https://peaceful-plains-96573.herokuapp.com"
              target="_blank"
              rel="noreferrer"
            >
              See Live
            </a>
            <a
              className="source-code"
              href="https://github.com/tabbathacrouch/Robofriends"
              target="_blank"
              rel="noreferrer"
            >
              Source Code
            </a>
          </div>
          <div className="card" onMouseOver={cardTilt}>
            <a
              href="https://peaceful-plains-96573.herokuapp.com"
              target="_blank"
              rel="noreferrer"
            >
              <img className="project-image" src={robofriend} alt="project 1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
