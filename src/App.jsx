import './App.css'
import Search from './components/Search.jsx'
import { useState } from 'react';
import axios from 'axios';

function App() {

const [searchArtist, setSearchArtist] = useState('');
const [artwork, setArtwork] = useState([]);
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
    </>
  )
}

export default App
