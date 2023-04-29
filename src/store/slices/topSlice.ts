import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ITop {
  name: string,
  time: number,
  speed: number,
  quality: number
}

interface IScheduleState {
  top: ITop[]
}

const initialState: IScheduleState = {
  top: []
};

const testSlice = createSlice({
  name: 'top',
  initialState,
  reducers: {
    addResult(state, action: PayloadAction<ITop>) {
      state.top.push(action.payload);
    },
    clearTop(state) {
      state.top = [];
    }
  }
});

export default testSlice.reducer;

export const { addResult, clearTop } = testSlice.actions;
