import { RootState } from "../types";

export const selectPhotos = (state: RootState) => state.photos;

export const selectPhotosPage = (state: RootState) => state.photos.data.page;

export const selectSelectedAlbumId = (state: RootState) => state.photos.data.selectedAlbumId
