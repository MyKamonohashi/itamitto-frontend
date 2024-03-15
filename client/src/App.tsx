import { registerRootComponent } from 'expo';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FrameOne from './components/FrameOne'
import FrameTwo from './components/FrameTwo';

import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import en from './localize/en';
import ja from './localize/ja';
import FrameThree from 'FrameThree';
import LanguageToggle from 'LanguageToggle';

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
    {/* <View style={styles.container}>
      <View>
        <FrameOne />
      </View>
      <StatusBar style="auto" />
    </View> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }, 
// });

registerRootComponent(App);