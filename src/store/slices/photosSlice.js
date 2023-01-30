import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { STATUS_ERR, STATUS_OK } from "../../types/HttpStatus"
import api from "../../api"
import { GALLERY_GRID } from "../../types/GalleryType"

const initialState = {
  loading: false,
  loadingMore: false,
  photos: [],
  hasMore: true,
  hasOpenedPhoto: false,
  openPhotoUrl: null,
  currentDate: null,
  galleryType: GALLERY_GRID,
  error: "",
}

const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    setGalleryType(state, action) {
      state.galleryType = action.payload
    },
    openPhoto(state, action) {
      state.openPhotoUrl = action.payload
      state.hasOpenedPhoto = true
    },
    closePhoto(state) {
      state.openPhotoUrl = null
      state.hasOpenedPhoto = false
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPhotos.pending, (state) => {
      state.loading = true
      state.photos = []
    })
    builder.addCase(fetchPhotos.fulfilled, (state, action) => {
      state.loading = false
      state.currentDate = new Date(action.payload.date).toISOString()
      state.hasMore = true
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
      state.hasMore = action.payload.data?.length > 0
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

export const { setGalleryType, openPhoto, closePhoto } = photosSlice.actions

export default photosSlice.reducer
