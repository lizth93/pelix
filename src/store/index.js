import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./collections/movies-slice";
import genresSlice from "./genres/genres-slice";
import videosSlice from "./trailers/videos-slice";

const store = configureStore({
  reducer: {
    moviesCollection: moviesSlice.reducer,
    genresCollection: genresSlice.reducer,
    videosCollection: videosSlice.reducer,
  },
});

export default store;
