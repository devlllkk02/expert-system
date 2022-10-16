/* ----- Navbar.js ----- */
import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__image">
          <Link to="/">
            <img src="/images/uom_logo.png" alt="" />
          </Link>
        </div>
        <div className="navbar__title">
          <p>University of Moratuwa - Degree Program Recommendation System</p>
        </div>
        <div className="navbar__name">
          <p>194092V LIYANAGE K.L.D.N.N.</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
