import { useEffect } from "react";
import { useDispatch } from "react-redux";

//own
import { getTvPopular } from "store/tv/get-tv-popular";
export default function useInitialiceTv() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTvPopular());
  }, [dispatch]);
}
