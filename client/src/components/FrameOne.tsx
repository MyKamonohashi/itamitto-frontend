import { StyleSheet, Text, View, Pressable, Switch } from 'react-native';
import { useState, useEffect } from 'react';
import en from '../localize/en.json';
import ja from '../localize/ja.json'

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
      <Text style={styles.header}>{language.title.reason}</Text>
      <View style={styles.buttons}>
        <Pressable>
          <Text style={styles.buttonText}>{language.reason.illness}</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.buttonText}>{language.reason.injury}</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.buttonText}>{language.reason.vaccine}</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.buttonText}>{language.reason.test}</Text>
        </Pressable>
      </View>
      <View style={styles.switch}>
        <Text>EN</Text>
        <Switch 
          onValueChange={toggleSwitch}
          value={isEnabled} /> 
        <Text>JP</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  header: {
    backgroundColor: '#B9F3E4',
    fontSize: 35,
    textAlign: 'center',
    width:'100%',
    paddingBottom: 20,
    paddingTop: 20,
    marginTop: -25
  },
  buttons: {
    gap: 30
  },
  buttonText: {
    fontSize: 35,
    textAlign: 'center',
  },
  switch: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  }
});