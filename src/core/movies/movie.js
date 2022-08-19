import { BASE_URL_IMG, SIZE_IMAGE } from "../../config";
import AddIcon from "../../icons/add";
import ShowMoreIcon from "../../icons/more";
import PlayIcon from "../../icons/play";

const Movie = (props) => {
  return (
    <div className={props.className}>
      <figure className="movie__fig">
        <img
          src={`${BASE_URL_IMG}${SIZE_IMAGE}${props.movie.poster_path}`}
          alt={props.title}
          className="movie__img"
        />
      </figure>
      <div className="movie__title">
        <h1>
          <span className="text-description">{props.movie.title}</span>
        </h1>
        <div className="icons">
          <div>
            <PlayIcon />
            <AddIcon />
          </div>
          <ShowMoreIcon />
        </div>
      </div>
    </div>
  );
};
export default Movie;
