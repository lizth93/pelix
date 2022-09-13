import { createSlice } from "@reduxjs/toolkit";

const advancesSlice = createSlice({
  name: "advancesCollection",
  initialState: {
    advanceFilms: [],
    isLoadingAdvances: true,
    errorAdvances: null,
    currentFilm: null,
  },
  reducers: {
    setAdvanceVideos(state, action) {
      state.advanceFilms = action.payload.advanceFilms;
      state.currentFilm = action.payload.currentFilm;
    },
    setClearAdvances(state) {
      state.advanceFilms = [];
    },
    setIsLoading(state, action) {
      state.isLoadingAdvances = action.payload;
    },
    setError(state, action) {
      state.errorAdvances = action.payload;
    },
  },
});
export const advancesAction = advancesSlice.actions;
export default advancesSlice;
