import { combineReducers } from "redux";
import Todos from "./todos";

/**
 * Root Reducer.
 */
export default {
  action: {
    ...Todos.actions
  },
  reducer: combineReducers({
    todos: Todos.reducers
  })
}
