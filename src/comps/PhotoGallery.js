const PhotoItem = ({ date, title, explanation, url, hdurl }) => {
  return (
    <>
      <div className="card">
        <a href="">
          <img className="card-image" src={url} />
        </a>
      </div>
    </>
  )
}
const PhotoGallery = ({ photos }) => {
  return (
    <>
      <div className="gallery-grid">
        {photos.map((photo, i) => {
          return <PhotoItem key={i} {...photo} />
        })}
      </div>
    </>
  )
}

export default PhotoGallery
