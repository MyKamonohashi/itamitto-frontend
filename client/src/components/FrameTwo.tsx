import { StyleSheet, View } from 'react-native';
import { useState, useEffect, useContext } from 'react';
import Header from 'Header';
import { CheckBox } from '@rneui/themed';
import SubmitButton from './SubmitButton';
import { LanguageContext } from '../localize/LanguageContext';
import { StackParams } from '../type/type';
import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type FrameTwoRouteProp = RouteProp<StackParams, 'FrameTwo'>;

type FrameTwoProps = NativeStackScreenProps<StackParams, 'FrameTwo'>; 

const FrameTwo: React.FC<FrameTwoProps>  = ({ route, navigation }) => {
  const language = useContext(LanguageContext);
  const { reason } = route.params;
  console.log("🍎:",reason)
  
  const [symptoms, setSymptoms] = useState('');
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [checked6, setChecked6] = useState(false);
  const [checked7, setChecked7] = useState(false);

  const handleDataInput = () => {
    const result = [];
    if (checked1) {
      result.push(language.symptoms.fever);
    }
    if (checked2) {
      result.push(language.symptoms.sore_throat);
    }
    if (checked3) {
      result.push(language.symptoms.cough);
    }
    if (checked4) {
      result.push(language.symptoms.sneezing);
    }
    if (checked5) {
      result.push(language.symptoms.nausea);
    }
    if (checked6) {
      result.push(language.symptoms.pain);
    }
    if (checked7) {
      result.push(language.symptoms.congestion);
    }
    setSymptoms(result.join('/'));
  }

  useEffect(() => {
    handleDataInput();
  }, [checked1, checked2, checked3, checked4, checked5, checked6, checked7]);

  const handleSubmission = () => {
    if (symptoms.includes('pain')) {
      navigation.navigate(
        "FrameThree", {
          symptoms: symptoms, 
      });
    } else {
      navigation.navigate(
        "FrameSix", {
          symptoms: symptoms, 
      });
    }
  }

  return (
    <View style={styles.container}>
      <Header text={language.title.symptoms}/>
      <View>
        <CheckBox checked={checked1} title={language.symptoms.fever} onPress={() => {setChecked1(!checked1)}} textStyle={styles.optionText}/>
        <CheckBox checked={checked2} title={language.symptoms.sore_throat} onPress={() => {setChecked2(!checked2)}} textStyle={styles.optionText}/>
        <CheckBox checked={checked3} title={language.symptoms.cough} onPress={() => {setChecked3(!checked3)}} textStyle={styles.optionText}/>
        <CheckBox checked={checked4} title={language.symptoms.sneezing} onPress={() => {setChecked4(!checked4)}} textStyle={styles.optionText}/>
        <CheckBox checked={checked5} title={language.symptoms.nausea} onPress={() => {setChecked5(!checked5)}} textStyle={styles.optionText}/>
        <CheckBox checked={checked6} title={language.symptoms.pain} onPress={() => {setChecked6(!checked6)}} textStyle={styles.optionText}/>
        <CheckBox checked={checked7} title={language.symptoms.congestion} onPress={() => {setChecked7(!checked7)}} textStyle={styles.optionText}/>
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
    header: {
      fontSize: 35,
      textAlign: 'center',
      minWidth:'100%',
    },
    optionText: {
      fontSize: 30,
      fontWeight: 'normal',
      textAlign: 'center',
    },
    buttonOne: {
      borderRadius: 10,
      backgroundColor:'#EA8FEA',
      padding: 5,
      minWidth: 300,
    },
  });

  export default FrameTwo;