import './styles/app.scss'
import Player from './components/Player';
import Song from './components/song';
import { useState } from 'react';
import data from './util'

function App() {
  const [songs, setSongs] = useState(data())
  let count=1;
  const [currentSong, setCurrentSong]=useState(songs[count])
  return (
    <div className="App">
      <Song song={currentSong}/>
      <Player song={currentSong} count={count}/>
    </div>
  );
}

export default App;
