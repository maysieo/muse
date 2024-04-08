/* eslint-disable react/prop-types */


function Search({ getSearchValue, sendSearchValue, searchArtist, searchingDisplay }) {


  return (
    <div>
      <input type="text" placeholder="Find artists" onChange={(e) => getSearchValue(e)} />
      <button onClick={sendSearchValue}>Search</button>
    </div>
  )
}

export default Search;
