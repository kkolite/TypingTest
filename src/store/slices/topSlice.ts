import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ESort } from "../../data/types";

interface ITop {
  name: string;
  time: number;
  speed: number;
  quality: number;
}

interface IScheduleState {
  top: ITop[];
  sortType: ESort;
  isHigher: boolean;
}

const initialState: IScheduleState = {
  top: [],
  sortType: ESort.SPEED,
  isHigher: true,
};

const topSlice = createSlice({
  name: "top",
  initialState,
  reducers: {
    addResult(state, action: PayloadAction<ITop>) {
      state.top.push(action.payload);
    },
    clearTop(state) {
      state.top = [];
    },
    setSort(state, action: PayloadAction<ESort>) {
      const sort = action.payload;
      state.top = state.isHigher
        ? state.top.sort((a, b) => a[sort] - b[sort])
        : state.top.sort((a, b) => b[sort] - a[sort]);
      state.isHigher = !state.isHigher;
      state.sortType = sort;
    },
  },
});

export default topSlice.reducer;

export const { addResult, clearTop, setSort } = topSlice.actions;
