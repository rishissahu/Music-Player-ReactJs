import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs,setCurrentSong }) => {
    return (
        <div className="library">
            <h1>Library</h1>
            <div className="library-songs">
                {songs.map((song) => (
                    <LibrarySong key={song.id} song={song} setCurrentSong={setCurrentSong} />
                ))}
            </div>
        </div>
    )
}

export default Library;