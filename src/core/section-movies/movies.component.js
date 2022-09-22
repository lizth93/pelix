import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
//own
import useInitialiceMovies from "core/main/use-initialice-movies";
import Spinner from "components/spinner";
import Movie from "components/movie";
import { detailActions } from "store/details/detail-slice";
import Accordion from "components/accordion/";
import PaginationMovies from "./pagination-movies";
import { useEffect, useState } from "react";
import { moviesActions } from "store/movies/movies-slice";

const SectionMovies = (props) => {
  useInitialiceMovies();

  const dispatch = useDispatch();
  const history = useHistory();
  const { movies, isLoading, showModal, currentPage, genres, filterByGenre } =
    useSelector((state) => ({
      movies: state.moviesCollection.movies,
      isLoading: state.moviesCollection.isLoading,
      showModal: state.detailsCollection.showModal,
      currentPage: state.moviesCollection.currentPage,
      genres: state.genresCollection.genres,
      filterByGenre: state.moviesCollection.filterByGenre,
    }));

  // const [moviesFilter, setMoviesFilter] = useState(movies);

  const handleFilterGenre = (id) => {
    if (id === "all") {
      dispatch(moviesActions.setFilterByGenre("all"));
    }
    if (id !== "all") {
      dispatch(moviesActions.setFilterByGenre(id));
    }
  };

  const handleModalMovies = (category, id = 1) => {
    history.push(`/${category}/page/${currentPage}/id/${id}`);

    if (showModal === false) {
      dispatch(detailActions.setModalShow(true));
    }
  };

  return (
    <main className={props.className}>
      {!isLoading && <h2 className="section-popular">Popular movies</h2>}
      <section className="container-fluid ">
        <Accordion
          className="accordion"
          genres={genres}
          onClickGenre={handleFilterGenre}
        />
        <div className="section-collections">
          {isLoading && <Spinner />}

          {!isLoading &&
            filterByGenre === "all" &&
            movies.map((movie) => (
              <Movie
                key={movie.id}
                collection={movie}
                onClickModal={handleModalMovies}
                withHover
              />
            ))}
          {!isLoading &&
            filterByGenre !== "all" &&
            movies
              .filter((movie) =>
                movie.genre_ids.some((genre) => genre === filterByGenre)
              )
              .map((movie) => (
                <Movie
                  key={movie.id}
                  collection={movie}
                  onClickModal={handleModalMovies}
                  withHover
                />
              ))}
        </div>
      </section>
      <PaginationMovies />
    </main>
  );
};
export default SectionMovies;
