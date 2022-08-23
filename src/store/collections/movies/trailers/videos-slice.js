import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "videosCollection",
  initialState: {
    videos: [],
    isLoading: true,
    error: null,
    showModal: false,
  },
  reducers: {
    setVideos(state, action) {
      state.videos = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setModalShow(state, action) {
      state.showModal = action.payload;
    },
  },
});

export const videosActions = videosSlice.actions;
export default videosSlice;
