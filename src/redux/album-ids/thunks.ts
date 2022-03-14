import { setAlbumIdsData, setAlbumIdsError, setAlbumIdsLoading } from "./slice";
import { AppDispatch } from "../types";
import api from "../../packages/api";
import Photo from "../../types/api/Photo";

const extractAlbumIds = (photos: Photo[]) =>
  Array.from(new Set(photos.map((p) => p.albumId)));

export const loadAlbumIds = () => async (dispatch: AppDispatch) => {
  dispatch(setAlbumIdsLoading(true));

  const data = await api.photos.list({});

  dispatch(setAlbumIdsLoading(false));

  if (data.error) {
    dispatch(setAlbumIdsError(data.error));
    return;
  }

  dispatch(setAlbumIdsError(null));

  const albumIds = extractAlbumIds(data.data ?? []);

  dispatch(setAlbumIdsData(albumIds));
};
