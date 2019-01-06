import { createStackNavigator } from "react-navigation";
import Todos from "./src/components/todos";
import Introduction from "./src/components/introduction";

const AppNavigator = createStackNavigator({
  Home: { screen: Todos },
  Introduction: { screen: Introduction }
});

export default AppNavigator;
