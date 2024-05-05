import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import { useState, useContext } from 'react';
import { LanguageContext } from '../App';
import { StackParams } from '../type/type';
import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Header from 'Header';
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
      <Header text={language.title.allergy} />
      <View style={styles.buttons}>
        <Pressable style={styles.button} onPress={() => setIsAllergic(true)}>
            <Text style={styles.buttonText}>{language.button.yes}</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => setIsAllergic(false)}>
            <Text style={styles.buttonText}>{language.button.no}</Text>
        </Pressable>
      </View>
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
  buttons: {
    flexDirection: 'row',
    gap: 30,
  },
  button: {
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor:'#039388',
    padding: 15,
    minWidth: 150,
  },
  buttonText: {
    fontSize: 28,
    textAlign: 'center',
    color: 'white'
  },
  inputs: {
    flexDirection: 'column'
  }
});