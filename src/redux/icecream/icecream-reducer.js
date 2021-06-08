import { initialIceCreamState as initialState } from "./icecream-state";
import { createSlice } from "@reduxjs/toolkit";

const reducer = createSlice({
  name: "iceCreamReducer",
  initialState,
  reducers: {
    addIceCream: (state) => {
      state.noOfIceCream++;
    },
    saleIceCream: (state) => {
      state.noOfIceCream--;
      state.sales++;
    },
  },
});

export const { addIceCream, saleIceCream } = reducer.actions;
export const iceCreamReducer = reducer.reducer;
