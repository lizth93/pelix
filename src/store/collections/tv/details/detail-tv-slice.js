import { createSlice } from "@reduxjs/toolkit";

const videosTvSlice = createSlice({
  name: "videosTvCollection",
  initialState: {
    videosTv: [],
    isLoadingTv: true,
    errorTv: null,
  },
  reducers: {
    setVideos(state, action) {
      state.videosTv = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoadingTv = action.payload;
    },
    setError(state, action) {
      state.errorTv = action.payload;
    },
  },
});

export const videosTvActions = videosTvSlice.actions;
export default videosTvSlice;
