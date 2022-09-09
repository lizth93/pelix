import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";

//own
import Spinner from "../../../components/spinner";
import Movie from "../../../components/movie";
import Tv from "../../../components/tv";
import useInitialiceMovies from "../use-initialice-movies";
import useInitialiceTv from "../use-initialice-tv";
import useInitialiceTopRated from "../use-initialice-top";
import { COLLECTIONS } from "../../../config";
import { detailActions } from "../../../store/collections/details/detail-slice";
import TopRated from "../top/top-rated";
import AdvancesFilms from "../advances";
import useInitialiceAdvances from "../use-initialice-advances";

const Collections = (props) => {
  const [filmAdvance, setFilmAdvance] = useState("streaming");
  useInitialiceMovies();
  useInitialiceTv();
  useInitialiceTopRated();
  useInitialiceAdvances(filmAdvance);
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
    advanceFilms,
    isLoadingAdvances,
  } = useSelector((state) => ({
    topRatedMovies: state.topRatedCollection.topRatedMovies,
    topRatedTv: state.topRatedCollection.topRatedTv,
    isLoadingTop: state.topRatedCollection.isLoadingTop,
    movies: state.moviesCollection.movies,
    isLoading: state.moviesCollection.isLoading,
    tvPopular: state.tvCollection.tvPopular,
    isLoadingTv: state.tvCollection.isLoadingTv,
    showModal: state.detailsCollection.showModal,
    advanceFilms: state.advancesCollection.advanceFilms,
    isLoadingAdvances: state.advancesCollection.isLoadingAdvances,
  }));

  const handleModal = (category, id) => {
    history.push(`${COLLECTIONS}/${category}/${id}`);
    validateModal();
  };

  function validateModal() {
    if (showModal === false) {
      dispatch(detailActions.setModalShow(true));
    }
  }

  const handleClickAdvance = (category) => {
    setFilmAdvance(category);
  };
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
      {isLoadingAdvances && <Spinner />}
      {!isLoadingAdvances && (
        <AdvancesFilms
          collection={advanceFilms}
          onClickAdvance={handleClickAdvance}
        />
      )}
    </main>
  );
};

export default Collections;
