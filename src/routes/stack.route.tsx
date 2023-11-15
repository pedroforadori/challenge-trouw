import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/home'
import EditTask from '../screens/editTask'

const Stack = createNativeStackNavigator()

export default function StackRoute(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='home'
                component={Home}
            />
            <Stack.Screen
                name='edit-task'
                component={EditTask}
            />
        </Stack.Navigator>
    )
}