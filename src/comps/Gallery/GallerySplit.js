const GallerySplitItem = ({
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
      <div className="gallery-split-item">
        <div className="gallery-split-left">
          <h1>{title}</h1>
          <h2> {formattedDate}</h2>
          <p>{explanation}</p>
        </div>

        <div className="gallery-split-right">
          <a href={url} onClick={(e) => e.preventDefault()}>
            <img
              className="gallery-split-item--body-image"
              src={url}
              onClick={onPhotoClick}
            />
          </a>
        </div>
      </div>
    </>
  )
}
const GallerySplit = ({ items, onPhotoClick }) => {
  return (
    <>
      <div className={`gallery gallery-split`}>
        {items.map((item, i) => {
          return (
            <GallerySplitItem key={i} {...item} onPhotoClick={onPhotoClick} />
          )
        })}
      </div>
    </>
  )
}

export default GallerySplit
