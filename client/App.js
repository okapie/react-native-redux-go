import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/store";
import Todos from "./src/components/todos";

const App = () => (
  <Provider store={store}>
    <Todos />
  </Provider>
);

export default App;
