import React from "react";

const LibrarySong = ({songs, song, setCurrentSong, setSongs}) => {
    const handleClick = () => {
        setCurrentSong(song)
        const updateSongStatus = songs.map((song1)=>{
            if(song1.id===song.id){
                return{
                    ...song1,
                    active:true,
                }
            }
            else{
                return{
                    ...song1,
                    active:false,
                }
            }
        })
        setSongs(updateSongStatus);
    };

    return (
        <div onClick={handleClick} className={`lib-song-container ${song.active===true ? 'active' : ''}`} >
            <img src={song.artwork} alt="" />
            <div className="lib-song-description">
                <h3>{song.title}</h3>
                <h5>{song.artist}</h5>
            </div>
        </div>
    );
};

export default LibrarySong;
