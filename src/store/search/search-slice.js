import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchResults",
  initialState: {
    multipleResults: [],
    moviesResults: [],
    tvResults: [],
    isLoading: true,
    error: null,
    totalPagesMultiples: null,
    totalPagesMovies: null,
    totalPagesTv: null,
    totalResultsMultiple: null,
    totalResultsMovies: null,
    totalResultsTv: null,
  },
  reducers: {
    setSearchResults(state, action) {
      state.multipleResults = action.payload.multiple;
      state.moviesResults = action.payload.movies;
      state.tvResults = action.payload.tv;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setTotalPages(state, action) {
      state.totalPagesMultiples = action.payload.multiple;
      state.totalPagesMovies = action.payload.movies;
      state.totalPagesTv = action.payload.tv;
    },
    setTotalResults(state, action) {
      state.totalResultsMultiple = action.payload.multiple;
      state.totalResultsMovies = action.payload.movies;
      state.totalResultsTv = action.payload.tv;
    },
  },
});
export const searchActions = searchSlice.actions;
export default searchSlice;
