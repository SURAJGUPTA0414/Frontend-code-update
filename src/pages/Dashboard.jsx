import React, { useState } from "react";
import Login from "./Login";

function isAdminLoggedIn() {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && (user.role === "admin" || user.isAdmin === true)) return true;
  } catch (e) {
    console.log(e);
  }
  return localStorage.getItem("isAdmin") === "true";
}

function AdminDashboard() {
  const isAdmin = true;
  const [activeItem, setActiveItem] = useState("home");

  if (!isAdmin) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Access denied</h2>
        <p>You must be logged in as an admin to view this page.</p>
        <Login />
      </div>
    );
  }

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setActiveItem(id);
  };

  return (
    <div className="admin-dashboard-root">
      <div className="sidebar">
        <div className="logo">Blood Bank</div>
        <nav>
          <ul>
            <li>
              <a
                href="#"
                className={activeItem === "home" ? "active" : ""}
                onClick={(e) => handleNavClick(e, "home")}
              >
                <span className="material-icons">home</span> <span>Home</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={activeItem === "donor" ? "active" : ""}
                onClick={(e) => handleNavClick(e, "donor")}
              >
                <span className="material-icons">person</span>{" "}
                <span>Donor</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={activeItem === "patient" ? "active" : ""}
                onClick={(e) => handleNavClick(e, "patient")}
              >
                <span className="material-icons">people</span>{" "}
                <span>Patient</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={activeItem === "donations" ? "active" : ""}
                onClick={(e) => handleNavClick(e, "donations")}
              >
                <span className="material-icons">local_hospital</span>
                <span>Donations</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={activeItem === "requests" ? "active" : ""}
                onClick={(e) => handleNavClick(e, "requests")}
              >
                <span className="material-icons">bloodtype</span>
                <span>Blood Requests</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={activeItem === "history" ? "active" : ""}
                onClick={(e) => handleNavClick(e, "history")}
              >
                <span className="material-icons">history</span>
                <span>Request History</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={activeItem === "stock" ? "active" : ""}
                onClick={(e) => handleNavClick(e, "stock")}
              >
                <span className="material-icons">inventory</span>
                <span>Blood Stock</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <main className="main-content">
        <section className="dashboard-grid">
          {/* Blood Types */}
          <div className="card blood-type">
            <h2>
              A+ <span className="material-icons blood-icon">water_drop</span>
            </h2>
            <p>1</p>
          </div>
          <div className="card blood-type">
            <h2>
              B+ <span className="material-icons blood-icon">water_drop</span>
            </h2>
            <p>2</p>
          </div>
          <div className="card blood-type">
            <h2>
              O+ <span className="material-icons blood-icon">water_drop</span>
            </h2>
            <p>37</p>
          </div>
          <div className="card blood-type">
            <h2>
              AB+ <span className="material-icons blood-icon">water_drop</span>
            </h2>
            <p>8</p>
          </div>
          <div className="card blood-type">
            <h2>
              A- <span className="material-icons blood-icon">water_drop</span>
            </h2>
            <p>7</p>
          </div>
          <div className="card blood-type">
            <h2>
              B- <span className="material-icons blood-icon">water_drop</span>
            </h2>
            <p>1</p>
          </div>
          <div className="card blood-type">
            <h2>
              O- <span className="material-icons blood-icon">water_drop</span>
            </h2>
            <p>10</p>
          </div>
          <div className="card blood-type">
            <h2>
              AB- <span className="material-icons blood-icon">water_drop</span>
            </h2>
            <p>32</p>
          </div>

          {/* Stats Cards */}
          <div className="card stats-card">
            <h3>
              Total Donors <span className="material-icons">people_alt</span>
            </h3>
            <p>3</p>
          </div>
          <div className="card stats-card">
            <h3>
              Total Requests <span className="material-icons">autorenew</span>
            </h3>
            <p>3</p>
          </div>
          <div className="card stats-card">
            <h3>
              Approved Requests
              <span className="material-icons">check_circle_outline</span>
            </h3>
            <p>2</p>
          </div>
          <div className="card stats-card">
            <h3>
              Total Blood Units
              <span className="material-icons blood-icon">water_drop</span>
            </h3>
            <p>98</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AdminDashboard;