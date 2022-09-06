import { createSlice } from "@reduxjs/toolkit";

const topRatedSlice = createSlice({
  name: "topRatedCollection",
  initialState: {
    topRatedMovies: [],
    topRatedTv: [],
    isLoadingTop: true,
    error: null,
  },
  reducers: {
    setTopRated(state, action) {
      state.topRatedMovies = action.payload.topRatedMovies;
      state.topRatedTv = action.payload.topRatedTv;
    },
    setIsLoading(state, action) {
      state.isLoadingTop = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const topRatedActions = topRatedSlice.actions;
export default topRatedSlice;
