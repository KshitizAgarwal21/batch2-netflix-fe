import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setValue, updateDuration } from "../../redux/PlayMovie/slice";
import AuthHeader from "../Main/AuthHeader";

export default function PlayMovie() {
  const { id } = useParams();
  const [videoKey, setVideoKey] = useState();
  const [startFrom, setStartFrom] = useState();
  const playerRef = useRef();
  const [isReady, setIsReady] = React.useState(false);
  const [durationWatched, setDurationWatched] = useState(0);
  const value = useSelector((state) => state.value.data);
  const onReady = React.useCallback(() => {
    if (!isReady) {
      const timeToStart = startFrom;
      playerRef.current.seekTo(timeToStart, "seconds");
      setIsReady(true);
    }
  }, [isReady, startFrom]);

  const dispatch = useDispatch();

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
    // const res = await axios.post(
    //   "http://localhost:8080/currentlyviewing/addCurrent/",
    //   { id: parseInt(id), durationWatched: value }
    // );

    dispatch(updateDuration({ id: parseInt(id) }));
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
            dispatch(setValue(progress.playedSeconds));
          }}
          //  playing={play}
          //  muted={muted}
        />
      </div>
    </div>
  );
}
