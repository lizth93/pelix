import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//own
import Pagination from "components/pagination";
import { moviesActions } from "store/movies/movies-slice";
import { URL_MOVIES_SECTION } from "constants";

const PaginationMovies = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { totalPages, currentPage } = useSelector((state) => ({
    totalPages: state.moviesCollection.totalPages,
    currentPage: state.moviesCollection.currentPage,
  }));

  const handleCurrentPage = (page) => {
    console.log(page);
    dispatch(moviesActions.setCurrentPage(page));

    history.push(`${URL_MOVIES_SECTION}/page/${page}`);
  };

  return (
    <Pagination
      totalPages={totalPages}
      currentPage={currentPage}
      onClickNextPage={handleCurrentPage}
      onClickLastPage={handleCurrentPage}
      onClickPrevPage={handleCurrentPage}
      onClickPaginationNumber={handleCurrentPage}
    />
  );
};
export default PaginationMovies;
