import React from "react";

import DisplayError from "./DisplayError";
import Spinner from "./Spinner";

type Props = {
  render: () => JSX.Element;
  loading: boolean;
  error: string | null;
};

const ApiResponseTemplate: React.FC<Props> = ({ loading, error, render }) => {
  if (loading) return <Spinner />;

  if (error) return <DisplayError>{error}</DisplayError>;

  return render();
};

export default ApiResponseTemplate;
