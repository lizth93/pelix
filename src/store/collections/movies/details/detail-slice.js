import { createSlice } from "@reduxjs/toolkit";

const detailSlice = createSlice({
  name: "detailsCollection",
  initialState: {
    videos: [],
    currentMovie: [],
    isLoading: true,
    error: null,
    showModal: false,
  },
  reducers: {
    setDetails(state, action) {
      state.videos = action.payload.videos;
      state.currentMovie = action.payload.currentMovie;
    },
    setClearDetails(state) {
      state.videos = [];
      state.currentMovie = [];
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
  },
});

export const detailActions = detailSlice.actions;
export default detailSlice;
