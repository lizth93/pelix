import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
//own
import { getMovies } from "store/movies/get-movies";

export default function useInitialiceMovies() {
  const dispatch = useDispatch();
  const page = useParams()?.numPage;

  useEffect(() => {
    dispatch(getMovies(page));
  }, [dispatch, page]);
}
