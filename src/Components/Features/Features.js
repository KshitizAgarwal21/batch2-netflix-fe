import React, { useEffect, useState } from "react";
import "./feat.css";
import tv from "../../assets/tv.png";
export default function Features(props) {
  const { order } = props.data;
  useEffect(() => {
    if (document.getElementById("vid")) {
      document.getElementById("vid").play();
    }
  }, []);
  return (
    <>
      {order && (
        <>
          <div className="feat">
            <div className="feat-text">
              <h2>{props.data.mainText}</h2>
              <h3>{props.data.subText}</h3>
            </div>
            <div className="feat-image">
              <img src={props.data.url}></img>
              <video
                className="video"
                id="vid"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                autoplay
                muted
              ></video>
            </div>
          </div>
        </>
      )}
      {!order && (
        <div className="feat">
          <div className="feat-image">
            <img src={props.data.url}></img>
          </div>
          <div className="feat-text">
            <h2>{props.data.mainText}</h2>
            <h3>{props.data.subText}</h3>
          </div>
        </div>
      )}
    </>
  );
}
