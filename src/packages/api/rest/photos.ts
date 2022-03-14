import { baseUrl } from "../config";
import makeRequest from "../makeRequest";

const basePath = baseUrl + "photos/";

export const list = (page?: number) => {
  return makeRequest({
    url: basePath,
    params: page ? { _page: page } : undefined,
  });
};

export const detail = (photoId: number) => {
  return makeRequest({
    url: basePath + photoId,
  });
};
