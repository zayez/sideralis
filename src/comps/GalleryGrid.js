import { format } from "date-fns"
const GalleryGridItem = ({ date, title, explanation, url, hdurl }) => {
  return (
    <>
      <div className="gallery-grid-item">
        <div className="gallery-grid-item--header">
          <h2>{title}</h2>
        </div>
        <div className="gallery-grid-item--body">
          <a href={url} onClick={(e) => e.preventDefault()}>
            <img className="gallery-grid-item--body-image" src={url} />
          </a>
        </div>
        <div className="gallery-grid-item--footer">
          <h3> {format(new Date(date), "dd/MM/yyyy")}</h3>
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
