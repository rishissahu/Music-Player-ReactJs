import React, { useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faPlay } from "@fortawesome/free-solid-svg-icons";

const Player = (currentSong, count) => {
    const audioRef = useRef(null);
    const handlePlayPause = () => {
        console.log(audioRef.current)
        if (audioRef.current.paused) {
          audioRef.current.play().catch(error => console.log(error));
        } else {
          audioRef.current.pause();
        }
      };     

    return (
        <div className="player">
            <div className="time-controller">
                <p>start time</p>
                <input type="range" />
                <p>end time</p>
            </div>
            <div className="player-controller">
                <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon className="play" onClick={handlePlayPause} size="2x" icon={faPlay} />
                <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight} />
            </div>
                <audio ref={audioRef} src={currentSong?.song.url} />
           
        </div>
    )
}
export default Player 