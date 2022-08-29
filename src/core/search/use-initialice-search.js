import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { getSearch } from "../../store/search/get-search";

export default function useInitialiceSearchTerm() {
  const dispatch = useDispatch();
  const { search } = useLocation();

  console.log(search, "what search have");

  useEffect(() => {
    const searchParams = new URLSearchParams(search);
    const searchTerm = searchParams?.get("q");
    console.log(searchTerm, "searchTErm");
    dispatch(getSearch(searchTerm));
  }, [dispatch, search]);
}
