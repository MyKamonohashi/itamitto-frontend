import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState, useContext } from 'react';
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
});

export default FrameThree;