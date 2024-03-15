import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import en from '../localize/en';
import ja from '../localize/ja'
import LanguageToggle from './LanguageToggle';
import { StackParams } from '../App';
import { RouteProp } from '@react-navigation/native';


// type LanguageType = {
//   title: {
//     pain_location: string
//   },
//   pain_location: {
//     head: string,
//     stomach: string,
//     arm: string,
//     leg: string,
//     back: string,
//     shoulder: string,
//     neck: string,
//     chest: string,
//     eyes_ears_nose: string
//   },
//   button: {
//     submit: string
//   }
// }

// interface FrameProps {
//   language: LanguageType,
// }

type FrameThreeRouteProp = RouteProp<StackParams, 'FrameThree'>;

type FrameThreeProps = {
  route: FrameThreeRouteProp;
};

const FrameThree: React.FC<FrameThreeProps>  = ({ route }) => {

  const { symptom } = route.params;
  console.log(symptom);

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
      <Text>{language.title.pain_location}</Text>
      <View>
        <Pressable>
          <Text>{language.pain_location.head}</Text>
        </Pressable>
        <Pressable>
          <Text>{language.pain_location.stomach}</Text>
        </Pressable>
        <Pressable>
          <Text>{language.pain_location.arm}</Text>
        </Pressable>
        <Pressable>
          <Text>{language.pain_location.leg}</Text>
        </Pressable>
        <Pressable>
          <Text>{language.pain_location.back}</Text>
        </Pressable>
        <Pressable>
          <Text>{language.pain_location.shoulder}</Text>
        </Pressable>
        <Pressable>
          <Text>{language.pain_location.neck}</Text>
        </Pressable>
        <Pressable>
          <Text>{language.pain_location.chest}</Text>
        </Pressable>
        <Pressable>
          <Text>{language.pain_location.eyes_ears_nose}</Text>
        </Pressable>
      </View>
        <Pressable>
          <Text>{language.button.submit}</Text>
        </Pressable>
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
});

export default FrameThree;