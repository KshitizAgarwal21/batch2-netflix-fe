import React, { useEffect, useState } from "react";
import "./main.css";
import ReactPlayer from "react-player";
import AuthHeader from "./AuthHeader";
import MovieCarousel from "../../Components/MovieCarousel/MovieCarousel";
import axios from "axios";
export default function Main() {
  const [opacity, setOpacity] = useState(0.1);
  const [bannerMovie, setBannerMovie] = useState({});
  const handleScroll = () => {
    const scrollPosition = window.scrollY; // => scroll position
    if (scrollPosition > 10) {
      setOpacity(0.7);
    } else {
      setOpacity(0.1);
    }
  };

  const getBannerMovie = async () => {
    const res = await axios.get("http://localhost:8080/homepage/bannermovie");

    setBannerMovie(res.data.result);
  };
  useEffect(() => {
    getBannerMovie();
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="live-banner">
        <AuthHeader opacity={opacity} />
        <div className="player">
          <ReactPlayer
            className="react-player"
            url={bannerMovie?.url}
            width="100%"
            height="100%"
            playing={true}
          />
        </div>
        <div className="live-hero-text">
          <h1>{bannerMovie?.title}</h1>
          <p>{bannerMovie?.description}</p>

          <div className="live-buttons">
            <button className="live-play">Play {">"}</button>
            <button className="live-info">More Info {"i"}</button>
          </div>
        </div>
      </div>
      <div
        style={{
          color: "#fff",
          marginTop: "-270px",
          position: "absolute",
          width: "100%",
        }}
      >
        {" "}
        <MovieCarousel />
      </div>
    </>
  );
}
