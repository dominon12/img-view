import { setPhotosData, setPhotosError, setPhotosLoading } from "./slice";
import { AppDispatch } from "../types";
import api from "../../packages/api";

export const loadPhotos = (page: number) => async (dispatch: AppDispatch) => {
  dispatch(setPhotosLoading(true));

  const data = await api.photos.list(page);

  dispatch(setPhotosLoading(false));

  if (data.error) {
    dispatch(setPhotosError(data.error));
    return;
  }

  dispatch(setPhotosError(null));
  dispatch(setPhotosData(data.data ?? []));
};
