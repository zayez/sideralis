import { useState } from "react"
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
const Header = ({ galleryType }) => {
  const dispatch = useDispatch()

  const handleGridClick = () => {
    dispatch(setGalleryType(GALLERY_GRID))
  }

  const handleSplitClick = () => {
    dispatch(setGalleryType(GALLERY_SPLIT))
  }

  const handleSingleClick = () => {
    dispatch(setGalleryType(GALLERY_SINGLE))
  }

  return (
    <>
      <header className="header">
        <h1>Sideralis</h1>
        <ul className="gallery-type">
          <li>
            <button
              className={`btn btn-gallery ${
                galleryType == GALLERY_GRID ? "selected" : ""
              }`}
              onClick={handleGridClick}
            >
              <IGrid />
            </button>
          </li>
          <li>
            <button
              className={`btn btn-gallery ${
                galleryType == GALLERY_SPLIT ? "selected" : ""
              }`}
              onClick={handleSplitClick}
            >
              <IColumns />
            </button>
          </li>
          <li>
            <button
              className={`btn btn-gallery ${
                galleryType == GALLERY_SINGLE ? "selected" : ""
              }`}
              onClick={handleSingleClick}
            >
              <ISquare />
            </button>
          </li>
        </ul>
      </header>
    </>
  )
}

export default Header
