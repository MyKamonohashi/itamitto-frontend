import { StyleSheet, Text, View, Pressable } from 'react-native';

type LanguageType = {
  title: {
    reason: string
  },
  reason: {
    illness: string,
    injury: string,
    vaccine: string,
    test: string
  }
}

interface FrameProps {
  language: LanguageType,
}

export default function FrameOne({language}: FrameProps) {

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{language.title.reason}</Text>
      <View style={styles.buttons}>
        <Pressable style={styles.buttonOne}>
          <Text style={styles.buttonText}>{language.reason.illness}</Text>
        </Pressable>
        <Pressable style={styles.buttonTwo}>
          <Text style={styles.buttonText}>{language.reason.injury}</Text>
        </Pressable>
        <Pressable style={styles.buttonThree}>
          <Text style={styles.buttonText}>{language.reason.vaccine}</Text>
        </Pressable>
        <Pressable style={styles.buttonFour}>
          <Text style={styles.buttonText}>{language.reason.test}</Text>
        </Pressable>
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
  buttonTwo: {
    borderRadius: 10,
    backgroundColor:'#FFAACF',
    padding: 20,
    minWidth: 300
  },
  buttonThree: {
    borderRadius: 10,
    backgroundColor:'#F6E6C2',
    padding: 20,
    minWidth: 300
  },
  buttonFour: {
    borderRadius: 10,
    backgroundColor:'#8ACDD7',
    padding: 20,
    minWidth: 300
  },
});