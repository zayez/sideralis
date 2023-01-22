import { throttle } from "lodash"
import { app } from "../../config"
const THROTTLE_TIME = app.throttle_time_ms
import Loader from "@/comps/Loader"
import PhotoGallery from "@/comps/PhotoGallery"
import {
  fetchMorePhotos,
  fetchPhotos,
  selectPhotos,
} from "@/store/slices/photosSlice"
import { SPINNER_TYPE } from "@/types/LoaderType"
import Head from "next/head"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { dateSubtract } from "@/helpers/dateHelpers"

const Index = () => {
  const dispatch = useDispatch()
  const photos = useSelector(selectPhotos)

  const handleScroll = (e) => {
    const w = window
    const b = document.body
    // reached bottom of page
    if (w.innerHeight + w.scrollY >= b.offsetHeight - 200) {
      handleLoadMore()
    }
  }

  const handleLoadMore = () => {
    const date = dateSubtract(photos.currentDate, 8)
    dispatch(
      fetchMorePhotos({
        date,
        interval: 7,
      })
    )
  }

  useEffect(() => {
    dispatch(fetchPhotos({ date: new Date(), interval: 7 }))

    // TODO: Fix load more when scrolling
    // window.addEventListener("scroll", handleScroll)
    // return () => {
    //   window.removeEventListener("scroll", handleScroll)
    // }
  }, [])

  useEffect(() => {}, photos.currentDate)

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

        {photos.loadingMore ? (
          <div className="loader-container">
            <Loader type={SPINNER_TYPE} size="medium" />
          </div>
        ) : (
          <div className="load-more-container">
            <button className="btn btn-load-more" onClick={handleLoadMore}>
              Load more
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default Index
