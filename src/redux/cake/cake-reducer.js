import { initialCakeState } from "./cake-state";
import { ADD_CAKE, SELL_CAKE } from "./cake-action-types";

export const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case ADD_CAKE:
      return {
        ...state,
        noOfCake: state.noOfCake + 1,
      };
    case SELL_CAKE:
      return {
        ...state,
        noOfCake: state.noOfCake - 1,
        sales: state.sales + 1,
      };
    default:
      return state;
  }
};
