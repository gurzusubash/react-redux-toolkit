import { initialCakeState as initialState } from "./cake-state";
import { createSlice } from "@reduxjs/toolkit";

const reducer = createSlice({
  name: "cakeReducer",
  initialState,
  reducers: {
    addCake: (state) => {
      state.noOfCake++;
    },
    saleCake: (state) => {
      state.noOfCake--;
      state.sales++;
    },
  },
});

export const { addCake, saleCake } = reducer.actions;
export const cakeReducer = reducer.reducer;
