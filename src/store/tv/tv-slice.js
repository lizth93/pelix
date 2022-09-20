import { createSlice } from "@reduxjs/toolkit";

const tvSlice = createSlice({
  name: "tvCollection",
  initialState: {
    tvPopular: [],
    isLoadingTv: true,
    error: null,
    currentPage: 1,
    totalPages: null,
    totalResults: null,
  },
  reducers: {
    setTvPopular(state, action) {
      state.tvPopular = action.payload;
    },

    setIsLoading(state, action) {
      state.isLoadingTv = action.payload;
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

export const tvActions = tvSlice.actions;
export default tvSlice;
