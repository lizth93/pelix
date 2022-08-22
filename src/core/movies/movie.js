import { BASE_URL_IMG, SIZE_IMAGE } from "../../config";
import AddIcon from "../../icons/add";
import ShowMoreIcon from "../../icons/more";
import PlayIcon from "../../icons/play";
import RenderModal from "../../components/modal.styled";
import React from "react";

const Movie = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className={props.className}>
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
          <ShowMoreIcon variant="primary" onClick={() => setModalShow(true)} />
        </div>
      </div>
      {modalShow && (
        <RenderModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          collection={props.collection}
          id={props.collection.id}
        />
      )}
    </div>
  );
};
export default Movie;
