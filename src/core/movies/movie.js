import { BASE_URL_IMG, SIZE_IMAGE } from "../../config";
import AddIcon from "../../icons/add";
import ShowMoreIcon from "../../icons/more";
import PlayIcon from "../../icons/play";
import RenderModal from "../../components/moda.styled";
import React from "react";

const Movie = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

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
            <AddIcon variant="primary" onClick={() => setModalShow(true)} />
          </div>
          <ShowMoreIcon />
        </div>
      </div>
      {modalShow && (
        <RenderModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          movie={props.movie}
          id={props.movie.id}
        />
      )}
    </div>
  );
};
export default Movie;
