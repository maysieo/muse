/* eslint-disable react/prop-types */


function Search({ getSearchValue, sendSearchValue, searchArtist, searchingDisplay }) {


  return (
    <div>
      <input type="text" placeholder="Find artists" onChange={(e) => getSearchValue(e)} />
      <button onClick={sendSearchValue}>Search</button>
      {searchingDisplay ? <h2>{searchArtist} appears in...</h2> : null}
    </div>
  )
}

export default Search;
