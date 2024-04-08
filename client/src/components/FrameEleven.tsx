import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState, useContext } from 'react';
import { LanguageContext, StackParams } from '../App';
import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
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
      <Text>{language.title.pregnancy}</Text>
        <Pressable onPress={() => setIsPregnant(true)}>
            <Text>{language.button.yes}</Text>
        </Pressable>
        <Pressable  onPress={() => setIsPregnant(false)}>
            <Text>{language.button.no}</Text>
        </Pressable>
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
  }
});