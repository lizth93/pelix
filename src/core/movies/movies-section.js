import { useSelector } from "react-redux";
import Spinner from "react-bootstrap/esm/Spinner";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
//own
import useInitialiceMovies from "../main/use-initialice-movies";
import Movie from "./movie";
import { SECTION_MOVIES, MOVIE_COLLECTION } from "../../config";
import { videosActions } from "../../store/collections/movies/trailers/videos-slice";

const MoviesSection = (props) => {
  useInitialiceMovies();
  const dispatch = useDispatch();
  const history = useHistory();
  const { movies, isLoading, showModal } = useSelector((state) => ({
    movies: state.moviesCollection.movies,
    isLoading: state.moviesCollection.isLoading,
    showModal: state.videosCollection.showModal,
  }));

  const handleModalMovies = (id) => {
    history.push(`${SECTION_MOVIES}/${MOVIE_COLLECTION}/${id}`);

    if (showModal === false) {
      dispatch(videosActions.setModalShow(true));
    }
  };

  return (
    <main className={props.className}>
      <section className="container ">
        {!isLoading && <h2 className="section-popular">Popular movies</h2>}

        <div className="section-collections">
          {isLoading && <Spinner />}

          {!isLoading &&
            movies.map((movie) => (
              <Movie
                key={movie.id}
                collection={movie}
                onClickModal={handleModalMovies}
              />
            ))}
        </div>
      </section>
    </main>
  );
};
export default MoviesSection;
