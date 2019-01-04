import { client } from "../libs/httpClient";

export default class TodosService {
  static async getTodoList() {
    return await client()
      .get(`/todos`)
      .then(response => response.data)
      .catch(error => error.response.data)
  }

  static async postTodo(parameter) {
    return await client()
      .post(`/todo`, parameter)
      .then(response => response.data)
      .catch(error => error.response.data)
  }
}
