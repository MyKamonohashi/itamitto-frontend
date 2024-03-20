import { registerRootComponent } from 'expo';
import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import en from './localize/en';
import ja from './localize/ja';
import LanguageToggle from 'LanguageToggle';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FrameOne from './components/FrameOne'
import FrameTwo from './components/FrameTwo';
import FrameThree from './components/FrameThree';
import FrameFour from './components/FrameFour';
import FrameSix from './components/FrameSix';

import {  FrameOneLanguageType, 
          FrameTwoLanguageType, 
          FrameThreeLanguageType,
          FrameFourLanguageType,
          FrameSixLanguageType
        } from './type/type';

export type StackParams = {
  FrameOne: {language: FrameOneLanguageType}
  FrameTwo: {reason: string, language: FrameTwoLanguageType , isEnabled: boolean}
  FrameThree: { symptom: string, language: FrameThreeLanguageType ,isEnabled: boolean}
  FrameFour: { pain_location: string, language: FrameFourLanguageType, isEnabled: boolean}
  FrameSix: { symptom_duration: string, language: FrameSixLanguageType, isEnabled: boolean}
}

const Stack = createNativeStackNavigator<StackParams>();

export default function App() {
  const [language, setLanguage] = useState(en);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const handleLanguage = () => {
    if (!isEnabled) {
      setLanguage(en);
    } else {
      setLanguage(ja);
    }
  }

  useEffect(() => {
    handleLanguage();
  }, [isEnabled]);

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
    </Stack.Navigator>
  </NavigationContainer>
    // <View style={styles.container}>
    //   <FrameFour language={language}/>
    //   <LanguageToggle isEnabled={isEnabled} onValueChange={toggleSwitch}/>
    //   <StatusBar style="auto" />
    // </View>
  );
}


registerRootComponent(App);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});