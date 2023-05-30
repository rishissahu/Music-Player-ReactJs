import React from "react";


const LibrarySong = ({ song }) => {
    return (
        <div className="lib-song-container">
            <img src={song.artwork} alt="" />
            <div className="lib-song-description">
                <h3>{song.title}</h3>
                <h5>{song.artist}</h5>
            </div>
        </div>
    )
}
export default LibrarySong