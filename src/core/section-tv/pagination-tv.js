import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//own

import Pagination from "components/pagination";
import { tvActions } from "store/tv/tv-slice";
import { URL_SECTION_TV } from "constants";

const PaginationTv = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { totalPages } = useSelector((state) => ({
    totalPages: state.tvCollection.totalPages,
  }));

  const handlePageClick = (page) => {
    dispatch(tvActions.setCurrentPage(page));
    history.push(`${URL_SECTION_TV}/page/${page}`);
  };

  return <Pagination totalPages={totalPages} pageClick={handlePageClick} />;
};
export default PaginationTv;
