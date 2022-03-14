import React, { useEffect } from "react";

import "./AlbumIdSelector.scss";
import Label from "./Label";
import ApiResponseTemplate from "./ApiResponseTemplate";
import { loadAlbumIds } from "../redux/album-ids/thunks";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectAlbumIds } from "../redux/album-ids/selectors";
import SelectableItem from "./SelectableItem";
import { loadPhotos } from "../redux/photos/thunks";
import {
  selectPhotosPage,
  selectSelectedAlbumId,
} from "../redux/photos/selectors";
import { setPhotosSelectedAlbumId } from "../redux/photos/slice";

const AlbumIdSelector: React.FC = () => {
  const dispatch = useAppDispatch();
  const albumIds = useAppSelector(selectAlbumIds);
  const photosPage = useAppSelector(selectPhotosPage);
  const selectedAlbumId = useAppSelector(selectSelectedAlbumId);

  useEffect(() => {
    dispatch(loadAlbumIds());
  }, []);

  const onAlbumIdSelect = (albumId?: number) => {
    if (selectedAlbumId === albumId) {
      albumId = undefined;
    }
    dispatch(setPhotosSelectedAlbumId(albumId));
    dispatch(loadPhotos(photosPage, albumId));
  };

  return (
    <nav className="album-id-selector">
      <Label>Select album id</Label>

      <ApiResponseTemplate
        render={() => (
          <div className="album-id-selector__list-of-ids">
            {albumIds.data.map((albumId) => (
              <SelectableItem
                isSelected={selectedAlbumId === albumId}
                onClick={() => onAlbumIdSelect(albumId)}
              >
                {albumId}
              </SelectableItem>
            ))}
          </div>
        )}
        loading={albumIds.isLoading}
        error={albumIds.error}
      />
    </nav>
  );
};

export default AlbumIdSelector;
