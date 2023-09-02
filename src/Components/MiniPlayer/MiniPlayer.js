import React, { useState } from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ReactPlayer from "react-player";
let mytimeout;
export default function MiniPlayer() {
  const [play, setPlay] = useState(false);
  const [muted, setMuted] = useState(true);
  const handleMouseOver = () => {
    mytimeout = setTimeout(() => {
      setPlay(true);
    }, 1500);
  };
  const unmute = () => {
    setMuted(true);
  };
  const pause = () => {
    clearTimeout(mytimeout);
    setPlay(false);
  };
  return (
    <div onMouseEnter={handleMouseOver} onMouseLeave={pause}>
      <ReactPlayer
        className="mini-player"
        url="https://www.youtube.com/watch?v=WCrmkX35Xks"
        width="100%"
        height="100%"
        playing={play}
        muted={muted}
        volume
      />
      {/* <video
        className="mini-player"
        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
        muted
      ></video> */}
      <div className="mini-player-actions">
        <div className="buttons">
          <PlayCircleOutlineIcon className="mini-play" />
          <AddCircleOutlineIcon className="mini-add" />
          <ThumbUpOffAltIcon className="mini-like" />

          <span onClick={() => setMuted(false)}>Unmute</span>
        </div>
        <p>UA Certfied</p>
        <div className="mini-details">
          <span>Movie Name o</span>
          <span> Release date o</span>
          <span> Rating</span>
        </div>
      </div>
    </div>
  );
}
