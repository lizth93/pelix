import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
//own
import { getTvPopular } from "store/tv/get-tv-popular";
export default function useInitialiceTv() {
  const dispatch = useDispatch();
  const page = useParams()?.numPage;

  useEffect(() => {
    dispatch(getTvPopular(page));
  }, [dispatch, page]);
}
