function ArtworkCard ({ art }) {
  return (
    <div className="artwork-card">
      <img src="https://source.unsplash.com/random" alt="Artwork" />
      <p>{art.Title}</p>
      <p>{art.Artist}</p>
    </div>
  );
}

export default ArtworkCard;