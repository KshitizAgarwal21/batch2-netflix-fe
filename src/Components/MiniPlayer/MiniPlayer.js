import React, { useState } from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";

let mytimeout;
export default function MiniPlayer(props) {
  const [play, setPlay] = useState(false);
  const [muted, setMuted] = useState(true);
  const navigate = useNavigate();
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
  const navigateToPlayer = () => {
    navigate(`/play/${props.elem.id}`);
  };
  return (
    <div
      onMouseEnter={handleMouseOver}
      onMouseLeave={pause}
      className="hoverclass"
      onClick={navigateToPlayer}
    >
      <ReactPlayer
        className="mini-player"
        url={props.elem.url}
        width="100%"
        height="100%"
        playing={play}
        muted={muted}
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
        <p>{props.elem.adult ? "Adult" : "UA"} Certfied</p>
        <div className="mini-details">
          <span>{props.elem.title} o</span>
          <span> {props.elem.release_date} o</span>
          <span> {props.elem.vote_average}</span>
        </div>
      </div>
    </div>
  );
}
