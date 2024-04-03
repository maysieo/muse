/* eslint-disable react/prop-types */


function Search({ getSearchValue, sendSearchValue, searchArtist, searchingDisplay }) {


  return (
    <div>
      <input type="text" placeholder="Find artists to follow" onChange={(e) => getSearchValue(e)} />
      <button onClick={sendSearchValue}>Search</button>
      {searchingDisplay ? <h2>{searchArtist} appears at...</h2> : null}
    </div>
  )
}

export default Search;
