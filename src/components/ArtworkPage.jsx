/* eslint-disable react/prop-types */
function ArtworkPage ( {currentArtwork} ) {
  return (
    <div className="flex">
      {currentArtwork.ImageURL ? <img src={currentArtwork.ImageURL} className="w-1/2 h-auto" alt={currentArtwork.Title} /> : null }
      <div className="text-left pl-5">
        <h2>{currentArtwork.Title}</h2>
        <h3>{currentArtwork.Date}</h3>
        <h3>{currentArtwork.Artist}</h3>
        <h3>{currentArtwork.Repository}</h3>
        <p>{currentArtwork.Department}</p>
        { (currentArtwork["Gallery Number"]) ? <p className="text-left">Gallery {currentArtwork["Gallery Number"]} </p> : null }
        {currentArtwork.OnView ? <p>{currentArtwork.OnView.replace(/MoMA,|["']/g, "")}</p> : null}
        {currentArtwork.URL ? <a href={currentArtwork.URL} target="_blank">More info</a> : null}
      </div>
    </div>
  )
}

export default ArtworkPage;