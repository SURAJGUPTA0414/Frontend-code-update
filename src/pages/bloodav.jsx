import React, { useState } from "react";
import "../styles/bloodav.css";

const SearchBloodStock = () => {
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [bloodType, setBloodType] = useState("whole-blood");

  const districtsByState = {
    maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik", "Thane", "Aurangabad", "Solapur"],
    karnataka: ["Bengaluru Urban", "Mysuru", "Mangaluru", "Hubli", "Belagavi"],
    "uttar-pradesh": ["Lucknow", "Kanpur", "Varanasi", "Agra", "Meerut", "Allahabad"],
    "tamil-nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem"],
    gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar"],
  };

  const bloodav = () => {
    alert(
      `Searching Stock:\nState: ${state}\nDistrict: ${district}\nBlood Group: ${bloodGroup}\nBlood Type: ${bloodType}`
    );
  };

  return (
    <div className="container-av">
      <div className="header-av">Search Blood Stock</div>

      <div className="form-content">
        {/* State */}
        <div className="form-group">
          <label htmlFor="state">Select State</label>
          <select
            id="state"
            value={state}
            onChange={(e) => {
              setState(e.target.value);
              setDistrict(""); // reset district when state changes
            }}
          >
            <option value="">-- Select State --</option>
            {Object.keys(districtsByState).map((st) => (
              <option key={st} value={st}>
                {st.replace("-", " ").toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        {/* District */}
        <div className="form-group">
          <label htmlFor="district">Select District</label>
          <select
            id="district"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            disabled={!state}
          >
            <option value="">-- Select District --</option>
            {state &&
              districtsByState[state].map((dist) => (
                <option key={dist} value={dist}>
                  {dist}
                </option>
              ))}
          </select>
        </div>

        {/* Blood Group */}
        <div className="form-group">
          <label htmlFor="blood-group">Select Blood Group</label>
          <select
            id="blood-group"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
          >
            <option value="">-- Select Blood Group --</option>
            <option value="a+">A+</option>
            <option value="a-">A-</option>
            <option value="b+">B+</option>
            <option value="b-">B-</option>
            <option value="o+">O+</option>
            <option value="o-">O-</option>
            <option value="ab+">AB+</option>
            <option value="ab-">AB-</option>
          </select>
        </div>

        {/* Blood Type */}
        <div className="form-group">
          <label htmlFor="blood-type">Blood Type</label>
          <select
            id="blood-type"
            value={bloodType}
            onChange={(e) => setBloodType(e.target.value)}
          >
            <option value="whole-blood">Whole Blood</option>
            <option value="rbc">Red Blood Cells (RBC)</option>
            <option value="wbc">White Blood Cells (WBC)</option>
            <option value="platelets">Platelets</option>
            <option value="sdp">Single Donor Platelets (SDP)</option>
            <option value="rdp">Random Donor Platelets (RDP)</option>
            <option value="plasma">Plasma</option>
            <option value="ffp">Fresh Frozen Plasma (FFP)</option>
            <option value="cryo">Cryoprecipitate</option>
            <option value="granulocytes">Granulocytes</option>
          </select>
        </div>
      </div>

      {/* Search Button */}
      <div className="search-button-container">
        <button className="search-button" onClick={bloodav}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBloodStock;
