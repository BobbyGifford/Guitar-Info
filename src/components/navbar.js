import React from "react";
import { Link } from "react-router-dom";

const navbar = props => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link to="/home" style={{ color: "white" }} className="navbar-brand">
          Guitar Info
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          <li className="nav-itm active">
              <Link to="/listOf/neck" className="nav-link">
                Neck
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/listOf/body" className="nav-link">
              Body
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
