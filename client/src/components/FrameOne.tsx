import { StyleSheet, Text, View, Pressable, Switch } from 'react-native';
import { useState, useEffect } from 'react';
import en from '../localize/en.json';
import ja from '../localize/ja.json'

export default function FrameOne() {
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
        <Pressable style={styles.buttonOne}>
          <Text style={styles.buttonText}>{language.reason.illness}</Text>
        </Pressable>
        <Pressable style={styles.buttonTwo}>
          <Text style={styles.buttonText}>{language.reason.injury}</Text>
        </Pressable>
        <Pressable style={styles.buttonThree}>
          <Text style={styles.buttonText}>{language.reason.vaccine}</Text>
        </Pressable>
        <Pressable style={styles.buttonFour}>
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
    minWidth:'100%',
    paddingBottom: 20,
    paddingTop: 20,
    marginTop: 10
  },
  buttons: {
    gap: 30
  },
  buttonText: {
    fontSize: 35,
    textAlign: 'center',
  },
  buttonOne: {
    borderRadius: 10,
    backgroundColor:'#EA8FEA',
    padding: 20,
    minWidth: 300
  },
  buttonTwo: {
    borderRadius: 10,
    backgroundColor:'#FFAACF',
    padding: 20,
    minWidth: 300
  },
  buttonThree: {
    borderRadius: 10,
    backgroundColor:'#F6E6C2',
    padding: 20,
    minWidth: 300
  },
  buttonFour: {
    borderRadius: 10,
    backgroundColor:'#8ACDD7',
    padding: 20,
    minWidth: 300
  },
  switch: {
    marginBottom: 40,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  }
});