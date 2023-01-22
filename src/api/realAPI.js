const baseUrl = `https://api.nasa.gov/planetary`
import { STATUS_ERR, STATUS_OK } from "@/types/HttpStatus"
import config from "../../config"
const API_KEY = config.nasa.api_key

const getPhotos = async ({ date }) => {
  const dateRange = `start_date=2022-01-01&end_date=2022-01-20`
  const url = `${baseUrl}/apod?api_key=${API_KEY}&${dateRange}`
  const res = await fetch(url)
  switch (res.status) {
    case STATUS_OK:
      const payload = await res.json()
      return { status: STATUS_OK, payload }
    case STATUS_ERR:
      return { status: STATUS_ERR, payload: null }
    default:
      return { status: STATUS_ERR, payload: null }
  }
}

const realAPI = { getPhotos }

export default realAPI
