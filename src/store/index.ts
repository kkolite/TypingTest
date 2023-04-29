import { configureStore } from '@reduxjs/toolkit';
import testReducer from './slices/testSlice';
import topReducer from './slices/topSlice';

const store = configureStore({
  reducer: {
    test: testReducer,
    top: topReducer
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
