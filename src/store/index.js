import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./collections/movies-slice";

const store = configureStore({
  reducer: {
    moviesCollection: moviesSlice.reducer,
  },
});

export default store;
