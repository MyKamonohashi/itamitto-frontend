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
  const [tests, setTests] = useState('');

  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [checked6, setChecked6] = useState(false);
  const [checked7, setChecked7] = useState(false);
  const [checked8, setChecked8] = useState(false);
  const [checked9, setChecked9] = useState(false);

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
      <Text>{language.title.test}</Text>
      <View>
        <CheckBox checked={checked1} title={language.test.blood_test} onPress={() => {setChecked1(!checked1)}}/>
        <CheckBox checked={checked2} title={language.test.urine_test} onPress={() => {setChecked2(!checked2)}}/>
        <CheckBox checked={checked3} title={language.test.allergy_test} onPress={() => {setChecked3(!checked3)}}/>
        <CheckBox checked={checked4} title={language.test.ultrasound} onPress={() => {setChecked4(!checked4)}}/>
        <CheckBox checked={checked5} title={language.test.STD_test} onPress={() => {setChecked5(!checked5)}}/>
        <CheckBox checked={checked6} title={language.test.X_ray} onPress={() => {setChecked6(!checked6)}}/>
        <CheckBox checked={checked7} title={language.test.mammogram} onPress={() => {setChecked7(!checked7)}}/>
        <CheckBox checked={checked8} title={language.test.pap_smear} onPress={() => {setChecked8(!checked8)}}/>
        <CheckBox checked={checked9} title={language.test.MRI_CAT_scan} onPress={() => {setChecked8(!checked9)}}/>
      </View>
      <LanguageToggle onValueChange={toggleSwitch} isEnabled={isEnabled}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
});