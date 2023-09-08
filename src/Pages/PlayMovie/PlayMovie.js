import React from "react";
import ReactPlayer from "react-player";
import AuthHeader from "../Main/AuthHeader";

export default function PlayMovie() {
  return (
    <div style={{ color: "#fff" }}>
      <AuthHeader />
      <div className="selected-movie">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=WCrmkX35Xks"
          playing={true}
          width="100%"
          height="100%"
          controls={true}
          //  playing={play}
          //  muted={muted}
        />
      </div>
    </div>
  );
}
