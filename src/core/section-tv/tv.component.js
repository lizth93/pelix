import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

//own
import useInitialiceTv from "core/main/use-initialice-tv";
import { detailActions } from "store/details/detail-slice";
import Spinner from "components/spinner";
import Tv from "components/tv";
import PaginationTv from "./pagination-tv";
import { tvActions } from "store/tv/tv-slice";
import Accordion from "components/accordion";
const TvSection = (props) => {
  useInitialiceTv();

  const dispatch = useDispatch();
  const history = useHistory();
  const { tvPopular, isLoadingTv, currentPage, genres, filterByGenre } =
    useSelector((state) => ({
      tvPopular: state.tvCollection.tvPopular,
      isLoadingTv: state.tvCollection.isLoadingTv,
      currentPage: state.tvCollection.currentPage,
      genres: state.genresCollection.genres,
      filterByGenre: state.tvCollection.filterByGenre,
    }));

  const handleFilterGenre = (id) => {
    if (id === "all") {
      dispatch(tvActions.setFilterByGenre("all"));
    }
    if (id !== "all") {
      dispatch(tvActions.setFilterByGenre(id));
    }
  };

  const handleModalTv = (category, id) => {
    history.push(`/${category}/page/${currentPage}/id/${id}`);

    dispatch(detailActions.setModalShow(true));
  };

  const filterMovies = tvPopular
    .filter((tv) => tv.genre_ids.some((genre) => genre === filterByGenre))
    .map((tv) => (
      <Tv key={tv.id} collection={tv} onClickModal={handleModalTv} withHover />
    ));
  return (
    <main className={props.className}>
      {!isLoadingTv && <h2 className="section-popular">Popular Tv</h2>}
      <section className="container-fluid ">
        <Accordion
          className="accordion"
          genres={genres}
          onClickGenre={handleFilterGenre}
          type="tv"
        />
        <div className="section-collections">
          {isLoadingTv && <Spinner />}

          {!isLoadingTv &&
            filterByGenre === "all" &&
            tvPopular.map((tv) => (
              <Tv
                key={tv.id}
                collection={tv}
                onClickModal={handleModalTv}
                withHover
              />
            ))}
          {filterByGenre !== "all" && filterMovies.length === 0 ? (
            <p className="message">We can find movies with this genre</p>
          ) : (
            filterMovies
          )}
        </div>
      </section>
      <PaginationTv />
    </main>
  );
};
export default TvSection;
