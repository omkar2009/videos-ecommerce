import React from "react";
import "./Dashboard.css"; 

const Dashboard = ({ videoSource, buttonText }) => {
  return (
    <div className="dashboard-container">
      <video width="400" height="300" controls>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button className="custom-button">{buttonText}</button>
    </div>
  );
};

export default Dashboard;
