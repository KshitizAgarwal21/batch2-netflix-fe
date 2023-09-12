import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import AuthHeader from "../Main/AuthHeader";

export default function PlayMovie() {
  const { id } = useParams();
  const [videoKey, setVideoKey] = useState();
  const [startFrom, setStartFrom] = useState();
  const playerRef = useRef();
  const [isReady, setIsReady] = React.useState(false);

  const onReady = React.useCallback(() => {
    if (!isReady) {
      console.log(startFrom);
      const timeToStart = 100;
      playerRef.current.seekTo(timeToStart, "seconds");
      setIsReady(true);
    }
  }, [isReady]);
  const getMovieDetails = async () => {
    const res = await axios.post("http://localhost:8080/playmovie/getmovie", {
      id: id,
    });

    console.log(res.data);
    setVideoKey(res.data.key);
    setStartFrom(parseFloat(res.data.duration));
    // playerRef.current?.seekTo(30, "seconds");
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return (
    <div style={{ color: "#fff" }}>
      <AuthHeader />
      <div className="selected-movie">
        <ReactPlayer
          ref={playerRef}
          onReady={onReady}
          url={`https://www.youtube.com/watch?v=${videoKey}`}
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
