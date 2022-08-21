import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./collections/movies-slice";
import genresSlice from "./genres/genres-slice";

const store = configureStore({
  reducer: {
    moviesCollection: moviesSlice.reducer,
    genresCollection: genresSlice.reducer,
  },
});

export default store;
