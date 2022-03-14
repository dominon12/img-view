import React from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

import "./Pagination.scss";

type Props = {
  pagesCount: number;
  currentPage: number;
  handleChangePage: (nextPage: number) => void;
};

const Pagination: React.FC<Props> = (props) => {
  const changePage = (direction: "backwards" | "forward") => {
    let nextPage = props.currentPage;

    switch (direction) {
      case "backwards":
        nextPage--;
        if (nextPage < 1) nextPage = props.pagesCount;
        break;
      case "forward":
        nextPage++;
        if (nextPage > props.pagesCount) nextPage = 1;
        break;
    }

    props.handleChangePage(nextPage);
  };

  return props.pagesCount > 1 ? (
    <div className="pagination">
      <div
        className="pagination__arrow"
        onClick={() => changePage("backwards")}
      >
        <BiLeftArrow />
      </div>

      <div className="pagination__current-page">{props.currentPage}</div>

      <div className="pagination__arrow" onClick={() => changePage("forward")}>
        <BiRightArrow />
      </div>
    </div>
  ) : null;
};

export default Pagination;
