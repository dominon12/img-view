import React from "react";

import "./DisplayError.scss";

const DisplayError: React.FC = (props) => {
  return <div className="display-error">{props.children}</div>;
};

export default DisplayError;
