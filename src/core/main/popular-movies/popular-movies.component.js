import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

// Own
import Spinner from "components/spinner";
import Film from "components/films";
import { COLLECTIONS } from "constants";
import { detailActions } from "store/details/detail-slice";

const PopularMovies = (props) => {
  const dispatch = useDispatch();
  const { isLoading, movies } = useSelector((state) => ({
    isLoading: state.moviesCollection.isLoading,
    movies: state.moviesCollection.movies,
  }));
  const history = useHistory();

  const showModal = (id) => {
    history.push(`${COLLECTIONS}/movies/${id}`);
    dispatch(detailActions.setModalShow(true));
  };

  return (
    <section className={`${props.className} container`}>
      {!isLoading && <h2 className="section-popular">Popular movies</h2>}

      <div className="section-collections">
        {isLoading && <Spinner />}

        {!isLoading &&
          movies.map((movie) => (
            <div className="film-container">
              <Film
                imgName={movie.poster_path}
                title={movie.title}
                // TODO: difference between detailMode and withHover
                withHover
                withMoreIcon
                detailMode={"hover"}
                collection={movie}
                onClickModal={() => {
                  showModal(movie.id);
                }}
              />
            </div>
          ))}
      </div>
    </section>
  );
};

export default PopularMovies;
