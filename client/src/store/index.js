import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../modules"

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk)
  )
);
