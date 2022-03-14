import React from "react";
import { MdDeleteForever } from "react-icons/md";

import "./PhotoCard.scss";

type Props = {
  title: string;
  thumbnailUrl: string;
  imageUrl: string;
};

const PhotoCard: React.FC<Props> = (props) => {
  const expand = () => {};

  const onDelete = () => {};

  return (
    <article className="photo-card">
      <div className="photo-card__toolbar">
        <div className="photo-card__toolbar-icon">
          <MdDeleteForever onClick={onDelete} />
        </div>
      </div>
      <img
        className="photo-card__thumbnail"
        src={props.thumbnailUrl}
        alt={props.title}
        width="150"
        height="150"
        onClick={expand}
      />
    </article>
  );
};

export default PhotoCard;
