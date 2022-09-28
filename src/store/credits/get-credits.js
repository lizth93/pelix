//own
import { URL_CREDITS } from "constants";
import { URL_LENGUAGE } from "constants";
import { URL_BASE_TV } from "constants";
import { API_KEY } from "constants";
import { URL_BASE_MOVIES } from "constants";
import { creditsActions } from "./credits-slice";

export const getCredits = (type, id) => {
  return async (dispatch) => {
    try {
      dispatch(creditsActions.setIsLoading(true));
      const fetchResult = await fetchCredits(type, id);

      if (fetchResult.cast.length === 0) {
        dispatch(creditsActions.setIsLoading(false));
        throw new Error("No results found");
      }

      dispatch(creditsActions.setCredits(fetchResult.cast));
      dispatch(creditsActions.setIsLoading(false));

      console.log(fetchResult, "what have credits");
    } catch (error) {
      dispatch(creditsActions.setIsLoading(false));
      dispatch(creditsActions.setError(error.message));
      console.log(error);
    }
  };
};

async function fetchCredits(type, id) {
  const response = await fetch(getUrl(type, id));

  if (!response.ok) {
    throw new Error("Something went wrong loading Credits");
  }
  return response.json();
}

function getUrl(type, id) {
  let fetchUrl;
  if (type === "movies") {
    fetchUrl = `${URL_BASE_MOVIES}${id}${URL_CREDITS}${API_KEY}&${URL_LENGUAGE}`;
  } else {
    fetchUrl = `${URL_BASE_TV}${id}${URL_CREDITS}${API_KEY}&${URL_LENGUAGE}`;
  }

  return fetchUrl;
}
