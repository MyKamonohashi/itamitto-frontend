import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import en from '../localize/en';
import ja from '../localize/ja';
import Header from 'Header';
import LanguageToggle from './LanguageToggle';
import { StackParams } from '../App';
import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type FrameTwoRouteProp = RouteProp<StackParams, 'FrameTwo'>;

type FrameTwoProps = NativeStackScreenProps<StackParams, 'FrameTwo'>; 

const FrameTwo: React.FC<FrameTwoProps>  = ({ route, navigation }) => {

  const { reason } = route.params;
  console.log("🍎:",reason)
  // console.log("🍇:", route.params.language, "🍊:",route.params.isEnabled);
  
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

  return (
    <View style={styles.container}>
      <Header text={language.title.symptoms}/>
      <View style={styles.buttons}>
        <Pressable style={styles.buttonOne}>
          <Text style={styles.buttonText}>{language.symptoms.fever}</Text>
        </Pressable>
        <Pressable style={styles.buttonOne}>
          <Text style={styles.buttonText}>{language.symptoms.sore_throat}</Text>
        </Pressable>
        <Pressable style={styles.buttonOne}>
          <Text style={styles.buttonText}>{language.symptoms.cough}</Text>
        </Pressable>
        <Pressable style={styles.buttonOne}>
          <Text style={styles.buttonText}>{language.symptoms.sneezing}</Text>
        </Pressable>
        <Pressable style={styles.buttonOne}>
          <Text style={styles.buttonText}>{language.symptoms.nausea}</Text>
        </Pressable>
        <Pressable style={styles.buttonOne}
          onPress={() => {
            //go to pain location FrameThree
            navigation.navigate("FrameThree", {symptom: "pain", language: language, isEnabled: isEnabled})
          }}
          >
          <Text style={styles.buttonText}>{language.symptoms.pain}</Text>
        </Pressable>
        <Pressable style={styles.buttonOne}>
          <Text style={styles.buttonText}>{language.symptoms.congestion}</Text>
        </Pressable>
      </View>
      <View style={styles.switch}>
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