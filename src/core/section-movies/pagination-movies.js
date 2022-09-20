import { useDispatch, useSelector } from "react-redux";
//own
import Pagination from "components/pagination";
import { moviesActions } from "store/movies/movies-slice";

const PaginationMovies = () => {
  const dispatch = useDispatch();

  const { totalPages, currentPage } = useSelector((state) => ({
    totalPages: state.moviesCollection.totalPages,
    currentPage: state.moviesCollection.currentPage,
  }));

  const handleCurrentPage = (page) => {
    console.log(page);
    dispatch(moviesActions.setCurrentPage(page));
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
