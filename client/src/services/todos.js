import { client } from "../libs/httpClient";

export default class TodosService {
  static async getTodoList() {
    return await client()
      .get(`/todos`)
      .then(response => response.data)
      .catch(error => error.response.data)
  }
}
