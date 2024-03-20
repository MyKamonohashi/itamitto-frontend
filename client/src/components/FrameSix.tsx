import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import { useState } from 'react';
import { StackParams } from '../App';
import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type FrameSixRouteProp = RouteProp<StackParams, 'FrameSix'>;
type FrameSixProps = NativeStackScreenProps<StackParams, 'FrameSix'>; 

export default function FrameSix({ route, navigation }: FrameSixProps) {
  const [text, setText] = useState('');
  const [language, setLanguage] = useState(route.params.language);
  // const [isEnabled, setIsEnabled] = useState(route.params.isEnabled);
  
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
      <Pressable>
        <Text>{language.button.submit}</Text>
      </Pressable>
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