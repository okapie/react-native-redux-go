import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../modules"

export const store = createStore(
  rootReducer.reducer,
  compose(
    applyMiddleware(thunk)
  )
);
