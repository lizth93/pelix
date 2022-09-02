import Spinner from "../../components/spinner";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

//own
import Movie from "../movies/movie";
import Tv from "../films/tv";
import useInitialiceMovies from "./use-initialice-movies";
import useInitialiceTv from "./use-initialice-tv";
import { COLLECTIONS, MOVIE_COLLECTION } from "../../config";
import { videosActions } from "../../store/collections/movies/trailers/videos-slice";

const Collections = (props) => {
  useInitialiceMovies();
  useInitialiceTv();
  const dispatch = useDispatch();
  const history = useHistory();

  const { movies, isLoading, tvPopular, isLoadingTv, showModal } = useSelector(
    (state) => ({
      movies: state.moviesCollection.movies,
      isLoading: state.moviesCollection.isLoading,
      tvPopular: state.tvCollection.tvPopular,
      isLoadingTv: state.tvCollection.isLoadingTv,
      showModal: state.videosCollection.showModal,
    })
  );

  const handleModalMovies = (id) => {
    history.push(`${COLLECTIONS}/${MOVIE_COLLECTION}/${id}`);

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
      <section className="container-fluid ">
        {!isLoadingTv && <h2 className="section-popular">Popular Tv</h2>}
        <div className="section-collections">
          {isLoadingTv && <Spinner />}
          {!isLoadingTv &&
            tvPopular.map((tv) => <Tv key={tv.id} collection={tv} />)}
        </div>
      </section>
    </main>
  );
};

export default Collections;
