import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '../features/movies/moviesSlice';
import actorsReducer from '../features/actors/actorsSlice';
import producersReducer from '../features/producers/producersSlice';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    actors: actorsReducer,
    producers: producersReducer,
  },
});

export default store;

 