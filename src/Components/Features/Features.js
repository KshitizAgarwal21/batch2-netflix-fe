import React, { useEffect, useState } from "react";
import "./feat.css";
import tv from "../../assets/tv.png";
export default function Features(props) {
  const { order } = props.data;

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
                className={props.data.size ? "video " : "small-video "}
                src={props.data.vidUrl}
                autoPlay
                muted
                loop
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
