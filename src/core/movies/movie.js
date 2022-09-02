import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { videosActions } from "../../store/collections/movies/trailers/videos-slice";
// import { useHistory } from "react-router-dom";
import styled from "styled-components";
//own
import { BASE_URL_IMG, SIZE_IMAGE } from "../../config";
import ShowMoreIcon from "../../icons/more";
import Films from "../../components/films.styled";

import RadialProgressBar from "../../components/radial-progress-bar";

const Movie = (props) => {
  const handleModalMoviesCollection = (id) => {
    props.onClickModal(id);
  };

  return (
    <div className={props.className}>
      <Films
        src={`${BASE_URL_IMG}${SIZE_IMAGE}${props.collection.poster_path}`}
        title={props.collection.title}
        onClick={props.onClick}
      >
        <ShowMoreIcon
          onClick={() => handleModalMoviesCollection(props.collection.id)}
        />
        <RadialProgressBar
          className="radial-bar"
          value={props.collection.vote_average * 10}
        />
      </Films>
    </div>
  );
};
export default styled(Movie)`
  display: flex;
  align-items: center;

  .bNftMJ .icons {
    display: flex;
    align-items: center;
  }
`;
