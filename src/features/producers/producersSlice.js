import { createSlice } from '@reduxjs/toolkit';
import { mockData } from '../../mockData';

const initialState = {
  producers: mockData.producers,
  status: 'idle',
  error: null,
};

const producersSlice = createSlice({
  name: 'producers',
  initialState,
  reducers: {
    addProducer: (state, action) => {
      state.producers.push({
        ...action.payload,
        id: Date.now().toString(),
      });
    },
    updateProducer: (state, action) => {
      const { id, producerData } = action.payload;
      const index = state.producers.findIndex((producer) => producer.id === id);
      if (index !== -1) {
        state.producers[index] = { ...state.producers[index], ...producerData };
      }
    },
    deleteProducer: (state, action) => {
      state.producers = state.producers.filter((producer) => producer.id !== action.payload);
    },
  },
});

export const { addProducer, updateProducer, deleteProducer } = producersSlice.actions;
export default producersSlice.reducer; 