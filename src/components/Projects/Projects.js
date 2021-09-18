import React from "react";
import CardTilt from "./CardTilt.js";
import "./Projects.css";
import onlineTest from "./assets/online-test.png";
import barChart from "./assets/barChart.png";
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

            <div className="project-info">
              Create a test with multiple choice, short answer, or check box
              style questions. Once a test is created, share the link and test
              code. View reponses and metrics from each test you create in your
              personalized dashboard. Register as a user today! <br />
              All of the forms in this React app use MaterialUI, Formik, and Yup
              (form validation).
            </div>
            <div className="project-buttons">
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
                alt="online test icon"
                width="192px"
                height="192px"
              />
            </a>
          </div>
        </div>

        <div className="row">
          <div className="project-text">
            <div className="project-title">Trivia (UNDER CONSTRUCTION)</div>

            <div className="project-info">
              Select a category, fetch trivia questions and answers from{" "}
              <a href="https://opentdb.com/api_config.php">
                Open Trivia Database
              </a>
              , and see a live score. Grab your friends and play along together!
            </div>
            <div className="project-buttons">
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
                alt="trivia night icon"
                width="192px"
                height="153px"
              />
            </a>
          </div>
        </div>

        <div className="row">
          <div className="project-text">
            <div className="project-title">React Chart Generator</div>

            <div className="project-info">
              This React app utilizes three npm packages:{" "}
              <a
                href="https://www.npmjs.com/package/react-chartjs-2"
                target="_blank"
                rel="noreferrer"
              >
                react-chartjs-2
              </a>
              ,{" "}
              <a
                href="https://www.npmjs.com/package/chart.js?activeTab=readme"
                target="_blank"
                rel="noreferrer"
              >
                chart.js
              </a>
              , and{" "}
              <a
                href="https://www.npmjs.com/package/file-saver"
                target="_blank"
                rel="noreferrer"
              >
                file-saver
              </a>
              . Create a custom vertical or horizontal bar chart, pie chart, or
              line chart and save the canvas as a .png file.
            </div>
            <div className="project-buttons">
              <a
                className="see-live"
                href="https://react-chart-generator.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                See Live
              </a>
              <a
                className="source-code"
                href="https://github.com/tabbathacrouch/react-chart-generator"
                target="_blank"
                rel="noreferrer"
              >
                Source Code
              </a>
            </div>
          </div>

          <div className="card" onMouseOver={CardTilt}>
            <a
              href="https://react-chart-generator.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="project-image"
                src={barChart}
                alt="bar chart icon"
                width="192px"
                height="192px"
              />
            </a>
          </div>
        </div>

        <div className="row">
          <div className="project-text">
            <div className="project-title">Number Chart</div>

            <div className="project-info">
              A single page react app that utilizes the useState hook to manage
              the state of an interactive number chart. Select the size (1-20,
              1-50, or 1-100) and a color to illustrate patterns. Additionally,
              use the 'multiples' buttons to reveal the multiples of 2, 5, or
              10.
            </div>
            <div className="project-buttons">
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
                alt="number chart icon"
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
