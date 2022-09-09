import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
//own
import { getSearch } from "../../store/search/get-search";

export default function useInitialiceSearchTerm() {
  const dispatch = useDispatch();
  const { search } = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(search);
    const searchTerm = searchParams?.get("q");
    dispatch(getSearch(searchTerm));
  }, [dispatch, search]);
}
