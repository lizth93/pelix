import FilmsDetail from "../../components/films-detail.styled";
import { BASE_URL_IMG, SIZE_IMAGE } from "../../config";
import notFoundImg from "../../img/not-found-smaller.jpg";

const Results = (props) => {
  let image = `${BASE_URL_IMG}${SIZE_IMAGE}${props.collection.poster_path}`;
  if (!props.collection.poster_path) {
    image = notFoundImg;
  }
  return <FilmsDetail src={image} collection={props.collection} />;
};
export default Results;
