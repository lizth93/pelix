import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchResults",
  initialState: {
    results: [],
    isLoading: true,
    error: null,
    totalPages: null,
    totalResults: null,
  },
  reducers: {
    setSearchResults(state, action) {
      state.results = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setTotalPages(state, action) {
      state.totalPages = action.payload;
    },
    setTotalResults(state, action) {
      state.totalResults = action.payload;
    },
  },
});
export const searchActions = searchSlice.actions;
export default searchSlice;
