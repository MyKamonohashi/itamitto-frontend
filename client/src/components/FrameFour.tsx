import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { CheckBox } from '@rneui/themed';

type LanguageType = {
  title: {
    pain_description: string
  },
  pain_description: {
    sharp: string,
    throbbing: string,
    aching: string,
    burning: string,
    cramping: string,
    numbness: string,
    constant: string,
    sudden: string
  },
  button: {
    submit: string
  }
}

interface FrameProps {
  language: LanguageType,
}

export default function FrameFour({language}: FrameProps) {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [checked6, setChecked6] = useState(false);
  const [checked7, setChecked7] = useState(false);
  const [checked8, setChecked8] = useState(false);

  return (
    <View style={styles.container}>
      <Text>{language.title.pain_description}</Text>
      <View>
        <CheckBox checked={checked1} title={language.pain_description.sharp} onPress={() => {setChecked1(!checked1)}}/>
        <CheckBox checked={checked2} title={language.pain_description.throbbing} onPress={() => {setChecked2(!checked2)}}/>
        <CheckBox checked={checked3} title={language.pain_description.aching} onPress={() => {setChecked3(!checked3)}}/>
        <CheckBox checked={checked4} title={language.pain_description.burning} onPress={() => {setChecked4(!checked4)}}/>
        <CheckBox checked={checked5} title={language.pain_description.cramping} onPress={() => {setChecked5(!checked5)}}/>
        <CheckBox checked={checked6} title={language.pain_description.numbness} onPress={() => {setChecked6(!checked6)}}/>
        <CheckBox checked={checked7} title={language.pain_description.constant} onPress={() => {setChecked7(!checked7)}}/>
        <CheckBox checked={checked8} title={language.pain_description.sudden} onPress={() => {setChecked8(!checked8)}}/>
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
});