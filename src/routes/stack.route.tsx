import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import EditTask from "../screens/editTask";

const Stack = createNativeStackNavigator();

export default function StackRoute() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="editTask" component={EditTask} />
    </Stack.Navigator>
  );
}
