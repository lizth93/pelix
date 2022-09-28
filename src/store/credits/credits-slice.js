import { createSlice } from "@reduxjs/toolkit";

const creditsSlice = createSlice({
  name: "creditsCollection",
  initialState: {
    credits: [],
    isLoading: true,
    error: null,
  },
  reducers: {
    setCredits(state, action) {
      state.credits = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});
export const creditsActions = creditsSlice.actions;
export default creditsSlice;
