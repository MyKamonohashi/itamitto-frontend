import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import { useState } from 'react';

type LanguageType = {
  title: {
    symptoms_duration: string
  },
  button: {
    submit: string
  },
  duration: {
    about: string,
    days: string,
    hours: string,
    weeks: string,
    months: string,
    years: string
  }
}

interface FrameProps {
  language: LanguageType,
}

export default function FrameSix({language}: FrameProps) {
  const [text, setText] = useState('');
  
  return (
    <View style={styles.container}>
      <Text>{language.title.symptoms_duration}</Text>
      <View style={styles.inputs}>
        <Text>{language.duration.about}</Text>
        <TextInput
          onChangeText={setText}
          value={text}
          placeholder='#'
          inputMode="numeric"
        />
        <View>
          <Pressable>
            <Text>{language.duration.hours}</Text>
          </Pressable>
          <Pressable>
            <Text>{language.duration.days}</Text>
          </Pressable>
          <Pressable>
            <Text>{language.duration.weeks}</Text>
          </Pressable>
          <Pressable>
            <Text>{language.duration.months}</Text>
          </Pressable>
          <Pressable>
            <Text>{language.duration.years}</Text>
          </Pressable>
        </View>
      </View>
      <Pressable>
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
  inputs: {
    flexDirection: 'row'
  }
});