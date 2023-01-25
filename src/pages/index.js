import useIsElementVisible from "../hooks/useIsElementVisible"
import {
  fetchMorePhotos,
  fetchPhotos,
  selectPhotos,
} from "../store/slices/photosSlice"
import Head from "next/head"
import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { dateSubtract } from "../helpers/dateHelpers"
import LoaderSpinner from "../comps/LoaderSpinner"
import Gallery from "../comps/Gallery"
import Header from "../comps/Header"
import { CSSTransition } from "react-transition-group"

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
        <Header />
        {!photos.loading && photos.photos?.length ? (
          <Gallery items={photos?.photos} type={photos.galleryType} />
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
