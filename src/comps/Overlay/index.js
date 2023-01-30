import { useDispatch } from "react-redux"
import { closePhoto } from "../../store/slices/photosSlice"

const Overlay = ({ hasOpenedPhoto, children }) => {
  const dispatch = useDispatch()
  const overlayState = hasOpenedPhoto ? "overlay-show" : "overlay-hidden"

  const handleOverlayClick = (e) => {
    if (e.target.id !== "overlay-image") {
      dispatch(closePhoto())
    }
  }

  return (
    <div
      id="overlay"
      className={`overlay ${overlayState}`}
      onClick={handleOverlayClick}
    >
      {children}
    </div>
  )
}

export default Overlay
