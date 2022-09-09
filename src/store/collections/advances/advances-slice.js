import { createSlice } from "@reduxjs/toolkit";

const advancesSlice = createSlice({
  name: "advancesCollection",
  initialState: {
    advanceFilms: [],
    isLoadingAdvances: true,
    errorAdvances: null,
    showModalAdvances: false,
  },
  reducers: {
    setAdvanceVideos(state, action) {
      state.advanceFilms = action.payload;
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
    setModalShow(state, action) {
      state.showModalAdvances = action.payload;
    },
  },
});
export const advancesAction = advancesSlice.actions;
export default advancesSlice;
