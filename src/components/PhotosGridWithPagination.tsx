import React, { useEffect, useState } from "react";

import "./PhotosGridWithPagination.scss";
import Pagination from "./Pagination";
import PhotosGrid from "./PhotosGrid";
import ApiResponseTemplate from "./ApiResponseTemplate";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectPhotos } from "../redux/photos/selectors";
import { loadPhotos } from "../redux/photos/thunks";


const PhotosGridWithPagination: React.FC = () => {
  const dispatch = useAppDispatch();
  const photos = useAppSelector(selectPhotos);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(loadPhotos(currentPage));
  }, []);

  const handleChangePage = (nextPage: number) => {
    setCurrentPage(nextPage);
    dispatch(loadPhotos(nextPage));
  };

  return (
    <ApiResponseTemplate
      render={() => (
        <div className="photos-with-pagination">
          <PhotosGrid photos={photos.data} />
          <Pagination
            pagesCount={500}
            currentPage={currentPage}
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
