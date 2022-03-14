import React from "react";

import './Label.scss'

const Label: React.FC = (props) => {
  return <h3 className="label">{props.children}</h3>;
};

export default Label;
