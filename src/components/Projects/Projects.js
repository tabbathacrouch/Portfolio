import React from "react";
import CardTilt from "./CardTilt.js";
import "./Projects.css";
import onlineTest from "./assets/online-test.png";
import garden from "./assets/garden.jpeg";
import numberChart from "./assets/numberChart.jpeg";
import trivia from "./assets/trivia.jpeg";

function Projects() {
  return (
    <div id="projects">
      <div className="projects-sectionTitle">Projects</div>
      <div className="projects-container">
        <div className="row">
          <div className="project-text">
            <div className="project-title">
              Math Test Generator (UNDER CONSTRUCTION)
            </div>
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
            <div className="project-title">Gardening (UNDER CONSTRUCTION)</div>
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
            <div className="project-title">Trivia (UNDER CONSTRUCTION)</div>
            <div>
              <div className="project-info">
                Select a category, fetch trivia questions and answers from{" "}
                <a href="https://opentdb.com/api_config.php">
                  Open Trivia Database
                </a>
                , and see a live score. Grab your friends and play along
                together!
              </div>
            </div>
            <a
              className="see-live"
              href="https://trivia-67600.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              See Live
            </a>
            <a
              className="source-code"
              href="https://github.com/tabbathacrouch/trivia"
              target="_blank"
              rel="noreferrer"
            >
              Source Code
            </a>
          </div>
          <div className="card" onMouseOver={CardTilt}>
            <a
              href="https://trivia-67600.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="project-image"
                src={trivia}
                alt="project 1"
                width="192px"
                height="153px"
              />
            </a>
          </div>
        </div>

        <div className="row">
          <div className="project-text">
            <div className="project-title">Number Chart</div>
            <div>
              <div className="project-info">
                A single page react app that utilizes the useState hook to
                manage the state of an interactive number chart. Select the size
                (1-20, 1-50, or 1-100) and a color to illustrate patterns.
                Additionally, use the 'multiples' buttons to reveal the
                multiples of 2, 5, or 10.
              </div>
            </div>
            <a
              className="see-live"
              href="https://number-chart-59060.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              See Live
            </a>
            <a
              className="source-code"
              href="https://github.com/tabbathacrouch/number-chart"
              target="_blank"
              rel="noreferrer"
            >
              Source Code
            </a>
          </div>
          <div className="card" onMouseOver={CardTilt}>
            <a
              href="https://number-chart-59060.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="project-image"
                src={numberChart}
                alt="number chart"
                width="152px"
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
