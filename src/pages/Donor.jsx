import React from "react";

const Donor = () => {
  return (
    <div className="page-content">
      <h2 style={{ textAlign: "center", color: "#c62828" }}>Donor List</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Blood Group</th>
            <th>Contact</th>
            <th>Last Donation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rahul Sharma</td>
            <td>O+</td>
            <td>9876543210</td>
            <td>12-Aug-2025</td>
          </tr>
          <tr>
            <td>Priya Mehta</td>
            <td>A-</td>
            <td>9123456780</td>
            <td>05-Jul-2025</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Donor;