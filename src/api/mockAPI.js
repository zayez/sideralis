import { dateSubtract } from "../helpers/dateHelpers"
import { STATUS_OK } from "../types/HttpStatus"
import photosData from "../../tests/fixtures/photos.json"

import config from "../config"
const API_RESPONSE_DELAY = config.app.api_response_delay

const getPhotos = async (date, interval = 3) => {
  const d1 = new Date(date)
  const d2 = dateSubtract(date, interval)

  let p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ status: STATUS_OK, payload: photosData })
    }, API_RESPONSE_DELAY)
  })

  return p
}

const mockAPI = { getPhotos }

export default mockAPI
