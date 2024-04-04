/* eslint-disable react/prop-types */
import Search from './Search';
import MuseumList from './MuseumList';

const HomePage = ({ getSearchValue, sendSearchValue, searchArtist, searchingDisplay, metWork, metWorkNoPics, momaWork, momaWorkNoPics, whitneyWork, getCurrentArtwork }) => {
  return (
    <>
      <Search getSearchValue={getSearchValue} sendSearchValue={sendSearchValue} searchArtist={searchArtist} />

      {searchingDisplay ? <h2> {`${searchArtist} appears in...`}</h2> : null}

      <MuseumList metWork={metWork} momaWork={momaWork} whitneyWork={whitneyWork} getCurrentArtwork={getCurrentArtwork} metWorkNoPics={metWorkNoPics} momaWorkNoPics={momaWorkNoPics}/>
    </>
  );
}

export default HomePage;