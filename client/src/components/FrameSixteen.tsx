import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import { StackParams } from '../App';
import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import LanguageToggle from '../components/LanguageToggle';
import en from '../localize/en';
import ja from '../localize/ja';

type FrameSixteenRouteProp = RouteProp<StackParams, 'FrameSixteen'>;
type FrameSixteenProps = NativeStackScreenProps<StackParams, "FrameSixteen">

export default function FrameSixteen( { route, navigation }: FrameSixteenProps) {
  const [language, setLanguage] = useState(en);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [injuryDescription, setInjuryDescription] = useState('');

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
      <Text>{language.title.injury_description}</Text>
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
});