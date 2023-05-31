import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs,setCurrentSong ,setSongs}) => {
    return (
        <div className="library">
            <h1>Library</h1>
            <div className="library-songs">
                {songs.map((song) => (
                    <LibrarySong key={song.id} song={song} setCurrentSong={setCurrentSong} songs={songs} setSongs={setSongs} />
                ))}
            </div>
        </div>
    )
}

export default Library;