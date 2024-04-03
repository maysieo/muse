/* eslint-disable react/prop-types */
import ArtworkCard from './ArtworkCard';

function MuseumList({ metWork, momaWork, whitneyWork }) {

  return (
    <div>
      <h2>The Met</h2>
      <div className="container mx-auto flex flex-wrap">
      {metWork.map((art) => {
        return (
          <ArtworkCard key={art.id} art={art}/>
        )
      })}
      </div>

      <h2>MoMA</h2>
      <div className="container mx-auto flex flex-wrap">
      {momaWork.map((art) => {
        return (
          <ArtworkCard key={art.id} art={art}/>
        )
      })}
      </div>

      <div>
        <h2>The Whitney</h2>
        <div className="container mx-auto flex flex-wrap">
        {whitneyWork.map((art) => {
          return (
            <ArtworkCard key={art.id} art={art}/>
          )
        })}
        </div>
      </div>
  </div>
  )
}

export default MuseumList;