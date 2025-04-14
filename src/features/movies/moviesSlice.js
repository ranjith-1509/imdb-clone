import { createSlice } from '@reduxjs/toolkit';
import { mockData } from '../../mockData';

const initialState = {
  movies: mockData.movies,
  status: 'idle',
  error: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.movies.push({
        ...action.payload,
        id: Date.now().toString(),
      });
    },
    updateMovie: (state, action) => {
      const { id, movieData } = action.payload;
      const index = state.movies.findIndex((movie) => movie.id === id);
      if (index !== -1) {
        state.movies[index] = { ...state.movies[index], ...movieData };
      }
    },
    deleteMovie: (state, action) => {
      state.movies = state.movies.filter((movie) => movie.id !== action.payload);
    },
  },
});

export const { addMovie, updateMovie, deleteMovie } = moviesSlice.actions;
export default moviesSlice.reducer; 