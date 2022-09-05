import { createSlice } from "@reduxjs/toolkit";

const topRatedSlice = createSlice({
  name: "topRatedCollection",
  initialState: {
    topRated: [],
    isLoadingTop: true,
    error: null,
  },
  reducers: {
    setTopRated(state, action) {
      state.topRated = action.payload;
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
