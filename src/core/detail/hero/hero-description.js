import { useSelector } from "react-redux";
//own
import useInitialiceDetails from "core/main/use-initialice-videos";
import { BASE_URL_IMG, SMALL_SIZE } from "constants";
import RadialProgressBar from "components/radial-progress-bar";
import Spinner from "components/spinner";

const HeroDescription = (props) => {
  useInitialiceDetails();

  const { currentFilm, isLoading, error } = useSelector((state) => ({
    currentFilm: state.detailsCollection.currentFilm,
    isLoading: state.detailsCollection.isLoading,
    error: state.detailsCollection.error,
  }));

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className={props.className}>
      {error && <p>error</p>}
      {!error && (
        <>
          <img
            className="hero-image"
            src={`${BASE_URL_IMG}${SMALL_SIZE}${currentFilm.poster_path}`}
            alt={currentFilm.name}
          />
          <div>
            <h1 className="hero-title hero-text">
              {currentFilm.name ? currentFilm.name : currentFilm.title}
            </h1>
            <span className="hero-data hero-text">
              {currentFilm.first_air_date
                ? currentFilm.first_air_date
                : currentFilm.release_date}
            </span>
            <h2 className="hero-subtitle hero-text">Description</h2>
            <dt className="hero-description hero-text">
              {currentFilm.overview}
            </dt>
            <h2 className="hero-rating hero-text">User rating:</h2>

            <RadialProgressBar
              className="radial-bar"
              value={currentFilm.vote_average * 10}
            />
            <h2 className="hero-rating hero-text">Genres:</h2>
            <ul className="hero-text hero-genres">
              {currentFilm.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default HeroDescription;
