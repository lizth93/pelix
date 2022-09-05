import { useEffect } from "react";
import { useDispatch } from "react-redux";
//own
import { getTopRated } from "../../store/collections/top/get-top-rated";
export default function useInitialiceTopRated() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopRated());
  }, [dispatch]);
}
