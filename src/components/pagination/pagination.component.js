//own

import ReactPaginate from "react-paginate";

import { MAX_PAGES } from "constants";
import styled from "styled-components";

const Pagination = (props) => {
  const onClick = (data) => {
    props.pageClick(data.selected + 1);
  };

  return (
    <div className={props.className}>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={props.totalPages > MAX_PAGES ? MAX_PAGES : props.totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={onClick}
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
};
export default styled(Pagination)`
  .pagination {
    --bs-pagination-focus-color: #0b7285;
    --bs-pagination-color: #fff;
    --bs-pagination-bg: #495057;
    --bs-pagination-border-color: #0b7285;
    --bs-pagination-hover-bg: #343a40;
    --bs-pagination-hover-border-color: #0b7285;
    --bs-pagination-hover-color: #e3fafc;

    --bs-pagination-disabled-color: #343a40;
    --bs-pagination-disabled-bg: #495057;
    --bs-pagination-disabled-border-color: #343a40;
  }
  .active > .page-link,
  .page-link.active {
    background-color: #1098ad;
    border-color: #0b7285;
  }
`;
