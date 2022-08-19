import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMovies } from "../../store/collections/get-movies";

export default function useInitialiceMovies() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);
}
