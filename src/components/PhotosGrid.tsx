import React from "react";

import "./PhotosGrid.scss";
import Label from "./Label";
import PhotoCard from "./PhotoCard";
import Photo from "../types/api/Photo";

type Props = {
  photos: Photo[];
};

const PhotosGrid: React.FC<Props> = (props) => {
  return (
    <section className="photos-grid">
      {props.photos.length > 0 ? (
        props.photos.map((photo) => (
          <PhotoCard
            key={photo.id}
            id={photo.id}
            thumbnailUrl={photo.thumbnailUrl}
            imageUrl={photo.url}
            title={photo.title}
          />
        ))
      ) : (
        <Label>There are no photos</Label>
      )}
    </section>
  );
};

export default PhotosGrid;
