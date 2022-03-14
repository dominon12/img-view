import { combineReducers, configureStore } from "@reduxjs/toolkit";
import albumIdsSlice from "./album-ids/slice";

import photosSlice from "./photos/slice";

export const rootReducer = combineReducers({
  photos: photosSlice.reducer,
  albumIds: albumIdsSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
