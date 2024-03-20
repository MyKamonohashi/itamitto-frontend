import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FrameOne from './components/FrameOne'
import FrameTwo from './components/FrameTwo';
import FrameThree from './components/FrameThree';
import FrameFour from './components/FrameFour';
import FrameFive from './components/FrameFive';
import FrameSix from './components/FrameSix';
import FrameSeven from './components/FrameSeven';
import FrameEight from './components/FrameEight';
import FrameTen from './components/FrameTen';
import FrameEleven from './components/FrameEleven';
import { LanguageType } from './type/type';

export type StackParams = {
  FrameOne: {language: LanguageType}
  FrameTwo: {reason: string, language: LanguageType , isEnabled: boolean}
  FrameThree: { symptom: string, language: LanguageType ,isEnabled: boolean}
  FrameFour: { pain_location: string, language: LanguageType, isEnabled: boolean}
  FrameFive: { pain_description: string, language: LanguageType, isEnabled: boolean}
  FrameSix: { hurt: string, language: LanguageType, isEnabled: boolean}
  FrameSeven: { reason: string, language: LanguageType, isEnabled: boolean}
  FrameEight: { reason: string, language: LanguageType, isEnabled: boolean}
  
  FrameTen: { pain_duration: string, language: LanguageType, isEnabled: boolean}
  FrameEleven: { allergies_name: string, language: LanguageType, isEnabled: boolean}
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
      <Stack.Screen name="FrameFive" component={FrameFive}/>
      <Stack.Screen name="FrameSix" component={FrameSix}/>
      <Stack.Screen name="FrameSeven" component={FrameSeven}/>
      <Stack.Screen name="FrameEight" component={FrameEight}/>

      <Stack.Screen name="FrameTen" component={FrameTen}/>
      <Stack.Screen name="FrameEleven" component={FrameEleven}/>
    </Stack.Navigator>
    <StatusBar style="auto" />
  </NavigationContainer>
  );
}

registerRootComponent(App);