/* eslint-disable react/prop-types */
import Search from './Search';
import MuseumList from './MuseumList';
import LoadingImage from './LoadingImage';

const HomePage = ({ getSearchValue, sendSearchValue, searchArtist, searchingDisplay, metWork, metWorkNoPics, momaWork, momaWorkNoPics, whitneyWork, getCurrentArtwork }) => {
  return (
    <div>
      <Search getSearchValue={getSearchValue} sendSearchValue={sendSearchValue} searchArtist={searchArtist} />

      {searchingDisplay ? <h2 className="pb-6"> {`${searchArtist} appears in...`} </h2> : <LoadingImage />}

      <MuseumList metWork={metWork} momaWork={momaWork} whitneyWork={whitneyWork} getCurrentArtwork={getCurrentArtwork} metWorkNoPics={metWorkNoPics} momaWorkNoPics={momaWorkNoPics}/>
   </div>
  );
}

export default HomePage;