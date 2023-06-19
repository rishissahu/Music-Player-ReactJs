import './styles/app.scss'
import Player from './components/Player';
import Song from './components/song';
import { useRef, useState } from 'react';
import data from './util'
import Library from './components/Library';


function App() {
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong]=useState(songs[3])
  const [isPlaying, setIsPlaying]=useState(false);

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
  return (
    <div className="App">
      <Song song={currentSong}/>
      <Player audioRef={audioRef} handlePlayPause={handlePlayPause} songs={songs}currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} setCurrentSong={setCurrentSong} />
      <Library audioRef={audioRef} handlePlayPause={handlePlayPause} songs={songs} currentSong={currentSong} setCurrentSong={setCurrentSong} setSongs={setSongs}/>
    </div>
  );
}

export default App; 
