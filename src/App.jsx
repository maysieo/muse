import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import ArtworkPage from './components/ArtworkPage.jsx'
import LogIn from './components/LogIn.jsx'
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [searchArtist, setSearchArtist] = useState('');
  const [artwork, setArtwork] = useState([]);
  const [metWork, setMetWork] = useState([]);
  const [metWorkNoPics, setMetWorkNoPics] = useState([]);
  const [momaWork, setMomaWork] = useState([]);
  const [momaWorkNoPics, setMomaWorkNoPics] = useState([]);
  const [whitneyWork, setWhitneyWork] = useState([]);
  const [searchingDisplay, setSearchingDisplay] = useState(false);
  const [artworkPage, setArtworkPage] = useState(false);
  const [currentArtwork, setCurrentArtwork] = useState({});


  const getSearchValue = (e) => {
    setSearchArtist(e.target.value)
  }

  const getCurrentArtwork = (thisPiece) => {
    setCurrentArtwork(thisPiece);
  }

  const sendSearchValue = () => {
    setSearchingDisplay(true);
    axios.get('http://localhost:3000/artist', {
      params: {
        name: searchArtist
      }
    })
    .then((response) => {
      setArtwork(response.data);
      setMetWork(response.data.filter((art) => art.Repository === 'Metropolitan Museum of Art, New York, NY' && art.ImageURL));
      setMetWorkNoPics(response.data.filter((art) => art.Repository === 'Metropolitan Museum of Art, New York, NY' && (!art.ImageURL) || art.ImageURL === ''));
      setMomaWork(response.data.filter((art) => art.Repository === 'Museum of Modern Art' && art.ImageURL));
      setMomaWorkNoPics(response.data.filter((art) => art.Repository === 'Museum of Modern Art' && !art.ImageURL));
      setWhitneyWork(response.data.filter((art) => art.Repository === 'Whitney Museum of American Art'));
    })
    .catch((error) => {
      console.log(error);
    })
  }

  return (
    <>
      <div className="w-full">
      <LogIn />
      </div>
      <div>
        <h1 className="text-4XL pb-6">
          muse
        </h1>
        <Router>
          <Routes>
            <Route path="/artwork" element={<ArtworkPage currentArtwork={currentArtwork} />} />
            <Route path="/" element={<HomePage getSearchValue={getSearchValue} sendSearchValue={sendSearchValue} searchArtist={searchArtist} searchingDisplay={searchingDisplay} metWork={metWork} momaWork={momaWork} whitneyWork={whitneyWork} getCurrentArtwork={getCurrentArtwork} momaWorkNoPics={momaWorkNoPics} metWorkNoPics={metWorkNoPics} />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
