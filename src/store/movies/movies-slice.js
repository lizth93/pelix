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
    filterByGenre: "all",
  },
  reducers: {
    setMovies(state, action) {
      state.movies = action.payload;
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
    setFilterByGenre(state, action) {
      state.filterByGenre = action.payload;
    },
  },
});

export const moviesActions = moviesSlice.actions;
export default moviesSlice;
