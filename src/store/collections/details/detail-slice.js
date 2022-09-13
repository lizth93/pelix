import { createSlice } from "@reduxjs/toolkit";

const detailSlice = createSlice({
  name: "detailsCollection",
  initialState: {
    videos: [],
    currentFilm: [],
    isLoading: true,
    error: null,
    showModal: false,
    currentVideo: null,
  },
  reducers: {
    setDetails(state, action) {
      state.videos = action.payload.videos;
      state.currentFilm = action.payload.currentMovie;
    },
    setClearDetails(state) {
      state.videos = [];
      state.currentFilm = [];
      state.currentVideo = null;
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
    setIsLoadingCurrentfilm(state, action) {
      state.currentFilm = action.payload;
    },
    setCurrentVideo(state, action) {
      state.currentVideo = action.payload;
    },
  },
});

export const detailActions = detailSlice.actions;
export default detailSlice;
