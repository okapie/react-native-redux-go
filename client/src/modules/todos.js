import { createAction, handleActions } from "redux-actions";
import TodosService from "../services/todos";

/**
 * Default State.
 */
const defaultState = {
  list: [],
  postResult: false,
  deleteResult: false
};

/**
 * Action Creator.
 */
const GET_TODOS_LIST_DONE = "GET_TODOS_LIST_DONE";
const POST_TODO_DONE = "POST_TODO_DONE";
const DELETE_TODO_DONE = "DELETE_TODO_DONE";
const actions = {
  getTodosListDone: createAction(GET_TODOS_LIST_DONE),
  postTodoDone: createAction(POST_TODO_DONE),
  deleteTodoDone: createAction(DELETE_TODO_DONE)
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
    [POST_TODO_DONE]: (state, { payload }) => ({ postResult: payload }),
    [DELETE_TODO_DONE]: (state, { payload }) => ({ deleteResult: payload })
  },
  /**
   * defaultState.
   */
  defaultState
);

/**
 * Tasks.
 */
export const getTodosList = () => {
  return async dispatch => {
    const response = await TodosService.getTodoList();
    if (response.length > 0) {
      dispatch(actions.getTodosListDone(response));
    }
  }
};

export const postTodo = parameter => {
  return async dispatch => {
    const response = await TodosService.postTodo(parameter);
    if (response.length > 0) {
      dispatch(actions.postTodoDone(true));
    }
  }
};

export const deleteTodo = parameter => {
  return async dispatch => {
    const response = await TodosService.deleteTodo(parameter);
    if (response.length > 0) {
      dispatch(actions.deleteTodoDone(true));
    }
  }
};

export default { actions, reducers }
