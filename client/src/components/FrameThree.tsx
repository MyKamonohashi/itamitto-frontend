import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import en from '../localize/en';
import ja from '../localize/ja'
import LanguageToggle from './LanguageToggle';
import { StackParams } from '../App';
import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


type FrameThreeRouteProp = RouteProp<StackParams, 'FrameThree'>;

type FrameThreeProps = NativeStackScreenProps<StackParams, 'FrameThree'>; 

const FrameThree: React.FC<FrameThreeProps>  = ({ route, navigation }) => {

  const { symptom } = route.params;
  console.log(symptom);

  const [language, setLanguage] = useState(route.params.language);
  const [isEnabled, setIsEnabled] = useState(route.params.isEnabled);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [painLocation, setPainLocation] = useState("pain");

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
      <Text>{language.title.pain_location}</Text>
      <View>
        <Pressable onPress={() => setPainLocation("head")}>
          <Text>{language.pain_location.head}</Text>
        </Pressable>
        <Pressable onPress={() => setPainLocation("stomach")}>
          <Text>{language.pain_location.stomach}</Text>
        </Pressable>
        <Pressable onPress={() => setPainLocation("arm")}>
          <Text>{language.pain_location.arm}</Text>
        </Pressable>
        <Pressable onPress={() => setPainLocation("leg")}>
          <Text>{language.pain_location.leg}</Text>
        </Pressable>
        <Pressable onPress={() => setPainLocation("back")}>
          <Text>{language.pain_location.back}</Text>
        </Pressable>
        <Pressable onPress={() => setPainLocation("shoulder")}>
          <Text>{language.pain_location.shoulder}</Text>
        </Pressable>
        <Pressable onPress={() => setPainLocation("neck")}>
          <Text>{language.pain_location.neck}</Text>
        </Pressable>
        <Pressable onPress={() => setPainLocation("chest")}>
          <Text>{language.pain_location.chest}</Text>
        </Pressable>
        <Pressable onPress={() => setPainLocation("eyes/ears/nose")}>
          <Text>{language.pain_location.eyes_ears_nose}</Text>
        </Pressable>
      </View>
        <Pressable onPress={() => {
          // go to FrameFour
          navigation.navigate("FrameFour", {
            pain_location: painLocation,
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

export default FrameThree;