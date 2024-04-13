import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import { useState, useContext } from 'react';
import Header from 'Header';
import SubmitButton from './SubmitButton';
import { LanguageContext, StackParams } from '../App';
import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type FrameNineRouteProp = RouteProp<StackParams, 'FrameNine'>;
type FrameNineProps = NativeStackScreenProps<StackParams, 'FrameNine'>; 

export default function FrameNine({ route, navigation }: FrameNineProps) {
  const language = useContext(LanguageContext);
  const [takingMedications, setTakingMedications] = useState(false);
  const [currentMedications, setCurrentMedications] = useState('');
  const [dosage, setDosage] = useState('');
  
  const { pain_duration, test, vaccine } = route.params;

  const handleNoMedications = () => {
    navigation.navigate("FrameTen", {
      takingMedications: false,
      currentMedications: 'none',
      dosage: 'N/A',
    });
  }

  const handleTakesMedications = () => {
    setTakingMedications(true);
  }

  const handleSubmission = () => {
    navigation.navigate("FrameTen", {
      takingMedications: takingMedications,
      currentMedications: currentMedications,
      dosage: dosage,
    });
  }

  return (
    <View style={styles.container}>
      <Header text={language.title.medications} />
      <Pressable onPress={handleTakesMedications}>
        <Text>{language.button.yes}</Text>
      </Pressable>
      <Pressable onPress={handleNoMedications}>
        <Text>{language.button.no}</Text>
      </Pressable>
      { takingMedications && 
        <View>
          <View style={styles.inputs}>
            <TextInput
            onChangeText={setCurrentMedications}
            value={currentMedications}
            placeholder='Medication Name'
            inputMode="text"
            />
            <TextInput
            onChangeText={setDosage}
            value={dosage}
            placeholder='Dosage'
            inputMode="text"
            />
          </View>
          <SubmitButton language={language} onPress={handleSubmission}/>
        </View>
      }
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
    flexDirection: "row",
    gap: 25
  },
});