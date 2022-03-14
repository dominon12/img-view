import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";

import "./PhotoCard.scss";
import ExpandedPhoto from "./ExpandedPhoto";
import { useAppDispatch } from "../redux/hooks";
import { deletePhoto } from "../redux/photos/slice";

type Props = {
  id: number;
  title: string;
  thumbnailUrl: string;
  imageUrl: string;
};

const PhotoCard: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const [expanded, setExpanded] = useState(false);

  const setDialogOpen = (open: boolean) => {
    setExpanded(open);
    document.body.style.overflow = open ? "hidden" : "auto";
  };

  const onDelete = () => dispatch(deletePhoto({ id: props.id }));

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
        onClick={() => setDialogOpen(true)}
      />

      {expanded && (
        <ExpandedPhoto
          photoUrl={props.imageUrl}
          close={() => setDialogOpen(false)}
          alt={props.title}
        />
      )}
    </article>
  );
};

export default PhotoCard;
