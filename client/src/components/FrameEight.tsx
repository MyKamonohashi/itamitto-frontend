import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState, useEffect, useContext } from 'react';
import { CheckBox } from '@rneui/themed';
import en from '../localize/en';
import ja from '../localize/ja';
import Header from 'Header';
import LanguageToggle from './LanguageToggle';
import SubmitButton from './SubmitButton';
import { StackParams, LanguageContext } from '../App';
import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type FrameEightRouteProp = RouteProp<StackParams, 'FrameEight'>;
type FrameEightProps = NativeStackScreenProps<StackParams, 'FrameEight'>;

export default function FrameEight({ route, navigation }: FrameEightProps) {
  const language = useContext(LanguageContext);
  const { reason } = route.params;
  const [vaccines, setVaccines] = useState('');

  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);

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

  const handleSubmission = () => {
    handleDataInput();
    // to FrameNine
    navigation.navigate("FrameNine", {
      vaccine: vaccines
    });
  }
  
  return (
    <View style={styles.container}>
      <Header text={language.reason.vaccine}/>
      <View>
      <CheckBox checked={checked1} title={language.vaccine.influenza} onPress={() => {setChecked1(!checked1)}}/>
        <CheckBox checked={checked2} title={language.vaccine.COVID_19} onPress={() => {setChecked2(!checked2)}}/>
        <CheckBox checked={checked3} title={language.vaccine.HPV} onPress={() => {setChecked3(!checked3)}}/>
        <CheckBox checked={checked4} title={language.vaccine.measles} onPress={() => {setChecked4(!checked4)}}/>
      </View>
      <SubmitButton language={language} onPress={handleSubmission}/>
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