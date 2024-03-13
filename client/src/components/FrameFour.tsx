import { StyleSheet, Text, View, Pressable } from 'react-native';

type LanguageType = {
  title: {
    pain_description: string
  },
  pain_description: {
    sharp: string,
    throbbing: string,
    aching: string,
    burning: string,
    cramping: string,
    numbness: string,
    constant: string,
    sudden: string
  },
  button: {
    submit: string
  }
}

interface FrameProps {
  language: LanguageType,
}

export default function FrameFour({language}: FrameProps) {

  return (
    <View style={styles.container}>
      <Text>{language.title.pain_description}</Text>
      <View>
        
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
});