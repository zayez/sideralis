import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { STATUS_ERR } from "../../types/HttpStatus"

const initialState = {
  loading: false,
  photos: [],
  error: "",
}

const photosSlice = createSlice({
  name: "photos",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPhotos.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchPhotos.fulfilled, (state, action) => {
      state.loading = false
      state.photos = action.payload
      state.error = ""
    })
    builder.addCase(fetchPhotos.rejected, (state, action) => {
      state.loading = false
      if (action.payload === STATUS_ERR) {
        state.error = "Sorry, there was an error processing the photoss."
      } else {
        state.error = payload
        console.log(payload)
      }
    })
  },
})

export const fetchPhotos = createAsyncThunk(
  "photos/fetchPhotos",
  async (date, { rejectWithValue }) => {
    const baseUrl = ""
    const url = `${baseUrl}`
    const res = await fetch(url)
    switch (res.status) {
      case 200:
        return res.json()
      default:
        rejectWithValue(STATUS_ERR)
    }
    const data = await res.json()
  }
)

export const selectPhotos = (state) => state.photos

export default photosSlice.reducer
