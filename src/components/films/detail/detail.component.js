import { useSelector } from "react-redux";
//own
import Spinner from "components/spinner";

const FilmsDetail = (props) => {
  const { isLoading } = useSelector((state) => ({
    isLoading: state.searchResults.isLoading,
  }));

  const { name, title } = props.collection;

  let nameFilm = name ? name : title ? title : "";

  let time = props.collection.release_date
    ? `Date: ${props.collection.release_date}`
    : props.collection.first_air_date
    ? `Date: ${props.collection.first_air_date}`
    : "";

  const overview = props.collection.overview;

  return (
    <div className={props.className}>
      {isLoading && <Spinner />}
      <figure className="collection__fig">
        <img src={props.src} alt={nameFilm} className="collection__img" />
      </figure>
      <div className="film__details">
        <h1 className="film__title">
          <span className="film-description">{nameFilm}</span>
        </h1>
        <time>{time}</time>
        <p className="film__overview">{overview}</p>
      </div>
    </div>
  );
};
export default FilmsDetail;
