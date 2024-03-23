import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import { StackParams } from '../App';
import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import LanguageToggle from '../components/LanguageToggle';
import en from '../localize/en';
import ja from '../localize/ja';

type FrameFifteenRouteProp = RouteProp<StackParams, 'FrameFifteen'>;
type FrameFifteenProps = NativeStackScreenProps<StackParams, "FrameFifteen">

export default function FrameFifteen( { route, navigation }: FrameFifteenProps) {
  const [language, setLanguage] = useState(en);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [injuryLocation, setInjuryLocation] = useState('');

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
      <Pressable onPress={() => {
          // go to FrameSixteen
          navigation.navigate("FrameSixteen", {
            injury_location: injuryLocation,
            language: language,
            isEnabled: isEnabled})
          }
        }>
          <Text>{language.button.submit}</Text>
        </Pressable>
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