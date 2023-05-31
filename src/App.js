import './styles/app.scss'
import Player from './components/Player';
import Song from './components/song';
import { useState } from 'react';
import data from './util'
import Library from './components/Library';


function App() {
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong]=useState(songs[3])
  const [isPlaying, setIsPlaying]=useState(false);
  return (
    <div className="App">
      <Song song={currentSong}/>
      <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} setCurrentSong={setCurrentSong} />
      <Library songs={songs} currentSong={currentSong} setCurrentSong={setCurrentSong} setSongs={setSongs}/>
    </div>
  );
}

export default App; 
