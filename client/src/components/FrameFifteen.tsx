import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState, useContext } from 'react';
import { StackParams, LanguageContext } from '../App';
import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
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
      <Text>{language.title.injury_location}</Text>
      <View>
      <Pressable onPress={() => setInjuryLocation("head")}>
          <Text>{language.injury_location.head}</Text>
        </Pressable>
        <Pressable onPress={() => setInjuryLocation("stomach")}>
          <Text>{language.injury_location.stomach}</Text>
        </Pressable>
        <Pressable onPress={() => setInjuryLocation("arm")}>
          <Text>{language.injury_location.arm}</Text>
        </Pressable>
        <Pressable onPress={() => setInjuryLocation("leg")}>
          <Text>{language.injury_location.leg}</Text>
        </Pressable>
        <Pressable onPress={() => setInjuryLocation("back")}>
          <Text>{language.injury_location.back}</Text>
        </Pressable>
        <Pressable onPress={() => setInjuryLocation("shoulder")}>
          <Text>{language.injury_location.shoulder}</Text>
        </Pressable>
        <Pressable onPress={() => setInjuryLocation("neck")}>
          <Text>{language.injury_location.neck}</Text>
        </Pressable>
        <Pressable onPress={() => setInjuryLocation("chest")}>
          <Text>{language.injury_location.chest}</Text>
        </Pressable>
        <Pressable onPress={() => setInjuryLocation("eyes/ears/nose")}>
          <Text>{language.injury_location.eyes_ears_nose}</Text>
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
});