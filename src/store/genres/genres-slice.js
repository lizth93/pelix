import { createSlice } from "@reduxjs/toolkit";

const genresSlice = createSlice({
  name: "genresCollection",
  initialState: {
    genres: [],
    isLoading: true,
    error: null,
  },
  reducers: {
    setGenres(state, action) {
      state.genres = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const genresActions = genresSlice.actions;
export default genresSlice;
