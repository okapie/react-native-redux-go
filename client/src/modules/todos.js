import { createAction } from "redux-actions";

/**
 * Action Creator.
 */
const GET_TODOS_LIST = "GET_TODOS_LIST";
const actions = {
  getTodosList: createAction(GET_TODOS_LIST)
};
