import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FrameOne from './components/FrameOne'
import FrameTwo from './components/FrameTwo';
import FrameThree from './components/FrameThree';

import { FrameOneLanguageType, FrameTwoLanguageType, FrameThreeLanguageType } from './type/type';

export type StackParams = {
  FrameOne: {language: FrameOneLanguageType}
  FrameTwo: {reason: string, language: FrameTwoLanguageType , isEnabled: boolean}
  FrameThree: { symptom: string, language: FrameThreeLanguageType ,isEnabled: boolean}
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
        <Stack.Screen name="FrameThree" component={FrameThree}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(App);