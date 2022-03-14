import makeRequest from "../makeRequest";
import Photo from "../../../types/api/Photo";

const basePath = "photos/";

export const list = ({
  page,
  albumId,
}: {
  page?: number;
  albumId?: number;
}) => {
  let params: any = {};
  if (page) params._page = page;
  if (albumId) params.albumId = albumId;

  return makeRequest<Photo[]>({
    url: basePath,
    params,
  });
};

export const detail = (photoId: number) => {
  return makeRequest<Photo>({
    url: basePath + photoId,
  });
};
