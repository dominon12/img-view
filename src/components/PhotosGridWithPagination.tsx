import React, { useEffect } from "react";

import "./PhotosGridWithPagination.scss";
import Pagination from "./Pagination";
import PhotosGrid from "./PhotosGrid";
import ApiResponseTemplate from "./ApiResponseTemplate";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectPhotos } from "../redux/photos/selectors";
import { loadPhotos } from "../redux/photos/thunks";
import { setPhotosPage } from "../redux/photos/slice";

const PhotosGridWithPagination: React.FC = () => {
  const dispatch = useAppDispatch();
  const photos = useAppSelector(selectPhotos);

  useEffect(() => {
    dispatch(loadPhotos(photos.data.page));
  }, []);

  const handleChangePage = (nextPage: number) => {
    dispatch(setPhotosPage(nextPage));
    dispatch(loadPhotos(nextPage, photos.data.selectedAlbumId));
  };

  return (
    <ApiResponseTemplate
      render={() => (
        <div className="photos-with-pagination">
          <PhotosGrid photos={photos.data.photos} />
          <Pagination
            pagesCount={500}
            currentPage={photos.data.page}
            handleChangePage={handleChangePage}
          />
        </div>
      )}
      loading={photos.isLoading}
      error={photos.error}
    />
  );
};

export default PhotosGridWithPagination;
