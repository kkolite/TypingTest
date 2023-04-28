import { createSlice, createAsyncThunk, PayloadAction, AnyAction } from '@reduxjs/toolkit';

import { ETestStatus } from '../../data/types';
import { getTextFromAPI } from '../../API/TextAPI';
import { getTestArray } from '../../utils';

interface IScheduleState {
  textData: string[],
  status: ETestStatus,
  currentIndex: number,
  startTime: number,
  quality: number,
  isLoading: boolean,
  isFinish: boolean,
  error: string
}

const initialState: IScheduleState = {
  textData: [],
  status: ETestStatus.WAITING,
  currentIndex: 0,
  startTime: 0,
  quality: 0,
  isLoading: false,
  isFinish: false,
  error: ''
};

export const fetchText = createAsyncThunk('test/fetchText', async () => {
  const res = await getTextFromAPI();
  return res;
});

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    check(state, action: PayloadAction<string>) {
      if (action.payload === state.textData[state.currentIndex]) {
        state.currentIndex += 1;
        state.status = ETestStatus.WAITING;
        state.isFinish = state.currentIndex === state.textData.length;
        return;
      }

      if (state.status !== ETestStatus.ERROR) {
        state.quality = state.quality - (1 / state.textData.length);
      }

      state.status = ETestStatus.ERROR;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchText.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchText.fulfilled, (state, action) => {
        state.isLoading = false;
        state.textData = getTestArray(action.payload);
        state.currentIndex = 0;
        state.quality = 100;
        state.startTime = Date.now();
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}

export default testSlice.reducer;

export const { check } = testSlice.actions;
