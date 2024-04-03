function ArtworkPage ( {currentArtwork} ) {
  return (
    <div>
      <img src="https://source.unsplash.com/random" className="w-full h-auto" alt={currentArtwork.Title} />
      <h1>{currentArtwork.Title}</h1>
      <h2>{currentArtwork.Date}</h2>
      <h2>{currentArtwork.Artist}</h2>
      <h2>{currentArtwork.Repository}</h2>
    </div>
  )
}

export default ArtworkPage;