import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import { StackParams } from '../App';
import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import LanguageToggle from '../components/LanguageToggle';
import SubmitButton from './SubmitButton';
import en from '../localize/en';
import ja from '../localize/ja';

type FrameSixRouteProp = RouteProp<StackParams, 'FrameSix'>;
type FrameSixProps = NativeStackScreenProps<StackParams, 'FrameSix'>; 

export default function FrameSix({ route, navigation }: FrameSixProps) {
  const [language, setLanguage] = useState(route.params.language);
  const [isEnabled, setIsEnabled] = useState(route.params.isEnabled);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [text, setText] = useState('');
  const [interval, setInterval] = useState('')
  const [painDuration, setDuration] = useState('');

  const { hurt } = route.params;
  console.log("hurt🤩", hurt);

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
    setDuration(text + " " + interval);
  }

  const handleSubmission = () => {
    // to FrameNine
    handleDataInput();
    navigation.navigate("FrameNine", {
      pain_duration: painDuration,
      language: language,
      isEnabled: isEnabled
    });
  }

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
          <Pressable onPress={() => {setInterval('hour(s)')}}>
            <Text>{language.duration.hours}</Text>
          </Pressable>
          <Pressable onPress={() => {setInterval('day(s)')}}>
            <Text>{language.duration.days}</Text>
          </Pressable>
          <Pressable onPress={() => {setInterval('week(s)')}}>
            <Text>{language.duration.weeks}</Text>
          </Pressable>
          <Pressable onPress={() => {setInterval('month(s)')}}>
            <Text>{language.duration.months}</Text>
          </Pressable>
          <Pressable onPress={() => {setInterval('year(s)')}}>
            <Text>{language.duration.years}</Text>
          </Pressable>
        </View>
      </View>
      <SubmitButton language={language} onPress={handleSubmission}/>
      <LanguageToggle onValueChange={toggleSwitch} isEnabled={isEnabled}/>
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