import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import ArtworkPage from './components/ArtworkPage.jsx'
import LogIn from './components/LogIn.jsx'
import PersonalCatalog from './components/PersonalCatalog.jsx'
import ReviewsBar from './components/ReviewsBar.jsx'
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
  const [loadingResults, setLoadingResults] = useState(false);
  const [searching, setSearching] = useState(false);
  const [artworkPage, setArtworkPage] = useState(false);
  const [currentArtwork, setCurrentArtwork] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userReviews, setUserReviews] = useState([]);



  const getSearchValue = (e) => {
    setSearchArtist(e.target.value)
  }

  const getCurrentArtwork = (thisPiece) => {
    setCurrentArtwork(thisPiece);
  }

  const setLoginStatus = () => {
    setIsLoggedIn(true);
  }

  const getUserCatalog = () => {
    let userEmail = localStorage.getItem('userEmail');
    axios.get(`http://localhost:3000/review/${userEmail}`)
      .then((response) => {
        setUserReviews(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const sendSearchValue = () => {
    setLoadingResults(true);
    setSearching(true)
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
      setLoadingResults(false);
    })
    .catch((error) => {
      console.log(error);
      setLoadingResults(false);
    })
  }

  return (
    <>
      <Router>
      <div className="w-full">
      {isLoggedIn ?  <ReviewsBar userReviews={userReviews} getUserCatalog={getUserCatalog} currentArtwork={currentArtwork}/> : <LogIn isLoggedIn={isLoggedIn} setLoginStatus={setLoginStatus}/>}
      </div>
      <div>
        <Link to="/">
        <h1 className="text-4XL pb-6 pt-5">
          muse
        </h1>
        </Link>
          <Routes>
            <Route path="/artwork" element={<ArtworkPage currentArtwork={currentArtwork} />} />
            <Route path="/" element={<HomePage getSearchValue={getSearchValue} sendSearchValue={sendSearchValue} searchArtist={searchArtist} metWork={metWork} momaWork={momaWork} whitneyWork={whitneyWork} getCurrentArtwork={getCurrentArtwork} momaWorkNoPics={momaWorkNoPics} metWorkNoPics={metWorkNoPics} loadingResults={loadingResults} searching={searching}/>} />
            <Route path="/catalog" element={<PersonalCatalog userReviews={userReviews} setUserReviews={setUserReviews} getUserCatalog={getUserCatalog}/>} />
          </Routes>
        </div>
        </Router>
    </>
  )
}

export default App
