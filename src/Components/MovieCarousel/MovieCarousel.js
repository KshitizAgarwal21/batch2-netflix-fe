import React, { useEffect, useState } from "react";
import MiniPlayer from "../MiniPlayer/MiniPlayer";

import "./moviecarousel.css";
export default function MovieCarousel() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="movie-main">
      <div className="paddeddiv">
        {" "}
        <h1>Top English</h1>
        <div className="movie-carousel">
          {arr.map((elem) => {
            return (
              <>
                <div className="card">
                  <MiniPlayer />
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="paddeddiv">
        {" "}
        <h1>Top English</h1>
        <div className="movie-carousel">
          {arr.map((elem) => {
            return (
              <>
                <div className="card">
                  <MiniPlayer />
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="paddeddiv">
        {" "}
        <h1>Top English</h1>
        <div className="movie-carousel">
          {arr.map((elem) => {
            return (
              <>
                <div className="card">
                  <MiniPlayer />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
