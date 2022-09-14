import React from "react";
import { useSelector } from "react-redux";

// Own
import Spinner from "components/spinner";
import TopRatedComponent from "core/main/top-rated/top-rated";

const TopRated = (props) => {
  const { topRatedMovies, isLoadingTop } = useSelector(
    ({ topRatedCollection }) => ({
      topRatedMovies: topRatedCollection.topRatedMovies,
      isLoadingTop: topRatedCollection.isLoadingTop,
    })
  );

  if (isLoadingTop) return <Spinner />;

  return (
    <TopRatedComponent topRated={props.category} collection={topRatedMovies} />
  );
};

export default TopRated;
