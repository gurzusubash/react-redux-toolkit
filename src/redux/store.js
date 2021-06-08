import { createStore, combineReducers } from "redux";
import { cakeReducer } from "./cake/cake-reducer";
import { iceCreamReducer } from "./icecream/icecream-reducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer);

export default store;
