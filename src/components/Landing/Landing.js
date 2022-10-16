/* ----- Landing.js ----- */
import React from "react";
import "./Landing.scss";
import { Link } from "react-router-dom";

//MUI
import Button from "@mui/material/Button";

function Landing() {
  return (
    <div className="landing">
      <div className="landing__container">
        <div className="landing__image">
          <img src="/images/uom_logo.png" alt="" />
        </div>
        <div className="landing__title">
          <p>University of Moratuwa - Degree Program Recommendation System</p>
        </div>
        <div className="landing__subtitle">
          <p>
            Expert System : Designed & Developed By | 194092V LIYANAGE
            K.L.D.N.N.
          </p>
        </div>
        <div className="landing__button">
          <Link to="/Q1">
            <Button variant="contained">Get Started</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
