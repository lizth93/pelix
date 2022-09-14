import { useEffect } from "react";
import { useDispatch } from "react-redux";
//own
import { getGenres } from "store/genres/get-genres";
export default function useInitialiceGenres() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);
}
