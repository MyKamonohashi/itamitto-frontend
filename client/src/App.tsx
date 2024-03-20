import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FrameOne from './components/FrameOne'
import FrameTwo from './components/FrameTwo';
import FrameThree from './components/FrameThree';
import FrameFour from './components/FrameFour';
import FrameSix from './components/FrameSix';
import FrameSeven from './components/FrameSeven';
import { LanguageType } from './type/type';

export type StackParams = {
  FrameOne: {language: LanguageType}
  FrameTwo: {reason: string, language: LanguageType , isEnabled: boolean}
  FrameThree: { symptom: string, language: LanguageType ,isEnabled: boolean}
  FrameFour: { pain_location: string, language: LanguageType, isEnabled: boolean}
  FrameSix: { pain_description: string, language: LanguageType, isEnabled: boolean}
  FrameSeven: { reason: string, language: LanguageType, isEnabled: boolean}
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
      <Stack.Screen name="FrameFour" component={FrameFour}/>
      <Stack.Screen name="FrameSix" component={FrameSix}/>
      <Stack.Screen name="FrameSeven" component={FrameSeven}/>
    </Stack.Navigator>
    <StatusBar style="auto" />
  </NavigationContainer>
  );
}

registerRootComponent(App);