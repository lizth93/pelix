import { useSelector } from "react-redux/es/exports";
//own
import Movie from "../movies/movie.styled";
import useInitialiceMovies from "./use-initialice-movies";

const Collections = (props) => {
  useInitialiceMovies();

  const { movies } = useSelector((state) => ({
    movies: state.moviesCollection.movies,
  }));

  return (
    <main className={props.className}>
      <section className="container-fluid section-collections">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </section>
    </main>
  );
};

export default Collections;
