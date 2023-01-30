import GalleryGrid from "./GalleryGrid"
import GallerySplit from "./GallerySplit"
import GallerySingle from "./GallerySingle"
import { GALLERY_GRID, GALLERY_SPLIT } from "../types/GalleryType"

const Gallery = ({ items, type, onPhotoClick }) => {
  return type === GALLERY_GRID ? (
    <GalleryGrid items={items} onPhotoClick={onPhotoClick} />
  ) : type === GALLERY_SPLIT ? (
    <GallerySplit items={items} onPhotoClick={onPhotoClick} />
  ) : (
    <GallerySingle items={items} onPhotoClick={onPhotoClick} />
  )
}

export default Gallery
