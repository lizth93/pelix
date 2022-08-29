import { BASE_URL_IMG, SIZE_IMAGE } from "../../config";
import ShowMoreIcon from "../../icons/more";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { videosActions } from "../../store/collections/movies/trailers/videos-slice";
import Films from "../../components/films.styled";
import { useHistory } from "react-router-dom";
import { COLLECTIONS, MOVIE_COLLECTION } from "../../config";

const Movie = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.videosCollection.showModal);

  const handleModalMoviesCollection = (id) => {
    history.push(`${COLLECTIONS}/${MOVIE_COLLECTION}/${id}`);

    if (showModal === false) {
      dispatch(videosActions.setModalShow(true));
    }
  };

  return (
    <Films
      src={`${BASE_URL_IMG}${SIZE_IMAGE}${props.collection.poster_path}`}
      title={props.collection.title}
      onClick={props.onClick}
    >
      <ShowMoreIcon
        onClick={() => handleModalMoviesCollection(props.collection.id)}
      />
    </Films>
  );
};
export default Movie;
