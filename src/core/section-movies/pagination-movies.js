import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//own
import { moviesActions } from "store/movies/movies-slice";
import { URL_MOVIES_SECTION } from "constants";
import Pagination from "components/pagination/pagination.component";

const PaginationMovies = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { totalPages } = useSelector((state) => ({
    totalPages: state.moviesCollection.totalPages,
  }));

  const handlePageClick = (page) => {
    dispatch(moviesActions.setCurrentPage(page));
    history.push(`${URL_MOVIES_SECTION}/page/${page}`);
  };

  return <Pagination totalPages={totalPages} pageClick={handlePageClick} />;
};
export default PaginationMovies;
