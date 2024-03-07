import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Switch } from 'react-native';
import { useState } from 'react';
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

  return (
    <View style={styles.container}>
      <Text>{language.title.reason}</Text>
      <View>
        <Button title={language.reason.illness}></Button>
        <Button title={language.reason.injury}></Button>
        <Button title={language.reason.vaccine}></Button>
        <Button title={language.reason.test}></Button>
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