import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import propertiesReducer from '../features/properties/propertiesSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    properties: propertiesReducer,
  },
});
