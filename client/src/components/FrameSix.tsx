import { StyleSheet, Text, View, Pressable } from 'react-native';

type LanguageType = {
  title: {
    symptoms_duration: string
  },
  button: {
    submit: string
  },
  duration: {
    about: string,
    days: string,
    hours: string,
    months: string,
    years: string
  }
}

interface FrameProps {
  language: LanguageType,
}

export default function FrameSix({language}: FrameProps) {
  return (
    <View>
      <View></View>
      <Pressable>
        <Text>{language.button.submit}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  
});