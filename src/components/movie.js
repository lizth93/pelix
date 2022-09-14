import React from "react";
import styled from "styled-components";
//own
import { BASE_URL_IMG, SMALL_SIZE } from "../constants";
import Film from "./films";

const Movie = (props) => {
  const handleModalMoviesCollection = (id) => {
    props.onClickModal("movies", id);
  };

  return (
    <div className={props.className}>
      <Film
        src={`${BASE_URL_IMG}${SMALL_SIZE}${props.collection.poster_path}`}
        title={props.collection.title}
        withHover={props.withHover}
        detailMode={props.detailMode}
        onClick={props.onClick}
        collection={props.collection}
        withMoreIcon={true}
        onClickModal={handleModalMoviesCollection}
      />
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
