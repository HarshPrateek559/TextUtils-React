import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <>
      {/* <div className="container"> */}
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <b>{props.title}</b>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-3">
                <a className="nav-link" aria-current="page" href="home">
                  TextArea
                </a>
              </li>
              {/* <Link className="nav-link" aria-current="page" to="/">
                  TextArea
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.aboutUs}
                </Link>
              </li> */}
            </ul>

            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input "
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggle}
                style={{ cursor: "pointer" }}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {props.text}
              </label>
            </div>
          </div>
        </div>
      </nav>
      {/* </div> */}
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutUs: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "TextUtility",
  aboutUs: "AboutUS",
};
