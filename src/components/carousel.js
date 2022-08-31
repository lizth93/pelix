import { useSelector } from "react-redux/es/hooks/useSelector";
import BootstrapCarousel from "react-bootstrap/Carousel";
//own
import { BASE_URL_IMG, SIZE_IMAGE } from "../config";

function Carousel(props) {
  const { movies, isLoading } = useSelector((state) => ({
    movies: state.moviesCollection.movies,
    isLoading: state.moviesCollection.isLoading,
  }));

  return (
    <div className={props.className}>
      {!isLoading && (
        <BootstrapCarousel className="carousel">
          {movies.map((movie) => (
            <BootstrapCarousel.Item key={movie.id} interval={3000}>
              <img
                className="d-block w-100"
                src={`${BASE_URL_IMG}${SIZE_IMAGE}${movie.backdrop_path}`}
                alt="First slide"
              />
              <BootstrapCarousel.Caption>
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>
              </BootstrapCarousel.Caption>
            </BootstrapCarousel.Item>
          ))}
        </BootstrapCarousel>
      )}
    </div>
  );
}

export default Carousel;
