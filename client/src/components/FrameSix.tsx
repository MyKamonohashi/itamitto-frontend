import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import { useState, useContext } from 'react';
import { LanguageContext, StackParams } from '../App';
import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Header from 'Header';
import SubmitButton from './SubmitButton';

type FrameSixRouteProp = RouteProp<StackParams, 'FrameSix'>;
type FrameSixProps = NativeStackScreenProps<StackParams, 'FrameSix'>; 

export default function FrameSix({ route, navigation }: FrameSixProps) {
  const language = useContext(LanguageContext);
  const [text, setText] = useState('');
  const [interval, setInterval] = useState('')
  const [painDuration, setDuration] = useState('');

  const { hurt } = route.params;
  console.log("hurt🤩", hurt);

  const handleDataInput = () => {
    setDuration(text + " " + interval);
  }

  const handleSubmission = () => {
    // to FrameNine
    handleDataInput();
    navigation.navigate("FrameNine", {
      pain_duration: painDuration,
    });
  }

  return (
    <View style={styles.container}>
      <Header text={language.title.symptoms_duration}/>
      <View style={styles.inputs}>
        <Text style={styles.text}>{language.duration.about}</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={setText}
          value={text}
          placeholder='#'
          inputMode="numeric"
        />
        <View>
          <Pressable onPress={() => {setInterval('hour(s)')}}>
            <Text style={styles.text}>{language.duration.hours}</Text>
          </Pressable>
          <Pressable onPress={() => {setInterval('day(s)')}}>
            <Text style={styles.text}>{language.duration.days}</Text>
          </Pressable>
          <Pressable onPress={() => {setInterval('week(s)')}}>
            <Text style={styles.text}>{language.duration.weeks}</Text>
          </Pressable>
          <Pressable onPress={() => {setInterval('month(s)')}}>
            <Text style={styles.text}>{language.duration.months}</Text>
          </Pressable>
          <Pressable onPress={() => {setInterval('year(s)')}}>
            <Text style={styles.text}>{language.duration.years}</Text>
          </Pressable>
        </View>
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
  inputs: {
    flexDirection: 'row',
    gap: 20
  },
  text: {
    fontSize: 25
  },
  textInput: {
    height: 35,
    width: 55,
    borderWidth: 1,
    borderRadius: 3,
    padding: 10,
  }
});