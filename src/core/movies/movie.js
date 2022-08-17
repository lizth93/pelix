import AddIcon from "../../icons/add";
import ShowMoreIcon from "../../icons/more";
import PlayIcon from "../../icons/play";
import losMinions from "./los-minions.jpg";
const Movie = (props) => {
  return (
    <div className={props.className}>
      <figure className="movie__fig">
        <img
          src={losMinions}
          alt="here name of movie..."
          className="movie__img"
        />
      </figure>
      <div className="product__title">
        <h1>
          <span>hola</span>
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
