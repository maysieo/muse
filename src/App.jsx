import './App.css'
import Search from './components/Search.jsx'
import MuseumList from './components/MuseumList.jsx'
import { useState } from 'react';
import axios from 'axios';

function App() {

const [searchArtist, setSearchArtist] = useState('');
const [artwork, setArtwork] = useState([]);
const [metWork, setMetWork] = useState([]);
const [momaWork, setMomaWork] = useState([]);
const [whitneyWork, setWhitneyWork] = useState([]);
const [searchingDisplay, setSearchingDisplay] = useState(false);


function getSearchValue (e) {
  setSearchArtist(e.target.value)
}

function sendSearchValue () {
  setSearchingDisplay(true);
  axios.get('http://localhost:3000/artist', {
    params: {
      name: searchArtist
    }
  })
  .then((response) => {
    setArtwork(response.data);
    setMetWork(response.data.filter((art) => art.Repository === 'Metropolitan Museum of Art, New York, NY'));
    setMomaWork(response.data.filter((art) => art.Repository === 'Museum of Modern Art'));
    setWhitneyWork(response.data.filter((art) => art.Repository === 'Whitney Museum of American Art'));
  })
  .catch((error) => {
    console.log(error);
  })
}

  return (
    <>
      <h1>
        muse
      </h1>
      <Search getSearchValue={getSearchValue} sendSearchValue={sendSearchValue} searchArtist={searchArtist}/>
      {searchingDisplay ? <h2>{searchArtist} appears at...</h2> : null}
      <MuseumList metWork={metWork} momaWork={momaWork} whitneyWork={whitneyWork}/>
    </>
  )
}

export default App
