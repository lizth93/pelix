import RenderSpinner from "../../components/spinner";
import { useSelector } from "react-redux";
//own
import Movie from "../movies/movie.styled";
import useInitialiceMovies from "./use-initialice-movies";
import useInitialiceTv from "./use-initialice-tv";
import { useHistory } from "react-router-dom";
import { COLLECTIONS, TV_COLLECTION, MOVIE_COLLECTION } from "../../config";

const Collections = (props) => {
  const history = useHistory();
  useInitialiceMovies();
  useInitialiceTv();

  const { movies, isLoading, tvPopular, isLoadingTv } = useSelector(
    (state) => ({
      movies: state.moviesCollection.movies,
      isLoading: state.moviesCollection.isLoading,
      tvPopular: state.tvCollection.tvPopular,
      isLoadingTv: state.tvCollection.isLoadingTv,
    })
  );

  console.log(tvPopular, "tvPopular");
  const handleModalTvCollection = (id) => {
    history.push(`${COLLECTIONS}/${TV_COLLECTION}/${id}`);
  };

  const handleModalMoviesCollection = (id) => {
    history.push(`${COLLECTIONS}/${MOVIE_COLLECTION}/${id}`);
  };

  return (
    <main className={props.className}>
      <section className="container-fluid ">
        {!isLoading && <h2 className="section-popular">Popular movies</h2>}
        <div className="section-collections">
          {isLoading && <RenderSpinner />}
          {!isLoading &&
            movies.map((movie) => (
              <Movie
                key={movie.id}
                collection={movie}
                onClick={() => handleModalMoviesCollection(movie.id)}
              />
            ))}
        </div>
      </section>
      <section className="container-fluid ">
        {!isLoadingTv && <h2 className="section-popular">Popular Tv</h2>}
        <div className="section-collections">
          {isLoadingTv && <RenderSpinner />}
          {!isLoadingTv &&
            tvPopular.map((tv) => (
              <Movie
                key={tv.id}
                collection={tv}
                onClick={() => handleModalTvCollection(tv.id)}
              />
            ))}
        </div>
      </section>
    </main>
  );
};

export default Collections;
