import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/Navbar.css';
import logoImg from "../assets/logo.jpg";

const Navbar = () => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    if (storedUser) setUsername(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername(null);
    window.location.href = "/"; // redirect to homepage
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow-sm sticky-top"
      style={{ background: "linear-gradient(90deg, #8B0000, #B22222)" }}
    >
      <div className="container">
        {/* Logo & Brand */}
        <a className="navbar-brand d-flex align-items-center" href="/Homemain">
          <img
            src={logoImg}
            alt="logo"
            width="70"
            className="me-2 rounded-circle border border-light"
          />
          <span className="fw-bold text-white">
            Blood Donation Camp{" "}
            <span style={{ color: "#FFD700" }}>Mr.Roxvjdj5</span>
          </span>
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            {/* Home Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="homeDropdown"
                role="button"
                data-bs-toggle="dropdown"
              >
                Home
              </a>
              <ul className="dropdown-menu shadow">
                <li>
                  <a className="dropdown-item" href="/Homemain">Home</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">About Blood Donation Camp</a>
                </li>
                <li>
                  <a className="dropdown-item" href="/aboutus">About Us</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Gallery</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Video Gallery</a>
                </li>
              </ul>
            </li>

            {/* Looking for Blood */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="bloodDropdown"
                role="button"
                data-bs-toggle="dropdown"
              >
                Looking For Blood
              </a>
              <ul className="dropdown-menu shadow">
                <li>
                  <a className="dropdown-item" href="/boodavilable">Blood Availability</a>
                </li>
                <li>
                  <a className="dropdown-item" href="/booddonation">Donate Blood</a>
                </li>
              </ul>
            </li>

            {/* Contact */}
            <li className="nav-item">
              <a className="nav-link" href="/contactus">Contact</a>
            </li>

            {/* ✅ Dynamic Account Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="accountDropdown"
                role="button"
                data-bs-toggle="dropdown"
              >
                {username ? username : "Account"}
              </a>
              <ul className="dropdown-menu shadow">
                {username ? (
                  <>
                    <li>
                      <a className="dropdown-item" href="#">Profile</a>
                    </li>
                    <li>
                      <button
                        className="dropdown-item text-danger"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <a className="dropdown-item" href="/Login">Login</a>
                    </li>
                     <li>
                      <a className="dropdown-item" href="/Adminlogin">Admin Login</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/Registration">Registration</a>
                    </li>
                  </>
                )}
              </ul>
            </li>
          </ul>

          {/* Search */}
          <form className="d-flex ms-lg-3 mt-2 mt-lg-0">
            <input
              className="form-control me-2 border-danger"
              type="search"
              placeholder="Search"
              style={{ minWidth: "150px" }}
            />
            <button className="btn btn-warning fw-bold" type="submit">
              Search
            </button>
          </form>

          {/* Donate */}
          <li className="nav-item p-2">
            <a
              className="btn btn-warning fw-bold"
              href="/Razorpayhandler"
            >
              Give Money, Give Life
            </a>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
