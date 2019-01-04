import { createAction, handleActions } from "redux-actions";
import TodosService from "../services/todos";

/**
 * Default State.
 */
const defaultState = {
  list: [],
  postResult: false
};

/**
 * Action Creator.
 */
const GET_TODOS_LIST_DONE = "GET_TODOS_LIST_DONE";
const POST_TODO_DONE = "POST_TODO_DONE";
const actions = {
  getTodosListDone: createAction(GET_TODOS_LIST_DONE),
  postTodoDone: createAction(POST_TODO_DONE)
};

/**
 * Reducer.
 */
const reducers = handleActions(
  /**
   * reducerMap.
   */
  {
    [GET_TODOS_LIST_DONE]: (state, { payload }) => ({ list: payload }),
    [POST_TODO_DONE]: (state, { payload }) => ({ postResult: payload })
  },
  /**
   * defaultState.
   */
  defaultState
);

/**
 * Tasks.
 */
export const postTodo = parameter => {
  return async dispatch => {
    const response = await TodosService.postTodo(parameter);
    if (response.length > 0) {
      dispatch(actions.postTodoDone(true));
    }
  }
};

export const getTodosList = () => {
  return async dispatch => {
    const response = await TodosService.getTodoList();
    if (response.length > 0) {
      dispatch(actions.getTodosListDone(response));
    }
  }
};

export default { actions, reducers }
