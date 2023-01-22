import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { STATUS_ERR, STATUS_OK } from "../../types/HttpStatus"
import api from "../../api"

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
      const { status, message } = action.payload
      switch (status) {
        case STATUS_ERR:
        default:
          state.error = message
      }
    })
  },
})

export const fetchPhotos = createAsyncThunk(
  "photos/fetchPhotos",
  async (date, { rejectWithValue }) => {
    try {
      const { status, payload } = await api.getPhotos(date)
      switch (status) {
        case STATUS_OK:
          return payload
        default:
          return rejectWithValue(STATUS_ERR)
      }
    } catch (err) {
      return rejectWithValue({ status: STATUS_ERR, message: err.message })
    }
  }
)

export const selectPhotos = (state) => state.photos

export default photosSlice.reducer
