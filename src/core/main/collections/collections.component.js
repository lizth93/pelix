import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

//own
import Spinner from "../../../components/spinner";
import Movie from "../../movies/movie";
import Tv from "../../films/tv";
import useInitialiceMovies from "../use-initialice-movies";
import useInitialiceTv from "../use-initialice-tv";
import useInitialiceTopRated from "../use-initialice-top";
import { COLLECTIONS } from "../../../config";
import { videosActions } from "../../../store/collections/movies/trailers/videos-slice";

const Collections = (props) => {
  useInitialiceMovies();
  useInitialiceTv();
  useInitialiceTopRated();
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    topRatedMovies,
    topRatedTv,
    isLoadingTop,
    movies,
    isLoading,
    tvPopular,
    isLoadingTv,
    showModal,
  } = useSelector((state) => ({
    topRatedMovies: state.topRatedCollection.topRatedMovies,
    topRatedTv: state.topRatedCollection.topRatedTv,
    isLoadingTop: state.topRatedCollection.isLoadingTop,
    movies: state.moviesCollection.movies,
    isLoading: state.moviesCollection.isLoading,
    tvPopular: state.tvCollection.tvPopular,
    isLoadingTv: state.tvCollection.isLoadingTv,
    showModal: state.videosCollection.showModal,
  }));

  const handleModal = (category, id) => {
    history.push(`${COLLECTIONS}/${category}/${id}`);
    validateModal();
  };

  function validateModal() {
    if (showModal === false) {
      dispatch(videosActions.setModalShow(true));
    }
  }

  return (
    <main className={props.className}>
      <section className="container-top-rated ">
        {!isLoadingTop && <h2 className="section-popular">Top Rated Movies</h2>}
        <div className="section-top-rated ">
          {isLoadingTop && <Spinner />}

          {!isLoadingTop &&
            topRatedMovies.map((movie) => (
              <Movie
                key={movie.id}
                collection={movie}
                className="film-top"
                detailMode="static"
              />
            ))}
        </div>
      </section>

      <section className="container ">
        {!isLoading && <h2 className="section-popular">Popular movies</h2>}

        <div className="section-collections">
          {isLoading && <Spinner />}

          {!isLoading &&
            movies.map((movie) => (
              <Movie
                key={movie.id}
                collection={movie}
                withHover
                onClickModal={handleModal}
                detailMode="hover"
              />
            ))}
        </div>
      </section>

      <section className="container-top-rated ">
        {!isLoadingTop && <h2 className="section-popular">Top Rated Tv</h2>}
        <div className="section-top-rated ">
          {isLoadingTop && <Spinner />}

          {!isLoadingTop &&
            topRatedTv.map((tv) => (
              <Tv
                key={tv.id}
                collection={tv}
                className="film-top"
                detailMode="static"
              />
            ))}
        </div>
      </section>
      <section className="container ">
        {!isLoadingTv && <h2 className="section-popular">Popular Tv</h2>}
        <div className="section-collections">
          {isLoadingTv && <Spinner />}
          {!isLoadingTv &&
            tvPopular.map((tv) => (
              <Tv
                key={tv.id}
                collection={tv}
                withHover
                onClickModal={handleModal}
              />
            ))}
        </div>
      </section>
    </main>
  );
};

export default Collections;
