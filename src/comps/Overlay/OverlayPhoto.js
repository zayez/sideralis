const OverlayPhoto = ({ url }) => {
  return (
    <div className="overlay-frame">
      <a
        href={url}
        className="overlay-photo-link"
        onClick={(e) => e.preventDefault()}
      >
        <img id="overlay-image" src={url} className="overlay-frame-image" />
      </a>
    </div>
  )
}
export default OverlayPhoto
