import { setPhotos, setPhotosError, setPhotosLoading } from "./slice";
import { AppDispatch } from "../types";
import api from "../../packages/api";

export const loadPhotos =
  (page: number, albumId?: number) => async (dispatch: AppDispatch) => {
    dispatch(setPhotosLoading(true));

    const data = await api.photos.list({ page, albumId });

    dispatch(setPhotosLoading(false));

    if (data.error) {
      dispatch(setPhotosError(data.error));
      return;
    }

    dispatch(setPhotosError(null));
    dispatch(setPhotos(data.data ?? []));
  };
