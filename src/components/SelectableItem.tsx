import React from "react";

import './SelectableItem.scss'

type Props = {
  isSelected: boolean;
  onClick: () => void;
};

const SelectableItem: React.FC<Props> = (props) => {
  return (
    <span
      className={`selectable-item ${
        props.isSelected
          ? "selectable-item__selected"
          : "selectable-item__not-selected"
      }`}
      onClick={props.onClick}
    >
      {props.children}
    </span>
  );
};

export default SelectableItem;
