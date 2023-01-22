import { format } from "date-fns"
const PhotoItem = ({ date, title, explanation, url, hdurl }) => {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h3> {format(new Date(date), "dd/MM/yyyy")}</h3>
        </div>
        <div className="card-body">
          <a href="#">
            <img className="card-image" src={url} />
          </a>
        </div>
        <div className="card-footer">
          <h3>{title}</h3>
          <p>{explanation.substring(0, 150)}...</p>
        </div>
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
