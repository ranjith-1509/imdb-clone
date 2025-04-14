import { createSlice } from '@reduxjs/toolkit';
import { mockData } from '../../mockData';

const initialState = {
  actors: mockData.actors,
  status: 'idle',
  error: null,
};

const actorsSlice = createSlice({
  name: 'actors',
  initialState,
  reducers: {
    addActor: (state, action) => {
      state.actors.push({
        ...action.payload,
        id: Date.now().toString(),
      });
    },
    updateActor: (state, action) => {
      const { id, actorData } = action.payload;
      const index = state.actors.findIndex((actor) => actor.id === id);
      if (index !== -1) {
        state.actors[index] = { ...state.actors[index], ...actorData };
      }
    },
    deleteActor: (state, action) => {
      state.actors = state.actors.filter((actor) => actor.id !== action.payload);
    },
  },
});

export const { addActor, updateActor, deleteActor } = actorsSlice.actions;
export default actorsSlice.reducer; 