/* eslint-disable react/prop-types */
import ArtworkCard from './ArtworkCard';

function MuseumList({ metWork, momaWork, whitneyWork, getCurrentArtwork }) {

  return (
    <div>
      {(metWork.length > 0) ? <><h2>The Met</h2> <div className="h-1 bg-yellow-200"></div></> : null}
      <div className="container mx-auto flex flex-wrap">
      {metWork.map((art) => {
        return (
          <ArtworkCard key={art.id} art={art} getCurrentArtwork={getCurrentArtwork}/>
        )
      })}
      </div>

      {(momaWork.length > 0) ? <><h2>Museum of Modern Art</h2> <div className="h-1 bg-yellow-200"></div> </>: null}
      <div className="container mx-auto flex flex-wrap">
      {momaWork.map((art) => {
        return (
          <ArtworkCard key={art.id} art={art} getCurrentArtwork={getCurrentArtwork}/>
        )
      })}
      </div>

       {(whitneyWork.length > 0) ? <><h2>Whitney Museum of American Art</h2> <div className="h-1 bg-yellow-200"></div></>: null}
        <div className="container mx-auto flex flex-wrap">
        {whitneyWork.map((art) => {
          return (
            <ArtworkCard key={art.id} art={art} getCurrentArtwork={getCurrentArtwork}/>
          )
        })}
        </div>
  </div>
  )
}

export default MuseumList;