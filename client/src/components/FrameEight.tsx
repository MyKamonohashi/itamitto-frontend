import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import en from '../localize/en';
import ja from '../localize/ja';
import LanguageToggle from './LanguageToggle';
import { StackParams } from '../App';
import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type FrameEightRouteProp = RouteProp<StackParams, 'FrameEight'>;
type FrameEightProps = NativeStackScreenProps<StackParams, 'FrameEight'>;

export default function FrameEight({ route, navigation }: FrameEightProps) {
  const { reason } = route.params;
  const [language, setLanguage] = useState(route.params.language);
  const [isEnabled, setIsEnabled] = useState(route.params.isEnabled);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [vaccines, setVaccines] = useState('');

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
      <Text>{language.reason.vaccine}</Text>
      <LanguageToggle onValueChange={toggleSwitch} isEnabled={isEnabled}/>
      <Pressable
      // uncomment when FrameNine is created to navigate
        // onPress={() => {
        //   handleDataInput();
        //   navigation.navigate("FrameNine", {
        //     vaccine: vaccines,
        //     language: language,
        //     isEnabled: isEnabled})
        // }}
      >
        <Text>{language.button.submit}</Text>
      </Pressable>
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
})