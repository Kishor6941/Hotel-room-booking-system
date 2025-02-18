import React from "react";
import "./LandingPage.scss";
import { Link } from "react-router-dom";
import GradientButton from "../GradientButton/GradientButton";
const LandingPage = () => {
  return (
    <div className="row landing justify-content-center">
      <div
        className="col-md-9 my-auto"
        style={{ borderRight: "8px solid white" }}
      >
        <div className="text-center">
          <h2
            className="animated-text"
            style={{ color: "white", fontSize: "50px" }}
          >
            Welcome to Room Booking System
          </h2>
          <p style={{ color: "white", fontSize: "30px" }}>Book your room now</p>

          <Link to="/home">
            <GradientButton>Get Started</GradientButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
