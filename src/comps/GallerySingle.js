import { format } from "date-fns"
const GallerySingleItem = ({ date, title, explanation, url, hdurl }) => {
  return (
    <>
      <div className="gallery-single-item">
        <div className="gallery-single-item--header">
          <h1>{title}</h1>
          <h2> {format(new Date(date), "dd/MM/yyyy")}</h2>
        </div>
        <div className="gallery-single-item--body">
          <a href={url} onClick={(e) => e.preventDefault()}>
            <img className="gallery-single-item--body-image" src={url} />
          </a>
        </div>
        <div className="gallery-single-item--footer">
          <article>{explanation}</article>
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
