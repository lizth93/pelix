import { useSelector } from "react-redux";

// Wwn
import useInitialiceDetails from "core/main/use-initialice-videos";
import { BASE_URL_IMG } from "constants";
import { SMALL_SIZE } from "constants";
import RadialProgressBar from "components/radial-progress-bar";
import Spinner from "components/spinner";
import BackgroundSection from "./background-section";

const DetailFilm = (props) => {
  useInitialiceDetails();

  const { currentFilm, isLoading } = useSelector((state) => ({
    currentFilm: state.detailsCollection.currentFilm,
    isLoading: state.detailsCollection.isLoading,
    // error: state.detailsCollection.error,
  }));

  if (isLoading) {
    return <Spinner />;
  }
  console.log(currentFilm.vote_average, "current");

  return (
    <BackgroundSection
      image={currentFilm.backdrop_path}
      className={props.className}
    >
      <div className="container">
        <div className="hero-description">
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
          </div>
        </div>
      </div>
    </BackgroundSection>
  );
};
export default DetailFilm;
