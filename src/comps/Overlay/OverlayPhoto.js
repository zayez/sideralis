const OverlayPhoto = ({ photoUrl }) => {
  const src = photoUrl ? photoUrl : ""
  return (
    <div className="overlay-frame">
      <a
        href={src}
        className="overlay-photo-link"
        onClick={(e) => e.preventDefault()}
      >
        <img id="overlay-image" src={src} className="overlay-frame-image" />
      </a>
    </div>
  )
}
export default OverlayPhoto
