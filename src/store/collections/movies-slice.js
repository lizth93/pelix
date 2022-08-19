import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "moviesCollection",
  initialState: {
    movies: [],
    isLoading: true,
    error: null,
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
  },
});

export const moviesActions = moviesSlice.actions;
export default moviesSlice;
