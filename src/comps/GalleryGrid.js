import { format } from "date-fns"
const GalleryGridItem = ({ date, title, explanation, url, hdurl }) => {
  return (
    <>
      <div className="gallery-grid-item">
        <div className="gallery-grid-item--header">
          <h3> {format(new Date(date), "dd/MM/yyyy")}</h3>
        </div>
        <div className="gallery-grid-item--body">
          <a href="#">
            <img className="gallery-grid-item--body-image" src={url} />
          </a>
        </div>
        <div className="card-footer">
          <h3>{title}</h3>
          {/* <p>{explanation.substring(0, 150)}...</p> */}
        </div>
      </div>
    </>
  )
}
const GalleryGrid = ({ items }) => {
  return (
    <>
      <div className={`gallery gallery-grid`}>
        {items.map((item, i) => {
          return <GalleryGridItem key={i} {...item} />
        })}
      </div>
    </>
  )
}

export default GalleryGrid
