import PhotoGallery from "../comps/PhotoGallery"
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
    dispatch(fetchPhotos({ date: new Date(), interval: 7 }))
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
        <h1>Home</h1>
        {!photos.loading && photos.photos?.length ? (
          <PhotoGallery photos={photos.photos} />
        ) : null}

        {photos.hasMore ? <div ref={lastRef} /> : null}
        {photos.loadingMore ? <LoaderSpinner /> : null}
      </div>
    </>
  )
}

export default Index
