import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./collections/movies/movies-slice";
import videosTvSlice from "./collections/tv/details/detail-tv-slice";
import tvSlice from "./collections/tv/tv-slice";
import genresSlice from "./genres/genres-slice";
import detailSlice from "./collections/movies/details/detail-slice";
import searchSlice from "./search/search-slice";
import topRatedSlice from "./collections/top/top-rated-slice";

const store = configureStore({
  reducer: {
    moviesCollection: moviesSlice.reducer,
    genresCollection: genresSlice.reducer,
    detailsCollection: detailSlice.reducer,
    tvCollection: tvSlice.reducer,
    videosTvCollection: videosTvSlice.reducer,
    searchResults: searchSlice.reducer,
    topRatedCollection: topRatedSlice.reducer,
  },
});

export default store;
