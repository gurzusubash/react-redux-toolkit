import { ADD_ICE_CREAM, SALE_ICE_CREAM } from "./icecream-action-types";

export const addIceCream = () => {
  return {
    type: ADD_ICE_CREAM,
  };
};

export const saleIceCream = () => {
  return {
    type: SALE_ICE_CREAM,
  };
};
