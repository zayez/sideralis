import {
  Grid as IGrid,
  Columns as IColumns,
  Square as ISquare,
} from "react-feather"
import { useDispatch } from "react-redux"
import { setGalleryType } from "../store/slices/photosSlice"
import {
  GALLERY_GRID,
  GALLERY_SINGLE,
  GALLERY_SPLIT,
} from "../types/GalleryType"
const Header = ({}) => {
  const dispatch = useDispatch()

  const handleGridClick = (e) => {
    dispatch(setGalleryType(GALLERY_GRID))
  }

  const handleSplitClick = (e) => {
    dispatch(setGalleryType(GALLERY_SPLIT))
  }

  const handleSingleClick = (e) => {
    dispatch(setGalleryType(GALLERY_SINGLE))
  }

  return (
    <>
      <header className="header">
        <h1>Sideralis</h1>
        <ul className="gallery-type">
          <li>
            <button className="btn btn-gallery" onClick={handleGridClick}>
              <IGrid />
            </button>
          </li>
          <li>
            <button className="btn btn-gallery" onClick={handleSplitClick}>
              <IColumns />
            </button>
          </li>
          <li>
            <button className="btn btn-gallery" onClick={handleSingleClick}>
              <ISquare />
            </button>
          </li>
        </ul>
      </header>
    </>
  )
}

export default Header
