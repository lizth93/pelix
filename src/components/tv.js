import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
//own
import { BASE_URL_IMG, SMALL_SIZE } from "constants";
import Film from "components/films";

const Tv = (props) => {
  const history = useHistory();
  const handleModalTvCollection = (id) => {
    props.onClickModal("tv", id);
  };

  const handleClick = (id) => {
    history.push(`/tv/${id}/detail`);
  };
  return (
    <div className={props.className}>
      <Film
        src={`${BASE_URL_IMG}${SMALL_SIZE}${props.collection.poster_path}`}
        title={props.collection.name}
        withHover={props.withHover}
        detailMode={props.detailMode}
        withMoreIcon={true}
        collection={props.collection}
        onClickModal={handleModalTvCollection}
        onClickFilm={handleClick}
      />
    </div>
  );
};
export default styled(Tv)`
  display: flex;
  align-items: center;

  .icons {
    display: flex;
    align-items: center;
  }
`;
