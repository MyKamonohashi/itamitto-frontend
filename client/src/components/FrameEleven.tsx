import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState, useContext } from 'react';
import { LanguageContext } from '../localize/LanguageContext';
import { StackParams } from '../type/type';
import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Header from 'Header';
import SubmitButton from './SubmitButton';

type FrameElevenRouteProp = RouteProp<StackParams, 'FrameEleven'>;
type FrameElevenProps = NativeStackScreenProps<StackParams, 'FrameEleven'>; 

export default function FrameEleven({ route }: FrameElevenProps) {
  const language = useContext(LanguageContext)
  const [isPregnant, setIsPregnant] = useState(false);
  const { allergies_name } = route.params;
  console.log("allergies_name🍳", allergies_name);

  const handleSubmission = () => {
    // uncomment when FrameTwelve is created to navigate
      // onPress={() => {
      //   navigation.navigate("FrameTwelve", {
      //     isPregnant: isPregnant
        // });
      // }}
  }

  return (
    <View style={styles.container}>
      <Header text={language.title.pregnancy} />
      <View style={styles.buttons}>
        <Pressable style={styles.button} onPress={() => setIsPregnant(true)}>
            <Text style={styles.buttonText}>{language.button.yes}</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => setIsPregnant(false)}>
            <Text style={styles.buttonText}>{language.button.no}</Text>
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
  }
});