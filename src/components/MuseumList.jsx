import ArtworkCard from './ArtworkCard';

function MuseumList({ metWork, momaWork, whitneyWork }) {

  return (
    <div>
      <h2>The Met</h2>
      <div className="h_line"></div>
      {metWork.map((art) => {
        return (
          <ArtworkCard key={art.id} art={art}/>
        )
      })}
      <h2>MoMA</h2>
      <div className="h_line" />
      {momaWork.map((art) => {
        return (
          <ArtworkCard key={art.id} art={art}/>
        )
      })}
      <h2>The Whitney</h2>
      <div className="h_line" />
      {whitneyWork.map((art) => {
        return (
          <ArtworkCard key={art.id} art={art}/>
        )
      })}
    </div>
  )
}

export default MuseumList;