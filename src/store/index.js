import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./collections/movies/movies-slice";
import tvSlice from "./collections/tv/tv-slice";
import genresSlice from "./genres/genres-slice";
import videosSlice from "./trailers/videos-slice";

const store = configureStore({
  reducer: {
    moviesCollection: moviesSlice.reducer,
    genresCollection: genresSlice.reducer,
    videosCollection: videosSlice.reducer,
    tvCollection: tvSlice.reducer,
  },
});

export default store;
