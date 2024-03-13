import { StyleSheet, Text, View, Pressable } from 'react-native';

type LanguageType = {
  title: {
    pain_location: string
  },
  pain_location: {
    head: string,
    stomach: string,
    arm: string,
    leg: string,
    back: string,
    shoulder: string,
    neck: string,
    chest: string,
    eyes_ears_nose: string
  },
  button: {
    submit: string
  }
}

interface FrameProps {
  language: LanguageType,
}

export default function FrameThree({language}: FrameProps) {

  return (
    <View>
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
        <Pressable>
          <Text>{language.button.submit}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

});