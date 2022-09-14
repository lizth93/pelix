//own
import FilmsDetail from "components/films/detail";
import { BASE_URL_IMG, SMALL_SIZE } from "constants";
import notFoundImg from "img/not-found-smaller.jpg";

const FilmsResults = (props) => {
  let image = `${BASE_URL_IMG}${SMALL_SIZE}${props.collection.poster_path}`;
  if (!props.collection.poster_path) {
    image = notFoundImg;
  }
  return <FilmsDetail src={image} collection={props.collection} />;
};
export default FilmsResults;
