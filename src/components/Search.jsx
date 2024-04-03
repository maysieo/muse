import { useState } from 'react';
import axios from 'axios';

function Search() {

const [searchArtist, setSearchArtist] = useState('');
const [artwork, setArtwork] = useState([]);

function getSearchValue (e) {
    setSearchArtist(e.target.value)
  }

function sendSearchValue () {
  axios.get(`http://localhost:3000/artist?artist=${searchArtist}`)
    .then((response) => {
      console.log(response.data);
      setArtwork(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
}

  return (
    <div>
      <input type="text" placeholder="Find artists to follow" onChange={(e) => getSearchValue(e)} />
      <button onClick={sendSearchValue}>Search</button>
    </div>
  )
}

export default Search;
