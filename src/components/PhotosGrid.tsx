import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectPhotos } from "../redux/photos/selectors";
import { loadPhotos } from "../redux/photos/thunks";

const PhotosGrid: React.FC = (props) => {
  const dispatch = useAppDispatch();
  const photos = useAppSelector(selectPhotos);

  useEffect(() => {
    dispatch(loadPhotos(1));
  }, []);

  return <div>PhotosGrid</div>;
};

export default PhotosGrid;
