import { BASE_URL_IMG, SIZE_IMAGE } from "../../config";
import ShowMoreIcon from "../../icons/more";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { videosActions } from "../../store/collections/movies/trailers/videos-slice";
import Films from "../../components/films.styled";
import { useHistory } from "react-router-dom";

import { COLLECTIONS, TV_COLLECTION } from "../../config";
const Tv = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.videosCollection.showModal);

  const handleModalTvCollection = (id) => {
    history.push(`${COLLECTIONS}/${TV_COLLECTION}/${id}`);

    if (showModal === false) {
      dispatch(videosActions.setModalShow(true));
    }
  };

  return (
    <Films
      src={`${BASE_URL_IMG}${SIZE_IMAGE}${props.collection.poster_path}`}
      title={props.collection.name}
    >
      <ShowMoreIcon
        onClick={() => handleModalTvCollection(props.collection.id)}
      />
    </Films>
  );
};
export default Tv;
