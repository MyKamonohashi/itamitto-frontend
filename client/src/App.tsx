import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createContext, useState, useEffect } from 'react';
import FrameOne from './components/FrameOne'
import FrameTwo from './components/FrameTwo';
import FrameThree from './components/FrameThree';
import FrameFour from './components/FrameFour';
import FrameFive from './components/FrameFive';
import FrameSix from './components/FrameSix';
import FrameSeven from './components/FrameSeven';
import FrameEight from './components/FrameEight';
import FrameNine from './components/FrameNine';
import FrameTen from './components/FrameTen';
import FrameEleven from './components/FrameEleven';

import FrameFifteen from './components/FrameFifteen';
import FrameSixteen from './components/FrameSixteen';
import LanguageToggle from './components/LanguageToggle';
import en from './localize/en';
import ja from './localize/ja';

export type StackParams = {
  FrameOne: {}
  FrameTwo: { reason: string }
  FrameThree: { symptoms: string }
  FrameFour: { pain_location: string }
  FrameFive: { pain_description: string }
  FrameSix: { symptoms?: string, hurt?: string }
  FrameSeven: { reason: string }
  FrameEight: { reason: string }
  FrameNine: { pain_duration?: string, test?: string, vaccine?: string, injury_description?: string }
  FrameTen: { takingMedications: boolean, currentMedications: string, dosage: string }
  FrameEleven: { allergies_name: string }

  FrameFifteen: { reason: string }
  FrameSixteen: { injury_location: string }
}

export const LanguageContext = createContext(en);
const Stack = createNativeStackNavigator<StackParams>();

export default function App() {
  const [language, setLanguage] = useState(en); 
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  useEffect(() => {
    if (isEnabled) {
      setLanguage(ja);
    } else {
      setLanguage(en);
    }
  }, [isEnabled]);

  return (
    <>
     <LanguageContext.Provider value={ language }>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="FrameOne"
          screenOptions={{
            headerTitle: 'itamitto',
            headerTitleAlign: 'center'
          }}>
          <Stack.Screen name="FrameOne" component={FrameOne} />
          <Stack.Screen name="FrameTwo" component={FrameTwo}/>
          <Stack.Screen name="FrameThree" component={FrameThree}/>
          <Stack.Screen name="FrameFour" component={FrameFour}/>
          <Stack.Screen name="FrameFive" component={FrameFive}/>
          <Stack.Screen name="FrameSix" component={FrameSix}/>
          <Stack.Screen name="FrameSeven" component={FrameSeven}/>
          <Stack.Screen name="FrameEight" component={FrameEight}/>
          <Stack.Screen name="FrameNine" component={FrameNine}/>
          <Stack.Screen name="FrameTen" component={FrameTen}/>
          <Stack.Screen name="FrameEleven" component={FrameEleven}/>

          <Stack.Screen name="FrameSixteen" component={FrameSixteen}/>
          <Stack.Screen name="FrameFifteen" component={FrameFifteen}/>
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
      <LanguageToggle onValueChange={toggleSwitch} isEnabled={isEnabled} />

     </LanguageContext.Provider>
    </>
  );
}

registerRootComponent(App);