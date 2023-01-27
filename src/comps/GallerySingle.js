import { format } from "date-fns"
const GallerySingleItem = ({ date, title, explanation, url, hdurl }) => {
  return (
    <>
      <div className="gallery-single-item">
        <div className="gallery-single-item--header">
          <h3>{title}</h3>
          <h3> {format(new Date(date), "dd/MM/yyyy")}</h3>
        </div>
        <div className="gallery-single-item--body">
          <a href="#">
            <img className="gallery-single-item--body-image" src={url} />
          </a>
        </div>
        <div className="gallery-single-item--footer">
          <p>{explanation}</p>
        </div>
      </div>
    </>
  )
}
const GallerySingle = ({ items }) => {
  return (
    <>
      <div className={`gallery gallery-single`}>
        {items.map((item, i) => {
          return <GallerySingleItem key={i} {...item} />
        })}
      </div>
    </>
  )
}

export default GallerySingle
