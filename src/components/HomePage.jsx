/* eslint-disable react/prop-types */
import Search from './Search';
import MuseumList from './MuseumList';
import LandingPage from './LandingPage';
import museLogo from '../assets/images/museLogo.png';

const HomePage = ({ getSearchValue, sendSearchValue, searchArtist, loadingResults, metWork, metWorkNoPics, momaWork, momaWorkNoPics, whitneyWork, getCurrentArtwork, searching }) => {

  if (loadingResults) {
    return <div>
        <h1 className="text-custom-yellow">Searching...</h1>
    </div>
  }
  return (
    <div>
      <Search getSearchValue={getSearchValue} sendSearchValue={sendSearchValue} searchArtist={searchArtist} />

      {searching ? <h2 className="pb-6"> {`${searchArtist} appears in...`} </h2> : <LandingPage />}

      <MuseumList metWork={metWork} momaWork={momaWork} whitneyWork={whitneyWork} getCurrentArtwork={getCurrentArtwork} metWorkNoPics={metWorkNoPics} momaWorkNoPics={momaWorkNoPics}/>
   </div>
  );
}

export default HomePage;