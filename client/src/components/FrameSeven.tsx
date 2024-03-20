import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { CheckBox } from '@rneui/themed';
import LanguageToggle from './LanguageToggle';
import en from '../localize/en';
import ja from '../localize/ja';
import { StackParams } from '../App';
import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type FrameSevenRouteProp = RouteProp<StackParams, 'FrameSeven'>;
type FrameSevenProps = NativeStackScreenProps<StackParams, 'FrameSeven'>;

export default function FrameSeven({ route, navigation }: FrameSevenProps) {

  const { reason } = route.params;
  console.log('reason: ', reason);

  const [language, setLanguage] = useState(route.params.language);
  const [isEnabled, setIsEnabled] = useState(route.params.isEnabled);
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
      <Text>{language.title.test}</Text>
      <LanguageToggle onValueChange={toggleSwitch} isEnabled={isEnabled}/>
    </View>
  )
}