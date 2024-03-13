import { registerRootComponent } from 'expo';
import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import en from './localize/en';
import ja from './localize/ja';
import FrameOne from 'FrameOne';
import FrameThree from 'FrameThree';
import LanguageToggle from 'LanguageToggle';

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
      <FrameOne language={language}/>
      <LanguageToggle isEnabled={isEnabled} onValueChange={toggleSwitch}/>
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
});

registerRootComponent(App);