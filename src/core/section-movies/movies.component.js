import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
//own
import useInitialiceMovies from "../main/use-initialice-movies";
import Spinner from "react-bootstrap/esm/Spinner";
import Movie from "../../components/movie";
import { detailActions } from "../../store/collections/details/detail-slice";

const SectionMovies = (props) => {
  useInitialiceMovies();
  const dispatch = useDispatch();
  const history = useHistory();
  const { movies, isLoading, showModal } = useSelector((state) => ({
    movies: state.moviesCollection.movies,
    isLoading: state.moviesCollection.isLoading,
    showModal: state.detailsCollection.showModal,
  }));

  const handleModalMovies = (category, id) => {
    history.push(`/${category}/${id}`);

    if (showModal === false) {
      dispatch(detailActions.setModalShow(true));
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
                withHover
              />
            ))}
        </div>
      </section>
    </main>
  );
};
export default SectionMovies;
