import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          CurrentNews
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/business">
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/entertainment" target="_blank">
                Entertainment
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/health " target="_blank">
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/science" target="_blank">
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sports" target="_blank">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/technology" target="_blank">
                Technology
              </Link>
            </li>
          </ul>
          <button className="btn btn-light btn-lg float-right" type="submit">
            Dark mode
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
