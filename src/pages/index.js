import useIsElementVisible from "../hooks/useIsElementVisible"
import {
  fetchMorePhotos,
  fetchPhotos,
  openPhoto,
  selectPhotos,
} from "../store/slices/photosSlice"
import Head from "next/head"
import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { dateSubtract } from "../helpers/dateHelpers"
import LoaderSpinner from "../comps/LoaderSpinner"
import Gallery from "../comps/Gallery"
import Header from "../comps/Header"
import Overlay from "../comps/Overlay"
import OverlayPhoto from "../comps/Overlay/OverlayPhoto"
import { CSSTransition } from "react-transition-group"

import "@fontsource/ruda"
import "@fontsource/roboto-slab"

const Index = () => {
  const lastRef = useRef(null)
  const dispatch = useDispatch()
  const photos = useSelector(selectPhotos)
  const isLastVisible = useIsElementVisible(lastRef.current)

  const handleLoadMore = (date) => {
    dispatch(
      fetchMorePhotos({
        date,
        interval: 7,
      })
    )
  }

  const handlePhotoClick = (e) => {
    e.preventDefault()
    const photoUrl = e.target.src
    const item = photos.photos.find((a) => a.url === photoUrl)
    dispatch(openPhoto(item))
  }

  useEffect(() => {
    const date = new Date()
    dispatch(fetchPhotos({ date, interval: 7 }))
  }, [])

  useEffect(() => {
    if (isLastVisible) {
      const date = dateSubtract(photos.currentDate, 8)
      handleLoadMore(date)
    }
  }, [isLastVisible])

  return (
    <>
      <Head>
        <title>Sideralis | Home </title>
      </Head>
      <div className="container">
        <Header galleryType={photos.galleryType} />
        {!photos.loading && photos.photos?.length ? (
          <>
            <Gallery
              items={photos?.photos}
              type={photos.galleryType}
              onPhotoClick={handlePhotoClick}
            />
            <Overlay hasOpenedPhoto={photos.hasOpenedPhoto}>
              <OverlayPhoto {...photos.selectedItem} />
            </Overlay>
          </>
        ) : null}

        {photos.hasMore ? (
          <div className="bottom-observer" ref={lastRef} />
        ) : null}
        {photos.loadingMore ? <LoaderSpinner /> : null}
      </div>
    </>
  )
}

export default Index
