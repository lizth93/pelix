import { useSelector } from "react-redux/es/hooks/useSelector";
import Carousel from "react-bootstrap/Carousel";
//own
import { BASE_URL_IMG, SIZE_IMAGE } from "../config";

function RenderCarousel(props) {
  const { movies, isLoading } = useSelector((state) => ({
    movies: state.moviesCollection.movies,
    isLoading: state.moviesCollection.isLoading,
  }));

  return (
    <div className={props.className}>
      {!isLoading && (
        <Carousel className="carousel">
          {movies.map((movie) => (
            <Carousel.Item key={movie.id} interval={3000}>
              <img
                className="d-block w-100"
                src={`${BASE_URL_IMG}${SIZE_IMAGE}${movie.backdrop_path}`}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </div>
  );
}

export default RenderCarousel;
