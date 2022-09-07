import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAdvancesFilm } from "../../store/collections/advances/get-advances";

export default function useInitialiceAdvances() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdvancesFilm());
  }, [dispatch]);
}
