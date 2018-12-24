import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";

// TODO: Below is a temporary variable.
const reducer = {};

export const store = createStore(
  // TODO: Must define rootReducer, then replace 'reducer' with new one.
  reducer,
  compose(
    applyMiddleware(thunk)
  )
);
