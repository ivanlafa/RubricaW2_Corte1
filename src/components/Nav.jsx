import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <div className="container-fluid ">
        <Link className="navbar-brand"  to="/">
          Rubrica primer corte
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul
            className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style= { { "--bs-scroll-height" : "100px", } }
          >
            <li className="nav-item">
              <Link to="/" className="nav-link active">Overview</Link>
            </li>
            <li className="nav-item">
              <Link to="/content" className="nav-link active">Content</Link>
            </li>
            <li className="nav-item">
              <Link to="/create" className="nav-link active">Create</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
