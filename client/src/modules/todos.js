import { createAction, handleActions } from "redux-actions";

/**
 * Default State.
 */
const defaultState = {
  list: {
    isFetching: false,
    data: null
  }
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
      list: {
        isFetching: false,
        data: action.payload
      }
    })
  },
  /**
   * defaultState.
   */
  defaultState
);
