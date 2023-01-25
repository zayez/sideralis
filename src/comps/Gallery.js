import GalleryGrid from "./GalleryGrid"
import GallerySplit from "./GallerySplit"
import GallerySingle from "./GallerySingle"
import { GALLERY_GRID, GALLERY_SPLIT } from "../types/GalleryType"

const Gallery = ({ items, type }) => {
  return type === GALLERY_GRID ? (
    <GalleryGrid items={items} />
  ) : type === GALLERY_SPLIT ? (
    <GallerySplit items={items} />
  ) : (
    <GallerySingle items={items} />
  )
}

export default Gallery
