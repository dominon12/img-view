import React from "react";

import "./PhotosGrid.scss";
import PhotoCard from "./PhotoCard";
import Photo from "../types/api/Photo";

type Props = {
  photos: Photo[]
}

const PhotosGrid: React.FC<Props> = (props) => {
  return (
    <section className="photos-grid">
      {props.photos.map((photo) => (
        <PhotoCard
          key={photo.id}
          thumbnailUrl={photo.thumbnailUrl}
          imageUrl={photo.url}
          title={photo.title}
        />
      ))}
    </section>
  );
};

export default PhotosGrid;
