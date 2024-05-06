import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState, useContext } from 'react';
import { LanguageContext } from '../localize/LanguageContext';
import { StackParams } from '../type/type';
import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Header from 'Header';
import SubmitButton from './SubmitButton';

type FrameFifteenRouteProp = RouteProp<StackParams, 'FrameFifteen'>;
type FrameFifteenProps = NativeStackScreenProps<StackParams, "FrameFifteen">

export default function FrameFifteen( { route, navigation }: FrameFifteenProps) {
  const language = useContext(LanguageContext);
  const [injuryLocation, setInjuryLocation] = useState('');

  const handleSubmission = () => {
    navigation.navigate("FrameSixteen", {
      injury_location: injuryLocation,
    });
  }

  return (
    <View style={styles.container}>
      <Header text={language.title.injury_location} />
      <View style={styles.buttons}>
      <Pressable style={styles.button} onPress={() => setInjuryLocation("head")}>
          <Text style={styles.buttonText}>{language.injury_location.head}</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => setInjuryLocation("stomach")}>
          <Text style={styles.buttonText}>{language.injury_location.stomach}</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => setInjuryLocation("arm")}>
          <Text style={styles.buttonText}>{language.injury_location.arm}</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => setInjuryLocation("leg")}>
          <Text style={styles.buttonText}>{language.injury_location.leg}</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => setInjuryLocation("back")}>
          <Text style={styles.buttonText}>{language.injury_location.back}</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => setInjuryLocation("shoulder")}>
          <Text style={styles.buttonText}>{language.injury_location.shoulder}</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => setInjuryLocation("neck")}>
          <Text style={styles.buttonText}>{language.injury_location.neck}</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => setInjuryLocation("chest")}>
          <Text style={styles.buttonText}>{language.injury_location.chest}</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => setInjuryLocation("eyes/ears/nose")}>
          <Text style={styles.buttonText}>{language.injury_location.eyes_ears_nose}</Text>
        </Pressable>
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
  buttons: {
    marginHorizontal: 10,
    padding: 10,
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  button: {
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor:'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 25,
    textAlign: 'center',
    color: 'black'
  }
});