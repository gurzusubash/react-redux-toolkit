import { ADD_CAKE, SELL_CAKE } from "./cake-action-types";

export const addCake = () => {
  return {
    type: ADD_CAKE,
  };
};

export const saleCake = () => {
  return {
    type: SELL_CAKE,
  };
};
