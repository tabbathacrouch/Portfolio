import React from "react";
import CardTilt from "./CardTilt.js";
import "./Projects.css";
import onlineTest from "./assets/online-test.png";
import faceDetection from "./assets/faceDetection.png";
import mathOperations from "./assets/keys.jpg";
import garden from "./assets/garden.jpeg";

function Projects() {
  return (
    <div id="projects">
      <div className="projects-sectionTitle">Projects</div>
      <div className="projects-container">
        <div className="row">
          <div className="project-text">
            <div className="project-title">Math Test Generator</div>
            <div>
              <div className="project-info">
                Create a test with multiple choice, short answer, or check box
                style questions. Once a test is created, share the link and test
                code. View reponses and metrics from each test you create in
                your personalized dashboard. Register as a user today! <br />
                All of the forms in this React app use MaterialUI, Formik, and
                Yup (form validation).
              </div>
            </div>
            <a
              className="see-live"
              href="https://math-test-maker.herokuapp.com/register"
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
              href="https://math-test-maker.herokuapp.com/register"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="project-image"
                src={onlineTest}
                alt="project 1"
                width="192px"
                height="192px"
              />
            </a>
          </div>
        </div>

        <div className="row">
          <div className="project-text">
            <div className="project-title">Gardening</div>
            <div>
              <div className="project-info">
                This React app utilizes Bootstrap (v5.0) and fetches information
                from two APIs. You can input a zipcode and determine your
                hardiness zone as well as learn what types of plants thrive in
                your area. Or you can upload one or more photos of a plant you
                wish to identify.
              </div>
            </div>
            <a
              className="see-live"
              href="https://gardening-react-app.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              See Live
            </a>
            <a
              className="source-code"
              href="https://github.com/tabbathacrouch/Gardening"
              target="_blank"
              rel="noreferrer"
            >
              Source Code
            </a>
          </div>

          <div className="card" onMouseOver={CardTilt}>
            <a
              href="https://gardening-react-app.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="project-image"
                src={garden}
                alt="project 1"
                width="192px"
                height="192px"
              />
            </a>
          </div>
        </div>

        <div className="row">
          <div className="project-text">
            <div className="project-title">Math is Beautiful</div>
            <div>
              <div className="project-info">
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
                website. This resource contains an interactive number chart,
                embedded Phet&trade; simulations, and a searchable glossary.
              </div>
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
                width="192px"
                height="192px"
              />
            </a>
          </div>
        </div>

        <div className="row">
          <div className="project-text">
            <div className="project-title">Face Detection App</div>
            <div>
              <div className="project-info">
                Sign in or register a user and detect faces in an image using
                the{" "}
                <a
                  href="https://www.clarifai.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Clarifai
                </a>{" "}
                API. Simply enter the url of an image and watch the API detect
                the faces.
              </div>
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
                width="192px"
                height="192px"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
