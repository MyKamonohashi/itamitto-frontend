import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import { StackParams } from '../App';
import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import LanguageToggle from '../components/LanguageToggle';
import en from '../localize/en';
import ja from '../localize/ja';

type FrameSixRouteProp = RouteProp<StackParams, 'FrameSix'>;
type FrameSixProps = NativeStackScreenProps<StackParams, 'FrameSix'>; 

export default function FrameSix({ route, navigation }: FrameSixProps) {
  const [text, setText] = useState('');
  const [language, setLanguage] = useState(route.params.language);
  const [isEnabled, setIsEnabled] = useState(route.params.isEnabled);
  const [painDuration, setDuration] = useState("");

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
      <Text>{language.title.symptoms_duration}</Text>
      <View style={styles.inputs}>
        <Text>{language.duration.about}</Text>
        <TextInput
          onChangeText={setText}
          value={text}
          placeholder='#'
          inputMode="numeric"
        />
        <View>
          <Pressable>
            <Text>{language.duration.hours}</Text>
          </Pressable>
          <Pressable>
            <Text>{language.duration.days}</Text>
          </Pressable>
          <Pressable>
            <Text>{language.duration.weeks}</Text>
          </Pressable>
          <Pressable>
            <Text>{language.duration.months}</Text>
          </Pressable>
          <Pressable>
            <Text>{language.duration.years}</Text>
          </Pressable>
        </View>
      </View>
      <Pressable 
        // onPress={() => {
        //   // go to FrameSeven
        //   navigation.navigate("FrameSeven", {
        //     pain_duration: painDuration,
        //     language: language,
        //     isEnabled: isEnabled})
        // }}
        >
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
  inputs: {
    flexDirection: 'row'
  }
});