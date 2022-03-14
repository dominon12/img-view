import { baseUrl } from "../config";
import makeRequest from "../makeRequest";
import Photo from "../../../types/api/Photo";

const basePath = baseUrl + "photos/";

export const list = (page?: number) => {
  return makeRequest<Photo[]>({
    url: basePath,
    params: page ? { _page: page } : undefined,
  });
};

export const detail = (photoId: number) => {
  return makeRequest<Photo>({
    url: basePath + photoId,
  });
};
