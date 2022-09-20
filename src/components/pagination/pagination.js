import BootstrapPagination from "react-bootstrap/Pagination";
import { useState } from "react";

function Pagination(props) {
  const [numberPagesMove, setNumberPagesMove] = useState(props.currentPage);

  const handleFirstPage = () => {
    setNumberPagesMove(1);
    props.onClickPrevPage(1);
  };
  const handlePrevPage = () => {
    setNumberPagesMove(props.currentPage - 1);
    props.onClickPrevPage(props.currentPage - 1);
  };
  const handleNextPage = () => {
    setNumberPagesMove(props.currentPage + 1);
    props.onClickNextPage(props.currentPage + 1);
  };
  const handleLastPage = () => {
    setNumberPagesMove(props.totalPages - 5);
    props.onClickLastPage(props.totalPages);
  };
  const handleClickPagination = (numberPage) => {
    props.onClickPaginationNumber(numberPage);
    setNumberPagesMove(numberPage);
  };

  const statusPrev = props.currentPage <= 1 ? true : false;
  const statusLast = props.currentPage >= props.totalPages ? true : false;

  const pages = [0, 1, 2, 3, 4];

  return (
    <div className={props.className}>
      <BootstrapPagination>
        <BootstrapPagination.First
          disabled={statusPrev}
          onClick={handleFirstPage}
        />

        <BootstrapPagination.Prev
          disabled={statusPrev}
          onClick={handlePrevPage}
        />
        {pages.map((page) => (
          <BootstrapPagination.Item
            key={page + props.currentPage}
            onClick={() => {
              handleClickPagination(page + props.currentPage);
            }}
          >
            {page + numberPagesMove}
          </BootstrapPagination.Item>
        ))}

        {!statusLast && <BootstrapPagination.Ellipsis disabled />}
        <BootstrapPagination.Item onClick={handleLastPage}>
          {props.totalPages}
        </BootstrapPagination.Item>
        <BootstrapPagination.Next
          disabled={statusLast}
          onClick={handleNextPage}
        />

        <BootstrapPagination.Last
          disabled={statusLast}
          onClick={handleLastPage}
        />
      </BootstrapPagination>
    </div>
  );
}

export default Pagination;
