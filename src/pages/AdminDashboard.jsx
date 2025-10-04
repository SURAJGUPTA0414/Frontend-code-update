import React, { useState } from "react";
import Adminlogin from "./Adminlogin";
import { useNavigate } from "react-router-dom";
import Dashboardsidebar from "../components/Dashboardsidebar";
import DashboardHome from "../components/DashboardHome";
import Donor from "./Donor";
import Donation from "./Donation";
import BloodRequests from "./Bloodrequest";
import Requesthistory from "./Requesthistory";

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
  const isAdmin = true; // Replace with isAdminLoggedIn() in production
  const [activeComponent, setActiveComponent] = useState("home");
  const navigate = useNavigate();

  const renderComponent = () => {
    switch (activeComponent) {
      case "home":
        return <DashboardHome />;
      case "donor":
        return <Donor />;
      case "donations":
        return <Donation />;
      case "bloodRequests":
        return <BloodRequests />;
      case "requestHistory":
        return <Requesthistory />;
      default:
        return <DashboardHome />;
    }
  };


  if (!isAdmin) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Access denied</h2>
        <p>You must be logged in as an admin to view this page.</p>
        <Adminlogin />
      </div>
    );
  }

  return (
    <div className="admin-dashboard-root">
      <Dashboardsidebar
        activeItem={activeComponent}
        navigate={navigate}
        setActiveComponent={setActiveComponent}
      />
      {renderComponent()}
    </div>
  );
}

export default AdminDashboard;