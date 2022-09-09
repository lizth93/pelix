import { useEffect } from "react";
import { useDispatch } from "react-redux";
//own
import { getAdvancesFilm } from "../../store/collections/advances/get-advances";
import { CATEGORY_STREAMING } from "../../config";

export default function useInitialiceAdvances(category = CATEGORY_STREAMING) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdvancesFilm(category));
  }, [dispatch, category]);
}
