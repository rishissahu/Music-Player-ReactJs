import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {

  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0
  })

  // Play and pause the song 
  const audioRef = useRef(null);
  const handlePlayPause = () => {
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true)
    } else {
      audioRef.current.pause();
      setIsPlaying(false)
    }
  };

  // Updateing the current time and setting the duration of song
  const updateTime = (e) => {
    setSongInfo({
      ...songInfo,
      currentTime: e.target.currentTime,
      duration: e.target.duration
    })
  }
  // format time
  const formatTime = (time) => {
    var minutes = Math.floor(time / 60);
    var seconds = Math.floor(time % 60);

    // Format the time as "MM:SS" (padded with leading zeros)
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  }
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value
    setSongInfo({
      ...songInfo,
      currentTime: e.target.value
    })
  }

  return (
    <div className="player">
      <div className="time-controller">
        <p>{formatTime(songInfo.currentTime)}</p>

        <input
          min={0}
          max={songInfo.duration}
          value={songInfo.currentTime}
          onChange={dragHandler}
          type="range" />

        <p>{formatTime(songInfo.duration)}</p>
      </div>
      <div className="player-controller">
        <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon className="play" onClick={handlePlayPause} size="2x" icon={isPlaying ? faPause : faPlay} />
        <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight} />
      </div>
      <audio onTimeUpdate={updateTime} onLoadedMetadata={updateTime} ref={audioRef} src={currentSong?.url} />
    </div>
  )
}
export default Player 