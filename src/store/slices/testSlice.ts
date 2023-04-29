import { createSlice, createAsyncThunk, PayloadAction, AnyAction } from '@reduxjs/toolkit';

import { ETestStatus } from '../../data/types';
import { getTextFromAPI } from '../../API/TextAPI';
import { getTestArray } from '../../utils';

interface IScheduleState {
  textData: string[],
  status: ETestStatus,
  currentIndex: number,
  startTime: number,
  endTime: number,
  quality: number,
  speed: number,
  interval: number,
  error: string
}

const initialState: IScheduleState = {
  textData: [],
  status: ETestStatus.SLEEP,
  currentIndex: 0,
  startTime: 0,
  endTime: 0,
  quality: 0,
  speed: 0,
  interval: 0,
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
      if (state.textData.length === 0) return;
      
      if (action.payload === state.textData[state.currentIndex]) {
        state.currentIndex += 1;
        
        const condition = state.currentIndex === state.textData.length;
        state.status = condition ? ETestStatus.FINISH : ETestStatus.WAITING;
        state.endTime = condition ? Date.now() : 0;
        return;
      }
      
      if (state.status === ETestStatus.WAITING) {
        state.quality -= (100 / state.textData.length);
      }

      state.status = ETestStatus.ERROR;
    },
    setSpeed(state) {
      const now = Date.now();
      const time = now - state.startTime;
      state.speed = state.currentIndex / (time / 60000)
    },
    finish(state) {
      state.status = ETestStatus.SLEEP;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchText.pending, (state) => {
        state.status = ETestStatus.LOADING;
      })
      .addCase(fetchText.fulfilled, (state, action) => {
        state.status = ETestStatus.WAITING;
        state.textData = getTestArray(action.payload);
        state.currentIndex = 0;
        state.quality = 100;
        state.speed = 0;
        state.startTime = Date.now();
        state.endTime = 0;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.status = ETestStatus.API_ERROR;
        state.error = action.payload;
      });
  },
});

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}

export default testSlice.reducer;

export const { check, setSpeed, finish } = testSlice.actions;
