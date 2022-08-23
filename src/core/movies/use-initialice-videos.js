import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovie } from "../../store/collections/movies/get-movie";
import { getVideosMovies } from "../../store/collections/movies/trailers/get-videos";
import { videosActions } from "../../store/collections/movies/trailers/videos-slice";
import { getTvVideos } from "../../store/collections/tv/trailers/get-tv-videos";

export default function useInitialiceVideos() {
  const dispatch = useDispatch();
  const typeCollection = useParams()?.typeCollection;
  const collectionId = useParams()?.collectionId;

  useEffect(() => {
    if (collectionId) {
      dispatch(getMovie(collectionId));
      dispatch(videosActions.setVideos([]));
      if (typeCollection === "movies") {
        dispatch(getVideosMovies(collectionId));
      }
      if (typeCollection === "tv") {
        dispatch(getTvVideos(collectionId));
      }
    }
  }, [dispatch, collectionId, typeCollection]);
}
