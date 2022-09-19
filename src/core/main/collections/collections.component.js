import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
//own
import Spinner from "components/spinner";
import PopularMovies from "core/main/popular-movies";
import Tv from "components/tv";
import useInitialiceMovies from "core/main/use-initialice-movies";
import useInitialiceTv from "core/main/use-initialice-tv";
import useInitialiceTopRated from "core/main/use-initialice-top";
import { COLLECTIONS, PLAY_VIDEO } from "constants";
import { detailActions } from "store/details/detail-slice";
import TopRated from "core/main/top-rated--legacy/top-rated";
import TopRatedMovies from "core/main/top-rated-movies";
import AdvancesFilms from "core/main/advances";
import Carousel from "components/carousel";

const Collections = (props) => {
  useInitialiceMovies();
  useInitialiceTv();
  useInitialiceTopRated();
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    topRatedTv,
    isLoadingTop,
    tvPopular,
    isLoadingTv,
    showModal,
    currentFilm,
  } = useSelector((state) => ({
    topRatedTv: state.topRatedCollection.topRatedTv,
    isLoadingTop: state.topRatedCollection.isLoadingTop,
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
    <>
      <Carousel />
      <main className={props.className}>
        <TopRatedMovies />
        <PopularMovies />
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
    </>
  );
};

export default Collections;
