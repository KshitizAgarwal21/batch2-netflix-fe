import React, { useEffect, useState } from "react";
import MiniPlayer from "../MiniPlayer/MiniPlayer";
import { Suspense } from "react";
import "./moviecarousel.css";
import axios from "axios";
const MiniPlayerLazy = React.lazy(() => import("../MiniPlayer/MiniPlayer"));
export default function MovieCarousel() {
  // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [movies, setMovies] = useState([]);
  const [pmovies, setpMovies] = useState([]);
  const getTopMovies = async () => {
    const res = await axios.get("http://localhost:8080/homepage/topMovies");

    console.log(res.data);
    setMovies(res.data);
  };
  const getPopularMovies = async () => {
    const res = await axios.get("http://localhost:8080/homepage/popularMovies");

    console.log(res.data);
    setpMovies(res.data);
  };

  useEffect(() => {
    getTopMovies();
    getPopularMovies();
  }, []);
  const numberOfCarousels = 10;
  return (
    <div className="movie-main">
      <div className="overlap" style={{ zIndex: numberOfCarousels }}>
        <div className="paddeddiv">
          {" "}
          <h1>Top English</h1>
          <div className="movie-carousel">
            {movies?.map((elem) => {
              return (
                <>
                  <div className="card">
                    <Suspense fallback={<div>Loading...</div>}>
                      <MiniPlayerLazy elem={elem} />
                    </Suspense>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <div className="overlap" style={{ zIndex: numberOfCarousels - 1 }}>
        <div className="paddeddiv">
          {" "}
          <h1>Popular Movies</h1>
          <div className="movie-carousel">
            {pmovies?.map((elem) => {
              return (
                <>
                  <div className="card">
                    <MiniPlayer elem={elem} />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      {/* <div className="overlap" style={{ zIndex: numberOfCarousels - 2 }}>
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
      </div> */}
    </div>
  );
}
