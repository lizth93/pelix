import RenderSpinner from "../../components/spinner";
import { useSelector } from "react-redux";
//own
import Movie from "../movies/movie.styled";
import useInitialiceMovies from "./use-initialice-movies";

const Collections = (props) => {
  useInitialiceMovies();

  const { movies, isLoading } = useSelector((state) => ({
    movies: state.moviesCollection.movies,
    isLoading: state.moviesCollection.isLoading,
  }));

  return (
    <main className={props.className}>
      <section className="container-fluid ">
        {!isLoading && <h2 className="section-popular">Popular movies</h2>}
        <div className="section-collections">
          {isLoading && <RenderSpinner />}
          {!isLoading &&
            movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
        </div>
      </section>
    </main>
  );
};

export default Collections;
