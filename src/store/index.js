import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "store/collections/movies/movies-slice";
import tvSlice from "store/collections/tv/tv-slice";
import genresSlice from "store/genres/genres-slice";
import detailSlice from "store/collections/details/detail-slice";
import searchSlice from "store/search/search-slice";
import topRatedSlice from "store/collections/top/top-rated-slice";
import advancesSlice from "store/collections/advances/advances-slice";

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
