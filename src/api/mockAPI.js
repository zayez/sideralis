import { STATUS_OK } from "@/types/HttpStatus"
import photosData from "../../tests/fixtures/photos.json"

const getPhotos = async ({}) => {
  return Promise.resolve({ status: STATUS_OK, payload: photosData })
  // return Promise.reject(
  //   new Error("Unable to retrieve photos for this date range.")
  // )
}
const mockAPI = { getPhotos }

export default mockAPI
