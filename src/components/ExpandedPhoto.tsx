import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

import "./ExpandedPhoto.scss";

type Props = {
  photoUrl: string;
  alt: string;
  close: () => void;
};

const ExpandedPhoto: React.FC<Props> = (props) => {
  return (
    <div className="expanded-photo">
      <div className="expanded-photo__content">
        <div className="expanded-photo__close" onClick={props.close}>
          <AiOutlineCloseCircle />
        </div>
        <img
          className="expanded-photo__photo"
          src={props.photoUrl}
          alt={props.alt}
          width="600"
          height="600"
        />
      </div>
    </div>
  );
};

export default ExpandedPhoto;
