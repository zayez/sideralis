import Loader from "@/comps/Loader"
import PhotoGallery from "@/comps/PhotoGallery"
import { fetchPhotos, selectPhotos } from "@/store/slices/photosSlice"
import { SPINNER_TYPE } from "@/types/LoaderType"
import Head from "next/head"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const Index = () => {
  const dispatch = useDispatch()
  const photos = useSelector(selectPhotos)
  useEffect(() => {
    dispatch(fetchPhotos(new Date()))
  }, [])
  return (
    <>
      <Head>
        <title>Sideralis | Home </title>
      </Head>
      <div className="container">
        <h1>Home</h1>
        {!photos.loading && photos.photos?.length ? (
          <PhotoGallery photos={photos.photos.slice(0, 8)} />
        ) : null}

        {/* <div className="loader-container">
          <Loader type={SPINNER_TYPE} size="medium" />
        </div> */}
      </div>
    </>
  )
}

export default Index
