import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

// Own
import Spinner from "components/spinner";
import Film from "components/films";
import { COLLECTIONS } from "constants";
import { detailActions } from "store/details/detail-slice";

const TopRatedMovies = () => {
  const dispatch = useDispatch();
  const { isLoadingTop, topRatedMovies } = useSelector((state) => ({
    isLoadingTop: state.topRatedCollection.isLoadingTop,
    topRatedMovies: state.topRatedCollection.topRatedMovies,
  }));
  const history = useHistory();

  if (isLoadingTop) {
    return <Spinner />;
  }

  const openModal = (id) => {
    history.push(`${COLLECTIONS}/movies/${id}`);
    dispatch(detailActions.setModalShow(true));
  };

  return (
    <section className="container-top-rated ">
      <h2 className="section-popular">Top Rated Movies</h2>
      <div className="section-top-rated ">
        {topRatedMovies.map((movie) => (
          <div key={movie.id} className="film-top">
            <Film
              imgName={movie.poster_path}
              title={movie.title}
              detailMode={movie.detailMode}
              collection={movie}
              withMoreIcon={true}
              onClickModal={() => {
                openModal(movie.id);
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopRatedMovies;
