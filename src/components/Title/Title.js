import React from "react";
import { Link } from "react-scroll";
import profile from "./profile.jpeg";
import { MdOutlineEmail } from "react-icons/md";
import { IoInformationCircleOutline } from "react-icons/io5";
import "./Title.css";

function Title() {
  return (
    <div id="title">
      <div className="title-container">
        <div className="title-profile-img">
          <img src={profile} alt="profile - tabbatha crouch" />
        </div>
        <div className="title-sectionTitle">
          Hey there, my name is Tabbatha Crouch.
          <br />
          I'm a Software Developer.
        </div>
      </div>
      <div className="buttons-title">
        <Link to="about" activeClass="active" spy={true} smooth={true}>
          <button type="button" className="title-btn">
            <IoInformationCircleOutline style={{ paddingRight: "2vmin" }} />
            Learn more
          </button>
        </Link>
        <Link to="contact" activeClass="active" spy={true} smooth={true}>
          <button type="button" className="title-btn">
            <MdOutlineEmail style={{ paddingRight: "2vmin" }} />
            Contact me
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Title;
