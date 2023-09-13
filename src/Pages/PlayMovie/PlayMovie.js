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
  const [durationWatched, setDurationWatched] = useState(0);
  let finalDuration;
  const onReady = React.useCallback(() => {
    if (!isReady) {
      const timeToStart = startFrom;
      playerRef.current.seekTo(timeToStart, "seconds");
      setIsReady(true);
    }
  }, [isReady, startFrom]);
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

  useEffect(() => {
    return () => {
      updateLiveData();
    };
  }, []);
  const updateLiveData = async () => {
    const res = await axios.post(
      "http://localhost:8080/currentlyviewing/addCurrent/",
      { id: parseInt(id), durationWatched: "100" }
    );
  };
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
          onProgress={(progress) => {
            setDurationWatched(progress.playedSeconds);
          }}
          //  playing={play}
          //  muted={muted}
        />
      </div>
    </div>
  );
}
