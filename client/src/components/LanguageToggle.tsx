import { StyleSheet, Text, View, Switch } from 'react-native';
import { useState, useEffect } from 'react';
import en from '../localize/en.json';
import ja from '../localize/ja.json';

export default function LanguageToggle() {
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
    <View>
      <Text>EN</Text>
      <Switch 
        onValueChange={toggleSwitch}
        value={isEnabled} /> 
      <Text>JP</Text>
    </View>
  );
}