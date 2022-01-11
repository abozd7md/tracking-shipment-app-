import React from "react";
import pic from "./profile.png";
import About from "./About";
import Interrest from "./Interrest";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Footer from "./Footer";
function MainContent() {
  return (
    <div className="container">
      <div className="card">
        <div className="image">
          <img src={pic} width="400px" />
        </div>
        <div className="info">
          <h2>Mohamed Nasser</h2>
          <p className="title">Job Title</p>
        </div>
        <div className="btns">
          <button className="default-btn">
            <EmailIcon />
            Email
          </button>
          <button className="btn-blue">
            <LinkedInIcon />
            LinkedIn
          </button>
        </div>
        <About />
        <Interrest />
        <Footer />
      </div>
    </div>
  );
}

export default MainContent;
