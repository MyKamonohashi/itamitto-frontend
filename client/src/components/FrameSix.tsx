import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import { useState, useContext } from 'react';
import { LanguageContext } from '../localize/LanguageContext';
import { StackParams } from '../type/type';
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
        <Text style={styles.about}>{language.duration.about}</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={setText}
          value={text}
          placeholder='#'
          inputMode="numeric"
        />
        <View style={styles.buttons}>
          <Pressable style={styles.button} onPress={() => {setInterval('hour(s)')}}>
            <Text style={styles.text}>{language.duration.hours}</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => {setInterval('day(s)')}}>
            <Text style={styles.text}>{language.duration.days}</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => {setInterval('week(s)')}}>
            <Text style={styles.text}>{language.duration.weeks}</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => {setInterval('month(s)')}}>
            <Text style={styles.text}>{language.duration.months}</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => {setInterval('year(s)')}}>
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
  buttons: {
    gap: 10
  },
  button: {
    borderRadius: 10,
    padding: 8,
    minWidth: 100,
    backgroundColor: '#039388',
  },
  about: {
    color: 'black',
    fontSize: 25
  },
  text: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center'
  },
  textInput: {
    height: 40,
    width: 60,
    borderWidth: 1,
    borderRadius: 3,
    padding: 10,
    fontSize: 25
  }
});