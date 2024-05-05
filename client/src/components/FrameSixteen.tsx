import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState, useContext } from 'react';
import { LanguageContext } from '../App';
import { StackParams } from '../type/type';
import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Header from 'Header';
import SubmitButton from './SubmitButton';

type FrameSixteenRouteProp = RouteProp<StackParams, 'FrameSixteen'>;
type FrameSixteenProps = NativeStackScreenProps<StackParams, "FrameSixteen">

export default function FrameSixteen( { route, navigation }: FrameSixteenProps) {
  const language = useContext(LanguageContext);
  const [injuryDescription, setInjuryDescription] = useState('');

  const handleSubmission = () => {
    // go to FrameNine
    navigation.navigate("FrameNine", {
      injury_description: injuryDescription,
    });
  }

  return (
    <View style={styles.container}>
      <Header text={language.title.injury_description} />
      <View>
      <Pressable onPress={() => setInjuryDescription("cut/gash")}>
          <Text>{language.injury_description.cut_gash}</Text>
        </Pressable>
        <Pressable onPress={() => setInjuryDescription("bruise")}>
          <Text>{language.injury_description.bruise}</Text>
        </Pressable>
        <Pressable onPress={() => setInjuryDescription("bump")}>
          <Text>{language.injury_description.bump}</Text>
        </Pressable>
        <Pressable onPress={() => setInjuryDescription("swelling")}>
          <Text>{language.injury_description.swelling}</Text>
        </Pressable>
        <Pressable onPress={() => setInjuryDescription("scratch")}>
          <Text>{language.injury_description.scratch}</Text>
        </Pressable>
        <Pressable onPress={() => setInjuryDescription("scrape")}>
          <Text>{language.injury_description.scrape}</Text>
        </Pressable>
        <Pressable onPress={() => setInjuryDescription("break")}>
          <Text>{language.injury_description.break}</Text>
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