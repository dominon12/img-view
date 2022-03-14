import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import Photo from "../../types/api/Photo";
import { InitialState } from "../types";

const initialState: InitialState<{
  photos: Photo[];
  page: number;
  selectedAlbumId?: number;
}> = {
  data: {
    photos: [],
    page: 1,
  },
  isLoading: false,
  error: null,
};

const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    setPhotos: (state, action: PayloadAction<Photo[]>) => {
      state.data.photos = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.data.page = action.payload;
    },
    setAlbumId: (state, action: PayloadAction<number | undefined>) => {
      state.data.selectedAlbumId = action.payload;
    },
    deletePhoto: (state, action: PayloadAction<{ id: number }>) => {
      state.data.photos = state.data.photos.filter(
        (p) => p.id !== action.payload.id
      );
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setPhotos,
  deletePhoto,
  setPage: setPhotosPage,
  setAlbumId: setPhotosSelectedAlbumId,
  setLoading: setPhotosLoading,
  setError: setPhotosError,
} = photosSlice.actions;

export default photosSlice;
