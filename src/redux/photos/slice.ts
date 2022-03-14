import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import Photo from "../../types/api/Photo";

type PhotosSliceState = {
  photos: Photo[];
  isLoading: boolean;
  error: string | null;
};

const initialState: PhotosSliceState = {
  photos: [],
  isLoading: false,
  error: null,
};

const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Photo[]>) => {
      state.photos = action.payload;
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
  setData: setPhotosData,
  setLoading: setPhotosLoading,
  setError: setPhotosError,
} = photosSlice.actions;

export default photosSlice;
