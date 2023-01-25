import { format } from "date-fns"
const GallerySplitItem = ({ date, title, explanation, url, hdurl }) => {
  return (
    <>
      <div className="gallery-split-item">
        <div className="gallery-split-item--header">
          <h3> {format(new Date(date), "dd/MM/yyyy")}</h3>
        </div>
        <div className="gallery-split-item--body">
          <a href="#">
            <img className="gallery-split-item--body-image" src={url} />
          </a>
        </div>
        <div className="gallery-split-item--footer">
          <h3>{title}</h3>
          {/* <p>{explanation.substring(0, 150)}...</p> */}
        </div>
      </div>
    </>
  )
}
const GallerySplit = ({ items }) => {
  return (
    <>
      <div className={`gallery gallery-split`}>
        {items.map((item, i) => {
          return <GallerySplitItem key={i} {...item} />
        })}
      </div>
    </>
  )
}

export default GallerySplit
