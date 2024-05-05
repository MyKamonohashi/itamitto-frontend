import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState, useContext } from 'react';
import Header from 'Header';
import SubmitButton from './SubmitButton';
import { LanguageContext } from '../App';
import { StackParams } from '../type/type';
import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


type FrameFiveRouteProp = RouteProp<StackParams, 'FrameFive'>;
type FrameFiveProps = NativeStackScreenProps<StackParams, 'FrameFive'>; 

const FrameFive: React.FC<FrameFiveProps>  = ({ route, navigation }) => {

  const { pain_description } = route.params;
  console.log(pain_description);
  const language = useContext(LanguageContext);
  const [painScale, setPainScale] = useState('');


  const handleSubmission = () => {
    // go to FrameSix
    navigation.navigate("FrameSix", {
      hurt: painScale,
    });
  }


  return (
    <View style={styles.container}>
      <Header text={language.title.hurt_scale}/>
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

export default FrameFive;