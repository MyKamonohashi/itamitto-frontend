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
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
  }

  return (
    <View style={styles.container}>
      <Text>{language.title.pain_description}</Text>
      <View>
        <CheckBox checked={checked} title={language.pain_description.sharp} onPress={handleChecked}/>
        <CheckBox checked={checked} title={language.pain_description.throbbing}/>
        <CheckBox checked={checked} title={language.pain_description.aching}/>
        <CheckBox checked={checked} title={language.pain_description.burning}/>
        <CheckBox checked={checked} title={language.pain_description.cramping}/>
        <CheckBox checked={checked} title={language.pain_description.numbness}/>
        <CheckBox checked={checked} title={language.pain_description.numbness}/>
        <CheckBox checked={checked} title={language.pain_description.constant}/>
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