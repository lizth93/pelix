import React from "react";
import styled from "styled-components";
//own
import { BASE_URL_IMG, SMALL_SIZE } from "constants";
import Film from "components/films";

const Tv = (props) => {
  const handleModalTvCollection = (id) => {
    props.onClickModal("tv", id);
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
      />
    </div>
  );
};
export default styled(Tv)`
  display: flex;
  align-items: center;

  .bNftMJ .icons {
    display: flex;
    align-items: center;
  }
`;
