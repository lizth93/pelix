import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getGenres } from "store/genres/get-genres";

//own
export default function useInitialiceGenres() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);
}
