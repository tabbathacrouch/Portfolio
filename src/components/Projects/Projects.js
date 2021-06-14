import React from "react";
import CardTilt from "./CardTilt.js";
import "./Projects.css";
import onlineTest from "./assets/online-test.png";
import faceDetection from "./assets/faceDetection.png";
import robot from "./assets/robot.png";
import mathOperations from "./assets/keys.jpg";

function Projects() {
  return (
    <div id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        <div className="row">
          <div className="project-text">
            <p className="project-title">Math Test Generator</p>
            <div>
              <p className="project-info">
                Create a test with multiple choice, short answer, or check box
                style questions.&nbsp;&nbsp;Once a test is created, share the
                link and test code.&nbsp;&nbsp;View reponses and metrics from
                each test you create in your personalized
                dashboard.&nbsp;&nbsp;Register as a user today!
              </p>
            </div>
            <a
              className="see-live"
              href="https://math-test-maker.herokuapp.com"
              target="_blank"
              rel="noreferrer"
            >
              See Live
            </a>
            <a
              className="source-code"
              href="https://github.com/tabbathacrouch/Math-Test-Maker"
              target="_blank"
              rel="noreferrer"
            >
              Source Code
            </a>
          </div>

          <div className="card" onMouseOver={CardTilt}>
            <a
              href="https://math-test-maker.herokuapp.com"
              target="_blank"
              rel="noreferrer"
            >
              <img className="project-image" src={onlineTest} alt="project 1" />
            </a>
          </div>
        </div>

        <div className="row">
          <div className="project-text">
            <p className="project-title">Math is Beautiful</p>
            <div>
              <p className="project-info">
                After spending more than 4 years creating mathematics content
                for an ed-tech company, I decided to create a free math resource
                similar to the{" "}
                <a
                  href="https://www.mathsisfun.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  mathisfun.com
                </a>{" "}
                website.&nbsp;&nbsp;This resource contains an interactive number
                chart, embedded Phet&trade; simulations, and a searchable
                glossary.
              </p>
            </div>
            <a
              className="see-live"
              href="https://ancient-garden-59060.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              See Live
            </a>
            <a
              className="source-code"
              href="https://github.com/tabbathacrouch/Math-is-Beautiful"
              target="_blank"
              rel="noreferrer"
            >
              Source Code
            </a>
          </div>
          <div className="card" onMouseOver={CardTilt}>
            <a
              href="https://ancient-garden-59060.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="project-image"
                src={mathOperations}
                alt="project 1"
              />
            </a>
          </div>
        </div>

        <div className="row">
          <div className="project-text">
            <p className="project-title">RoboFriends</p>
            <div>
              <p className="project-info">
                A react app that utilizes redux. It features a search box, an
                API call to{" "}
                <a
                  href="https://robohash.org/15?size=200x200"
                  target="_blank"
                  rel="noreferrer"
                >
                  robohash.org
                </a>
                , and a simple fetch of{" "}
                <a
                  href="https://jsonplaceholder.typicode.com/users"
                  target="_blank"
                  rel="noreferrer"
                >
                  user data
                </a>
                . This project is from Udemy's "
                <a
                  href="https://www.udemy.com/course/the-complete-junior-to-senior-web-developer-roadmap/"
                  target="_blank"
                  rel="noreferrer"
                >
                  The Complete Junior to Senior Web Developer Roadmap (2021)
                </a>
                " course, created by Andrei Neagoie.
              </p>
            </div>
            <a
              className="see-live"
              href="https://tabbathacrouch.github.io/Robofriends-React-Redux/"
              target="_blank"
              rel="noreferrer"
            >
              See Live
            </a>
            <a
              className="source-code"
              href="https://github.com/tabbathacrouch/Robofriends-React-Redux"
              target="_blank"
              rel="noreferrer"
            >
              Source Code
            </a>
          </div>
          <div className="card" onMouseOver={CardTilt}>
            <a
              href="https://peaceful-plains-96573.herokuapp.com"
              target="_blank"
              rel="noreferrer"
            >
              <img className="project-image" src={robot} alt="project 1" />
            </a>
          </div>
        </div>

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
          <div className="card" onMouseOver={CardTilt}>
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
      </div>
    </div>
  );
}

export default Projects;
