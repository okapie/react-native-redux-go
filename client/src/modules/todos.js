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
    "Go to the hospital."
  ],
  postResult: false
};

/**
 * Action Creator.
 */
const GET_TODOS_LIST = "GET_TODOS_LIST";
const POST_TODO = "POST_TODO";
const actions = {
  getTodosList: createAction(GET_TODOS_LIST),
  postTodo: createAction(POST_TODO)
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
    }),
    [POST_TODO]: (state, action) => ({
      postResult: action.payload
    })
  },
  /**
   * defaultState.
   */
  defaultState
);

export default { actions, reducers }
