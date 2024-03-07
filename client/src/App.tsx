import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Switch } from 'react-native';
import { useState, useEffect } from 'react';
import en from './localize/en.json';
import ja from './localize/ja.json'

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
    <View style={styles.container}>
      <Text>{language.title.reason}</Text>
      <View>
        <Pressable><Text>{language.reason.illness}</Text></Pressable>
        <Pressable><Text>{language.reason.injury}</Text></Pressable>
        <Pressable><Text>{language.reason.vaccine}</Text></Pressable>
        <Pressable><Text>{language.reason.test}</Text></Pressable>
      </View>
      <View style={styles.switch}>
        <Text>EN</Text>
        <Switch 
          onValueChange={toggleSwitch}
          value={isEnabled} /> 
        <Text>JP</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  switch: {
    flexDirection: 'row'
  }
});

registerRootComponent(App);