import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import en from '../localize/en';
import ja from '../localize/ja'
import LanguageToggle from './LanguageToggle';
import { StackParams } from '../App';
import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import objFinalReport from './ObjectFinalReport';


type FrameFiveRouteProp = RouteProp<StackParams, 'FrameFive'>;

type FrameFiveProps = NativeStackScreenProps<StackParams, 'FrameFive'>; 

const FrameFive: React.FC<FrameFiveProps>  = ({ route, navigation }) => {

  const { pain_description } = route.params;
  console.log(pain_description);

  objFinalReport.pain_description = pain_description;

  const [language, setLanguage] = useState(route.params.language);
  const [isEnabled, setIsEnabled] = useState(route.params.isEnabled);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [painScale, setPainScale] = useState('');

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
      <Text>{language.title.hurt_scale}</Text>
      <View>
        <Pressable onPress={() => setPainScale("No pain")}>
            <Text>{language.hurt.no_pain}</Text>
        </Pressable>
        <Pressable onPress={() => setPainScale("Very mild")}>
            <Text>{language.hurt.very_mild}</Text>
        </Pressable>
        <Pressable onPress={() => setPainScale("Discomforting")}>
            <Text>{language.hurt.discomforting}</Text>
        </Pressable>
        <Pressable onPress={() => setPainScale("Tolerable")}>
            <Text>{language.hurt.tolerable}</Text>
        </Pressable>
        <Pressable onPress={() => setPainScale("Distressing")}>
            <Text>{language.hurt.distressing}</Text>
        </Pressable>
        <Pressable onPress={() => setPainScale("Very distressing")}>
            <Text>{language.hurt.very_distressing}</Text>
        </Pressable>
        <Pressable onPress={() => setPainScale("Intense")}>
            <Text>{language.hurt.intense}</Text>
        </Pressable>
        <Pressable onPress={() => setPainScale("Very intense")}>
            <Text>{language.hurt.very_intense}</Text>
        </Pressable>
        <Pressable onPress={() => setPainScale("Utterly horrible")}>
            <Text>{language.hurt.utterly_horrible}</Text>
        </Pressable>
        <Pressable onPress={() => setPainScale("Excruciating unbearable")}>
            <Text>{language.hurt.excruciating_unbearable}</Text>
        </Pressable>
        <Pressable onPress={() => setPainScale("Unimaginable unspeakable")}>
            <Text>{language.hurt.unimaginable_unspeakable}</Text>
        </Pressable>
      </View>
        <Pressable onPress={() => {
          navigation.navigate("FrameSix", {
          hurt: painScale,
          language: language,
          isEnabled: isEnabled})
        }}>
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

export default FrameFive;