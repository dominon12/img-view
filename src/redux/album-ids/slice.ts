import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AlbumIdsSliceState = {
  albumIds: number[];
  isLoading: boolean;
  error: string | null;
};

const initialState: AlbumIdsSliceState = {
  albumIds: [],
  isLoading: false,
  error: null,
};

const albumIdsSlice = createSlice({
  name: "album-ids",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<number[]>) => {
      state.albumIds = action.payload;
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
  setData: setAlbumIdsData,
  setLoading: setAlbumIdsLoading,
  setError: setAlbumIdsError,
} = albumIdsSlice.actions;

export default albumIdsSlice;
