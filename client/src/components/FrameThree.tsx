import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState, useContext } from 'react';
import Header from 'Header';
import SubmitButton from './SubmitButton';
import { LanguageContext, StackParams } from '../App';
import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


type FrameThreeRouteProp = RouteProp<StackParams, 'FrameThree'>;

type FrameThreeProps = NativeStackScreenProps<StackParams, 'FrameThree'>; 

const FrameThree: React.FC<FrameThreeProps>  = ({ route, navigation }) => {
  const language = useContext(LanguageContext)
  const { symptoms } = route.params;
  console.log(symptoms);
  const [painLocation, setPainLocation] = useState("pain");

  const handleSubmission = () => {
    // go to FrameFour
    navigation.navigate("FrameFour", {
      pain_location: painLocation
    });
  }

  return (
    <View style={styles.container}>
      <Header text={language.title.pain_location}/>
      <View style={styles.buttons}>
        <Pressable style={styles.button} onPress={() => setPainLocation("head")}>
          <Text style={styles.buttonText}>{language.pain_location.head}</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => setPainLocation("stomach")}>
          <Text style={styles.buttonText}>{language.pain_location.stomach}</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => setPainLocation("arm")}>
          <Text style={styles.buttonText}>{language.pain_location.arm}</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => setPainLocation("leg")}>
          <Text style={styles.buttonText}>{language.pain_location.leg}</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => setPainLocation("back")}>
          <Text style={styles.buttonText}>{language.pain_location.back}</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => setPainLocation("shoulder")}>
          <Text style={styles.buttonText}>{language.pain_location.shoulder}</Text>
        </Pressable>
        <Pressable  style={styles.button} onPress={() => setPainLocation("neck")}>
          <Text style={styles.buttonText}>{language.pain_location.neck}</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => setPainLocation("chest")}>
          <Text style={styles.buttonText}>{language.pain_location.chest}</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => setPainLocation("eyes/ears/nose")}>
          <Text style={styles.buttonText}>{language.pain_location.eyes_ears_nose}</Text>
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
    marginHorizontal: 10,
    padding: 10,
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  button: {
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor:'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 25,
    textAlign: 'center',
    color: 'black'
  },
});

export default FrameThree;