const GallerySplitItem = ({ date, title, explanation, url, hdurl }) => {
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
            <img className="gallery-split-item--body-image" src={url} />
          </a>
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
