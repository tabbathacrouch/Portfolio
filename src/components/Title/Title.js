import React from "react";
import { Link } from "react-scroll";
import "./Title.css";

function Title() {
  return (
    <div id="title">
      <div>
        <h1 className="hero-title">
          Hey there, my name is Tabbatha Crouch.
          <br />
          I'm a Software Developer.
        </h1>
        <div className="buttons-title">
          <Link to="about" activeClass="active" spy={true} smooth={true}>
            <button type="button" className="title-btn">
              Learn more
            </button>
          </Link>
          <Link to="contact" activeClass="active" spy={true} smooth={true}>
            <button type="button" className="title-btn">
              Contact me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Title;
