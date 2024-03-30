import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import { StackParams } from '../App';
import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import LanguageToggle from '../components/LanguageToggle';
import SubmitButton from './SubmitButton';
import en from '../localize/en';
import ja from '../localize/ja';

type FrameElevenRouteProp = RouteProp<StackParams, 'FrameEleven'>;
type FrameElevenProps = NativeStackScreenProps<StackParams, 'FrameEleven'>; 

export default function FrameEleven({ route }: FrameElevenProps) {
  const [language, setLanguage] = useState(route.params.language);
  const [isEnabled, setIsEnabled] = useState(route.params.isEnabled);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [isPregnant, setIsPregnant] = useState(false);

  const { allergies_name } = route.params;
  console.log("allergies_name🍳", allergies_name);


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

  const handleSubmission = () => {
    // uncomment when FrameTwelve is created to navigate
      // onPress={() => {
      //   navigation.navigate("FrameTwelve", {
      //     language: language,
      //     isEnabled: isEnabled,
      //     isPregnant: isPregnant
        // });
      // }}
  }

  return (
    <View style={styles.container}>
      <Text>{language.title.pregnancy}</Text>
        <Pressable onPress={() => setIsPregnant(true)}>
            <Text>{language.button.yes}</Text>
        </Pressable>
        <Pressable  onPress={() => setIsPregnant(false)}>
            <Text>{language.button.no}</Text>
        </Pressable>
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
  }
});