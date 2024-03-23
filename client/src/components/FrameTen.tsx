import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import { StackParams } from '../App';
import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import LanguageToggle from '../components/LanguageToggle';
import en from '../localize/en';
import ja from '../localize/ja';

type FrameTenRouteProp = RouteProp<StackParams, 'FrameTen'>;
type FrameTenProps = NativeStackScreenProps<StackParams, 'FrameTen'>; 

export default function FrameTen({ route, navigation }: FrameTenProps) {
  const [language, setLanguage] = useState(route.params.language);
  const [isEnabled, setIsEnabled] = useState(route.params.isEnabled);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [isAllergic, setIsAllergic] = useState(false);
  const [allergy, setAllergy] = useState('')

  const { takingMedications, currentMedications, dosage } = route.params;
  console.log('taking medications: ', takingMedications);
  console.log('current medications: ', currentMedications);
  console.log('dosage: ', dosage);

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
      <Text>{language.title.allergy}</Text>
        <Pressable onPress={() => setIsAllergic(true)}>
            <Text>{language.button.yes}</Text>
        </Pressable>
        <Pressable  onPress={() => setIsAllergic(false)}>
            <Text>{language.button.no}</Text>
        </Pressable>
        <View style={styles.inputs}>
            <Text>{language.allergies.allergies_name}</Text>
            <TextInput
            onChangeText={setAllergy}
            value={allergy}
            placeholder='#'
            />
        </View>
      <Pressable 
        onPress={() => {
          navigation.navigate("FrameEleven", {
            allergies_name: allergy,
            language: language,
            isEnabled: isEnabled})
        }}
        >
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
  inputs: {
    flexDirection: 'column'
  }
});