const GalleryGridItem = ({
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
      <div className="gallery-grid-item">
        <div className="gallery-grid-item--header">
          <a href={url} onClick={(e) => e.preventDefault()}>
            <img
              className="gallery-grid-item--body-image"
              src={url}
              onClick={onPhotoClick}
            />
          </a>
        </div>
        <div className="gallery-grid-item--footer">
          <h2>{title}</h2>
          <h4> {formattedDate}</h4>
        </div>
      </div>
    </>
  )
}
const GalleryGrid = ({ items, onPhotoClick }) => {
  return (
    <>
      <div className={`gallery gallery-grid`}>
        {items.map((item, i) => {
          return (
            <GalleryGridItem key={i} {...item} onPhotoClick={onPhotoClick} />
          )
        })}
      </div>
    </>
  )
}

export default GalleryGrid
