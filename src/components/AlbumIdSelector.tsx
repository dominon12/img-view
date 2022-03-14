import React, { useEffect, useState } from "react";

import "./AlbumIdSelector.scss";
import Label from "./Label";
import ApiResponseTemplate from "./ApiResponseTemplate";
import { loadAlbumIds } from "../redux/album-ids/thunks";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectAlbumIds } from "../redux/album-ids/selectors";
import SelectableItem from "./SelectableItem";

const AlbumIdSelector: React.FC = () => {
  const dispatch = useAppDispatch();
  const albumIds = useAppSelector(selectAlbumIds);

  const [selectedAlbumId, setSelectedAlbumId] = useState<number>();

  useEffect(() => {
    dispatch(loadAlbumIds());
  }, []);

  const onAlbumIdSelect = () => {};

  return (
    <nav className="album-id-selector">
      <Label>Select album id</Label>

      <ApiResponseTemplate
        render={() => (
          <div className="album-id-selector__list-of-ids">
            {albumIds.data.map((albumId) => (
              <SelectableItem
                isSelected={selectedAlbumId === albumId}
                onClick={onAlbumIdSelect}
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
