import React from "react";


const Song = (currentSong) => {
    // console.log(currentSong)
    return (
        <div className="song-container">
            <img src={currentSong.song.artwork} alt="" />
            <h1>{currentSong.song.title}</h1>
            <h2>{currentSong.song.artist}</h2>
        </div>
    )
}
export default Song