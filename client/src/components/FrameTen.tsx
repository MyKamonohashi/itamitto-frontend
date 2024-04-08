import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import { useState, useContext } from 'react';
import { LanguageContext, StackParams } from '../App';
import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import SubmitButton from './SubmitButton';

type FrameTenRouteProp = RouteProp<StackParams, 'FrameTen'>;
type FrameTenProps = NativeStackScreenProps<StackParams, 'FrameTen'>; 

export default function FrameTen({ route, navigation }: FrameTenProps) {
  const language = useContext(LanguageContext);
  const [isAllergic, setIsAllergic] = useState(false);
  const [allergy, setAllergy] = useState('')

  const { takingMedications, currentMedications, dosage } = route.params;
  console.log('taking medications: ', takingMedications);
  console.log('current medications: ', currentMedications);
  console.log('dosage: ', dosage);

  const handleSubmission = () => {
    navigation.navigate("FrameEleven", {
      allergies_name: allergy,
    });
  }


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
    flexDirection: 'column'
  }
});