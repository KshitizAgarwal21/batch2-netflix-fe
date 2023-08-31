import React from "react";
import "./main.css";
import ReactPlayer from "react-player";
import AuthHeader from "./AuthHeader";
export default function Main() {
  return (
    <div className="live-banner">
      <AuthHeader />
      <div className="player">
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=I5_BuHWAlnw"
          width="100%"
          height="100%"
          playing={true}
        />
      </div>
    </div>
  );
}
