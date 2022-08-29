import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./collections/movies/movies-slice";
import videosTvSlice from "./collections/tv/trailers/videos-tv-slice";
import tvSlice from "./collections/tv/tv-slice";
import genresSlice from "./genres/genres-slice";
import videosSlice from "./collections/movies/trailers/videos-slice";
import searchSlice from "./search/search-slice";

const store = configureStore({
  reducer: {
    moviesCollection: moviesSlice.reducer,
    genresCollection: genresSlice.reducer,
    videosCollection: videosSlice.reducer,
    tvCollection: tvSlice.reducer,
    videosTvCollection: videosTvSlice.reducer,
    searchResults: searchSlice.reducer,
  },
});

export default store;
