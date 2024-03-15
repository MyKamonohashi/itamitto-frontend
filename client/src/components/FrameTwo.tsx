import { StyleSheet, Text, View, Pressable, Switch } from 'react-native';
import { useState, useEffect } from 'react';
import en from '../localize/en';
import ja from '../localize/ja';
import LanguageToggle from './LanguageToggle';
import { StackParams } from '../App';
import { RouteProp } from '@react-navigation/native';

type FrameTwoRouteProp = RouteProp<StackParams, 'FrameTwo'>;

type FrameTwoProps = {
  route: FrameTwoRouteProp;
};

const FrameTwo: React.FC<FrameTwoProps>  = ({ route }) => {

  const { reason } = route.params;
  console.log(reason);

  
  const [language, setLanguage] = useState(en);
  const [isEnabled, setIsEnabled] = useState(false);
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
      <Text style={styles.header}>{language.title.symptoms}</Text>
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
        <Pressable style={styles.buttonOne}>
          <Text style={styles.buttonText}>{language.symptoms.pain}</Text>
        </Pressable>
        <Pressable style={styles.buttonOne}>
          <Text style={styles.buttonText}>{language.symptoms.congestion}</Text>
        </Pressable>
      </View>
      <LanguageToggle onValueChange={toggleSwitch} isEnabled={isEnabled}/>
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
      backgroundColor: '#B9F3E4',
      fontSize: 35,
      textAlign: 'center',
      minWidth:'100%',
      paddingBottom: 20,
      paddingTop: 20,
      marginTop: 10
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
      padding: 20,
      minWidth: 300
    },
    switch: {
      marginBottom: 40,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
    }
  });

  export default FrameTwo;