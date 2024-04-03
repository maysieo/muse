/* eslint-disable react/prop-types */
import Search from './Search';
import MuseumList from './MuseumList';

const HomePage = ({ getSearchValue, sendSearchValue, searchArtist, searchingDisplay, metWork, momaWork, whitneyWork, getCurrentArtwork }) => {
  return (
    <>
      <Search getSearchValue={getSearchValue} sendSearchValue={sendSearchValue} searchArtist={searchArtist} />

      {searchingDisplay ? <h2> {`${searchArtist} appears at...`}</h2> : null}

      <MuseumList metWork={metWork} momaWork={momaWork} whitneyWork={whitneyWork} getCurrentArtwork={getCurrentArtwork}/>
    </>
  );
}

export default HomePage;