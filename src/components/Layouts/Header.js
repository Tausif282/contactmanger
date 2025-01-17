import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { branding } = props;
  return (
    <nav className="navbar  navbar-expand-sm bg-primary navbar-dark mb-3 py-3 ">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
      </div>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <i className="fas fa-home"></i>Home
          </Link>
        </li>
      </ul>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/contact/add" className="nav-link">
            <i className="fas fa-plus"></i>Add
          </Link>
        </li>
      </ul>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            <i className="fas fa-question"></i>About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

Header.defaultProps = {
  branding: "My App",
};

Header.propTypes = {
  branding: PropTypes.string.isRequired,
};

export default Header;
