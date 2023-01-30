const GallerySingleItem = ({
  date,
  title,
  explanation,
  url,
  hdurl,
  onPhotoClick,
}) => {
  const formattedDate = new Date(date).toLocaleDateString()
  return (
    <>
      <div className="gallery-single-item">
        <div className="gallery-single-item--header">
          <h1>{title}</h1>
          <h2> {formattedDate}</h2>
        </div>
        <div className="gallery-single-item--body">
          <a href={url} onClick={(e) => e.preventDefault()}>
            <img
              className="gallery-single-item--body-image"
              src={url}
              onClick={onPhotoClick}
            />
          </a>
        </div>
        <div className="gallery-single-item--footer">
          <article>{explanation}</article>
        </div>
      </div>
    </>
  )
}
const GallerySingle = ({ items, onPhotoClick }) => {
  return (
    <>
      <div className={`gallery gallery-single`}>
        {items.map((item, i) => {
          return (
            <GallerySingleItem key={i} {...item} onPhotoClick={onPhotoClick} />
          )
        })}
      </div>
    </>
  )
}

export default GallerySingle
