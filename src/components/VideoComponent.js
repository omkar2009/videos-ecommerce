import React from "react";
import Dashboard from "../components/Dashboard"; // Adjust the path based on your file structure
import "./VideoComponent.css";

const VideoComponent = () => {
  return (
    <div className="main-container">
    <div className="video-container">
      <Dashboard videoSource="../components/Assets/video1.mp4" buttonText="Click to Buy" />
      <Dashboard videoSource="../components/Assets/video2.mp4" buttonText="Click to Buy" />
      <Dashboard videoSource="../components/Assets/video3.mp4" buttonText="Click to Buy" />
      <Dashboard videoSource="../components/Assets/video4.mp4" buttonText="Click to Buy" />
      <Dashboard videoSource="../components/Assets/video5.mp4" buttonText="Click to Buy" />
      <Dashboard videoSource="../components/Assets/video6.mp4" buttonText="Click to Buy" />
      <Dashboard videoSource="../components/Assets/video7.mp4" buttonText="Click to Buy" />
      <Dashboard videoSource="../components/Assets/video8.mp4" buttonText="Click to Buy" />
      <Dashboard videoSource="../components/Assets/video9.mp4" buttonText="Click to Buy" />   
    </div>
    </div>
  );
};

export default VideoComponent;
