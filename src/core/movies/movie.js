import { BASE_URL_IMG, SIZE_IMAGE } from "../../config";
import AddIcon from "../../icons/add";
import ShowMoreIcon from "../../icons/more";
import PlayIcon from "../../icons/play";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { videosActions } from "../../store/collections/movies/trailers/videos-slice";

const Movie = (props) => {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.videosCollection.showModal);

  const handleOpenModal = () => {
    if (showModal === false) {
      dispatch(videosActions.setModalShow(true));
    }
  };

  return (
    <div className={props.className} onClick={props.onClick}>
      <figure className="collection__fig">
        <img
          src={`${BASE_URL_IMG}${SIZE_IMAGE}${props.collection.poster_path}`}
          alt={props.title}
          className="collection__img"
        />
      </figure>
      <div className="collection__title">
        <h1>
          <span className="text-description">{props.collection.title}</span>
        </h1>
        <div className="icons">
          <div>
            <PlayIcon />
            <AddIcon />
          </div>
          <ShowMoreIcon onClick={handleOpenModal} />
        </div>
      </div>
    </div>
  );
};
export default Movie;
