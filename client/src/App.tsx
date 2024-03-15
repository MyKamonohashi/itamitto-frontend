import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FrameOne from './components/FrameOne'
import FrameTwo from './components/FrameTwo';

export type StackParams = {
  FrameOne: undefined
  FrameTwo: {reason: string}
}

const Stack = createNativeStackNavigator<StackParams>();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="FrameOne"
        screenOptions={{
        headerTitle: 'itamitto',
        headerTitleAlign: 'center'
      }}>
        <Stack.Screen name="FrameOne" component={FrameOne}/>
        <Stack.Screen name="FrameTwo" component={FrameTwo}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(App);