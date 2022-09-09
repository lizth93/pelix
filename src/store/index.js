import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./collections/movies/movies-slice";
import tvSlice from "./collections/tv/tv-slice";
import genresSlice from "./genres/genres-slice";
import detailSlice from "./collections/details/detail-slice";
import searchSlice from "./search/search-slice";
import topRatedSlice from "./collections/top/top-rated-slice";
import advancesSlice from "./collections/advances/advances-slice";

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
