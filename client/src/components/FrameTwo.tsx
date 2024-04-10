import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import en from '../localize/en';
import ja from '../localize/ja';
import LanguageToggle from './LanguageToggle';
import { CheckBox } from '@rneui/themed';
import SubmitButton from './SubmitButton';
import { StackParams } from '../App';
import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type FrameTwoRouteProp = RouteProp<StackParams, 'FrameTwo'>;

type FrameTwoProps = NativeStackScreenProps<StackParams, 'FrameTwo'>; 

const FrameTwo: React.FC<FrameTwoProps>  = ({ route, navigation }) => {
  const [symptoms, setSymptoms] = useState('');
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [checked6, setChecked6] = useState(false);
  const [checked7, setChecked7] = useState(false);
  const [checked8, setChecked8] = useState(false);

  const [language, setLanguage] = useState(route.params.language);
  const [isEnabled, setIsEnabled] = useState(route.params.isEnabled);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
          language: language, 
          isEnabled: isEnabled
      });
    } else {
      navigation.navigate(
        "FrameSix", {
          symptoms: symptoms, 
          language: language, 
          isEnabled: isEnabled
      });
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{language.title.symptoms}</Text>
      <View style={styles.buttons}>
        <CheckBox checked={checked1} title={language.symptoms.fever} onPress={() => {setChecked1(!checked1)}}/>
        <CheckBox checked={checked2} title={language.symptoms.sore_throat} onPress={() => {setChecked2(!checked2)}}/>
        <CheckBox checked={checked3} title={language.symptoms.cough} onPress={() => {setChecked3(!checked4)}}/>
        <CheckBox checked={checked4} title={language.symptoms.sneezing} onPress={() => {setChecked4(!checked5)}}/>
        <CheckBox checked={checked5} title={language.symptoms.nausea} onPress={() => {setChecked5(!checked6)}}/>
        <CheckBox checked={checked6} title={language.symptoms.pain} onPress={() => {setChecked6(!checked7)}}/>
        <CheckBox checked={checked7} title={language.symptoms.congestion} onPress={() => {setChecked7(!checked8)}}/>
      </View>
      <View style={styles.switch}>
      <SubmitButton language={language} onPress={handleSubmission}/>
      <LanguageToggle onValueChange={toggleSwitch} isEnabled={isEnabled}/>
      </View>
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
      // marginTop: 150,
      fontSize: 35,
      textAlign: 'center',
      minWidth:'100%',
      paddingBottom: 10,
      paddingTop: 10,
    },
    buttons: {
      gap: 30
    },
    buttonText: {
      fontSize: 35,
      textAlign: 'center',
    },
    buttonOne: {
      borderRadius: 10,
      backgroundColor:'#EA8FEA',
      padding: 5,
      minWidth: 300,
    },
    switch: {
      marginTop: 40,
      marginBottom: 40,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
    }
  });

  export default FrameTwo;