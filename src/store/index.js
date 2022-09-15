import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "store/movies/movies-slice";
import tvSlice from "store/tv/tv-slice";
import genresSlice from "store/genres/genres-slice";
import detailSlice from "store/details/detail-slice";
import searchSlice from "store/search/search-slice";
import topRatedSlice from "store/top/top-rated-slice";
import advancesSlice from "store/advances/advances-slice";

const store = configureStore({
  reducer: {
    moviesCollection: moviesSlice.reducer,
    genresCollection: genresSlice.reducer,
    detailsCollection: detailSlice.reducer,
    tvCollection: tvSlice.reducer,
    searchResults: searchSlice.reducer,
    topRatedCollection: topRatedSlice.reducer,
    advancesCollection: advancesSlice.reducer,
  },
});

export default store;
