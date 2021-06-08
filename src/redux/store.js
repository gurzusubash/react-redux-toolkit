import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { cakeReducer } from "./cake/cake-reducer";
import { iceCreamReducer } from "./icecream/icecream-reducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools:
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
});

export default store;
