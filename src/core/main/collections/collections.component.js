import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
//own
import Spinner from "components/spinner";
import Movie from "components/movie";
import Tv from "components/tv";
import useInitialiceMovies from "core/main/use-initialice-movies";
import useInitialiceTv from "core/main/use-initialice-tv";
import useInitialiceTopRated from "core/main/use-initialice-top";
import { COLLECTIONS, PLAY_VIDEO } from "constants";
import { detailActions } from "store/details/detail-slice";
import TopRated from "core/main/top-rated/top-rated";
import AdvancesFilms from "core/main/advances";

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
    currentFilm,
  } = useSelector((state) => ({
    topRatedMovies: state.topRatedCollection.topRatedMovies,
    topRatedTv: state.topRatedCollection.topRatedTv,
    isLoadingTop: state.topRatedCollection.isLoadingTop,
    movies: state.moviesCollection.movies,
    isLoading: state.moviesCollection.isLoading,
    tvPopular: state.tvCollection.tvPopular,
    isLoadingTv: state.tvCollection.isLoadingTv,
    showModal: state.detailsCollection.showModal,
    currentFilm: state.advancesCollection.currentFilm,
  }));

  const handleModal = (category, id) => {
    history.push(`${COLLECTIONS}/${category}/${id}`);
    validateModal();
  };

  const handleModalPlay = (id) => {
    history.push(`${COLLECTIONS}${PLAY_VIDEO}/${currentFilm}/${id}`);
    validateModal();
  };

  function validateModal() {
    if (showModal === false) {
      dispatch(detailActions.setModalShow(true));
    }
  }

  return (
    <main className={props.className}>
      {isLoadingTop && <Spinner />}
      {!isLoadingTop && (
        <TopRated topRated={"movies"} collection={topRatedMovies} />
      )}
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
      {isLoadingTop && <Spinner />}
      {!isLoadingTop && <TopRated topRated={"tv"} collection={topRatedTv} />}
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
      <AdvancesFilms onClickModal={handleModalPlay} />
    </main>
  );
};

export default Collections;
