import { useSelector } from "react-redux";
import Spinner from "react-bootstrap/esm/Spinner";
//own
import useInitialiceMovies from "../main/use-initialice-movies";
import Movie from "./movie";
import RadialProgressBar from "../../components/radial-progress-bar";

const MoviesSection = (props) => {
  useInitialiceMovies();
  const { movies, isLoading } = useSelector((state) => ({
    movies: state.moviesCollection.movies,
    isLoading: state.moviesCollection.isLoading,
  }));

  return (
    <main className={props.className}>
      <section className="container ">
        {!isLoading && <h2 className="section-popular">Popular movies</h2>}

        <div className="section-collections">
          {isLoading && <Spinner />}

          {!isLoading &&
            movies.map((movie) => <Movie key={movie.id} collection={movie} />)}

          <RadialProgressBar values={{ style: "--value:20" }} />
        </div>
      </section>
    </main>
  );
};
export default MoviesSection;
