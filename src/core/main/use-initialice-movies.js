import { useEffect } from "react";
import { useDispatch } from "react-redux";
//own
import { getMovies } from "store/movies/get-movies";

export default function useInitialiceMovies() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);
}
