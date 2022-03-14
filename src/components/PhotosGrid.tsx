import React, { useEffect } from "react";

import "./PhotosGrid.scss";
import ApiResponseTemplate from "./ApiResponseTemplate";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectPhotos } from "../redux/photos/selectors";
import { loadPhotos } from "../redux/photos/thunks";

const PhotosGrid: React.FC = (props) => {
  const dispatch = useAppDispatch();
  const photos = useAppSelector(selectPhotos);

  useEffect(() => {
    dispatch(loadPhotos(1));
  }, []);

  return (
    <ApiResponseTemplate
      render={() => (
        <section className="photos-grid">
          {photos.data.map((photo) => (
            <></>
          ))}
        </section>
      )}
      loading={photos.isLoading}
      error={photos.error}
    />
  );
};

export default PhotosGrid;
