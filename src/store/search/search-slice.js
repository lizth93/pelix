import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchResults",
  initialState: {
    multipleResults: [],
    moviesResults: [],
    tvResults: [],
    personsResults: [],

    isLoading: true,
    error: null,

    totalPagesMultiples: null,
    totalPagesMovies: null,
    totalPagesTv: null,
    totalPagesPersons: null,

    totalResultsMultiple: null,
    totalResultsMovies: null,
    totalResultsTv: null,
    totalResultsPersons: null,
  },
  reducers: {
    setSearchResults(state, action) {
      state.multipleResults = action.payload.multiple;
      state.moviesResults = action.payload.movies;
      state.tvResults = action.payload.tv;
      state.personsResults = action.payload.persons;
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
      state.totalPagesPersons = action.payload.persons;
    },
    setTotalResults(state, action) {
      state.totalResultsMultiple = action.payload.multiple;
      state.totalResultsMovies = action.payload.movies;
      state.totalResultsTv = action.payload.tv;
      state.totalResultsPersons = action.payload.persons;
    },
  },
});
export const searchActions = searchSlice.actions;
export default searchSlice;
