import { combineReducers, configureStore } from "@reduxjs/toolkit";

import photosSlice from "./photos/slice";

export const rootReducer = combineReducers({
  photos: photosSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
