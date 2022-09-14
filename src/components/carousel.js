import { useSelector } from "react-redux/es/hooks/useSelector";
//own
import BootstrapCarousel from "react-bootstrap/Carousel";
import { BASE_URL_IMG, SIZE_IMAGE } from "constants";

function Carousel() {
  const { movies, isLoading } = useSelector((state) => ({
    movies: state.moviesCollection.movies,
    isLoading: state.moviesCollection.isLoading,
  }));

  if (isLoading) return;

  return (
    <BootstrapCarousel>
      {movies.map((movie) => (
        <BootstrapCarousel.Item key={movie.id} interval={3000}>
          <img
            className="d-block w-100"
            src={`${BASE_URL_IMG}${SIZE_IMAGE}${movie.backdrop_path}`}
            alt={movie.title}
          />
          <BootstrapCarousel.Caption>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </BootstrapCarousel.Caption>
        </BootstrapCarousel.Item>
      ))}
    </BootstrapCarousel>
  );
}

export default Carousel;
