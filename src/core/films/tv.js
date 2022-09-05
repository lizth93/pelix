import { BASE_URL_IMG, SIZE_IMAGE } from "../../config";

import React from "react";

import Film from "../../components/films";

const Tv = (props) => {
  const handleModalTvCollection = (id) => {
    props.onClickModal("tv", id);
  };

  return (
    <Film
      src={`${BASE_URL_IMG}${SIZE_IMAGE}${props.collection.poster_path}`}
      title={props.collection.name}
      withHover={props.withHover}
      detailMode={props.detailMode}
      withMoreIcon={true}
      collection={props.collection}
      onClickModal={handleModalTvCollection}
    />
  );
};
export default Tv;
