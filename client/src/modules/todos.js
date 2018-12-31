import { createAction, handleActions } from "redux-actions";

/**
 * Default State.
 */
const defaultState = {
  // list: [],
  // TODO: Below one is to test.
  list: [
    "Go shopping.",
    "Go to the office.",
    "Go the hospital."
  ]
};

/**
 * Action Creator.
 */
const GET_TODOS_LIST = "GET_TODOS_LIST";
const actions = {
  getTodosList: createAction(GET_TODOS_LIST)
};

/**
 * Reducer.
 */
const reducers = handleActions(
  /**
   * reducerMap.
   */
  {
    [GET_TODOS_LIST]: (state, action) => ({
      list: action.payload
    })
  },
  /**
   * defaultState.
   */
  defaultState
);

export default { actions, reducers }
