import React from "react";

function Dashboardsidebar({ activeItem, setActiveComponent }) {
  return (
    <>
      <div className="sidebar">
        <div className="logo">Blood Bank</div>
        <nav>
          <ul>
            <li>
              <a
                className={activeItem === "home" ? "active" : ""}
                onClick={() => setActiveComponent("home")}
              >
                <span className="material-icons">home</span>{" "}
                <span>Blood Stock</span>
              </a>
            </li>
            <li>
              <a
                className={activeItem === "donor" ? "active" : ""}
                onClick={() => setActiveComponent("donor")}
              >
                <span className="material-icons">person</span>{" "}
                <span>Donor</span>
              </a>
            </li>
            <li>
              <a
                className={activeItem === "donations" ? "active" : ""}
                onClick={() => setActiveComponent("donations")}
              >
                <span className="material-icons">local_hospital</span>
                <span>Donations</span>
              </a>
            </li>
            <li>
              <a
                className={activeItem === "requests" ? "active" : ""}
                onClick={() => setActiveComponent("bloodRequests")}
              >
                <span className="material-icons">bloodtype</span>
                <span>Blood Requests</span>
              </a>
            </li>
            <li>
              <a
                className={activeItem === "history" ? "active" : ""}
                onClick={() => setActiveComponent("requestHistory")}
              >
                <span className="material-icons">history</span>
                <span>Request History</span>
              </a>
            </li>
            {/* <li>
              <a
                href="#"
                className={activeItem === "stock" ? "active" : ""}
                onClick={()=> navigate("/donation")}
              >
                <span className="material-icons">inventory</span>
                <span>Blood Stock</span>
              </a>
            </li> */}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Dashboardsidebar;
