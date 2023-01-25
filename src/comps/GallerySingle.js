import { format } from "date-fns"
const GallerySingleItem = ({ date, title, explanation, url, hdurl }) => {
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
          {/* <p>{explanation.substring(0, 150)}...</p> */}
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
