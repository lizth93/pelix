import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "moviesCollection",
  initialState: {
    movies: [],
    isLoading: true,
    error: null,
    currentPage: 1,
    totalPages: null,
    totalResults: null,
  },
  reducers: {
    setMovies(state, action) {
      state.movies = action.payload;
    },
    setCurrentMovie(state, action) {
      state.currentMovie = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setTotalPages(state, action) {
      state.totalPages = action.payload;
    },
    setTotalResults(state, action) {
      state.totalResults = action.payload;
    },
  },
});

export const moviesActions = moviesSlice.actions;
export default moviesSlice;
