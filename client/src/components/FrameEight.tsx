import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import { CheckBox } from '@rneui/themed';
import en from '../localize/en';
import ja from '../localize/ja';
import LanguageToggle from './LanguageToggle';
import SubmitButton from './SubmitButton';
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

  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);

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

  const handleDataInput = () => {
    const result = [];
    if (checked1) {
      result.push(language.vaccine.influenza);
    }
    if (checked2) {
      result.push(language.vaccine.COVID_19);
    }
    if (checked3) {
      result.push(language.vaccine.HPV);
    }
    if (checked4) {
      result.push(language.vaccine.measles);
    }
    setVaccines(result.join('/'));
  }

  return (
    <View style={styles.container}>
      <Text>{language.reason.vaccine}</Text>
      <View>
      <CheckBox checked={checked1} title={language.vaccine.influenza} onPress={() => {setChecked1(!checked1)}}/>
        <CheckBox checked={checked2} title={language.vaccine.COVID_19} onPress={() => {setChecked2(!checked2)}}/>
        <CheckBox checked={checked3} title={language.vaccine.HPV} onPress={() => {setChecked3(!checked3)}}/>
        <CheckBox checked={checked4} title={language.vaccine.measles} onPress={() => {setChecked4(!checked4)}}/>
      </View>
      <LanguageToggle onValueChange={toggleSwitch} isEnabled={isEnabled}/>
      <Pressable
      // to FrameNine
        onPress={() => {
          handleDataInput();
          navigation.navigate("FrameNine", {
            vaccine: vaccines,
            language: language,
            isEnabled: isEnabled})
        }}
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