import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { format } from "date-fns"
import { STATUS_ERR, STATUS_OK } from "../../types/HttpStatus"
import api from "../../api"
import { dateSubtract } from "@/helpers/dateHelpers"

const initialState = {
  loading: false,
  loadingMore: false,
  photos: [],
  currentDate: null,
  error: "",
}

const photosSlice = createSlice({
  name: "photos",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPhotos.pending, (state) => {
      state.loading = true
      state.photos = []
    })
    builder.addCase(fetchPhotos.fulfilled, (state, action) => {
      state.loading = false
      state.currentDate = new Date(action.payload.date).toISOString()
      state.photos = [...action.payload.data.reverse()]
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

    builder.addCase(fetchMorePhotos.pending, (state) => {
      state.loadingMore = true
    })
    builder.addCase(fetchMorePhotos.fulfilled, (state, action) => {
      state.loadingMore = false
      state.currentDate = new Date(action.payload.date).toISOString()

      state.photos = [...state.photos, ...action.payload.data.reverse()]
      state.error = ""
    })
    builder.addCase(fetchMorePhotos.rejected, (state, action) => {
      state.loadingMore = false
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
  async ({ date, interval = 7 }, { rejectWithValue }) => {
    try {
      const { status, payload } = await api.getPhotos(date, interval)
      switch (status) {
        case STATUS_OK:
          return { date, data: payload }
        default:
          return rejectWithValue(STATUS_ERR)
      }
    } catch (err) {
      return rejectWithValue({ status: STATUS_ERR, message: err.message })
    }
  }
)

export const fetchMorePhotos = createAsyncThunk(
  "photos/fetchMorePhotos",
  async ({ date, interval = 7 }, { rejectWithValue }) => {
    try {
      const { status, payload } = await api.getPhotos(date, interval)
      switch (status) {
        case STATUS_OK:
          return { date, data: payload }
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
