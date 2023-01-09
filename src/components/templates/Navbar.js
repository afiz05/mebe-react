import React from "react";
import { Routes, Route, Link } from "react-router-dom";
//import NotFound from "./NotFound";
import Pen from "../Pen/Pen";
import Dashboard from "../Dashboard/Dashboard";
import Login from "../Auth/Login";
import DataApbn from "../APBN/DataApbn";

var Navbar = () => {
  return (
    <div>
      <div className="container-fluid">
        <nav
          className="navbar navbar-expand-lg navbar-light bg-success fixed-top"
          style={{ height: 45 }}
        >
          <Link to="/" className="navbar-brand mx-3 text-white">
            Sintesa v3 (beta)
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  as={Link}
                  to="/Dashboard"
                  className="nav-item nav-link text-white"
                >
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/APBN/" className="nav-item nav-link text-white">
                  APBN
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/TKDD/" className="nav-item nav-link text-white">
                  TKDD
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Data
                </a>

                <ul
                  className="dropdown-menu bg-success"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link
                      to="/Inquiry/"
                      className="nav-item nav-link text-white"
                    >
                      Inquiry
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Weekly/"
                      className="nav-item nav-link text-white"
                    >
                      Weekly Report
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-divider"></a>
                  </li>
                  <li>
                    <Link to="/KFR/" className="nav-item nav-link text-white">
                      KFR
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tematik
                </a>

                <ul
                  className="dropdown-menu bg-success"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link to="/Pen/" className="nav-item nav-link text-white">
                      Data PEN
                    </Link>
                  </li>
                  <li>
                    <Link to="/DF/" className="nav-item nav-link text-white">
                      Dak Fisik
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-divider"></a>
                  </li>
                  <li>
                    <Link
                      to="/DanaDesa/"
                      className="nav-item nav-link text-white"
                    >
                      Dana Desa
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <ul className="navbar-nav mx-2">
            <Link to="/Login/" className="nav-link text-white">
              Login
            </Link>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route exact path="/Dashboard" element={<Dashboard />} />
        <Route exact path="/Pen" element={<Pen />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/APBN" element={<DataApbn />} />
      </Routes>
    </div>
  );
};

export default Navbar;
