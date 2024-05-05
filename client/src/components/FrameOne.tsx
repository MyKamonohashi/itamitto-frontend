import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useContext } from 'react';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import Header from 'Header';
import { LanguageContext } from '../App';
import { StackParams } from '../type/type';


type Props = NativeStackScreenProps<StackParams, "FrameOne">

const FrameOne: React.FC<Props> = ({ navigation }) => {
  const language = useContext(LanguageContext);
  
  return (
    <View style={styles.container}>
      <Header text={language.title.reason}/>
      <View style={styles.buttons}>
        <Pressable style={styles.button}
          onPress={() => {
            //go to illness FrameTwo
            navigation.navigate("FrameTwo", {reason: "illness"})
          }}
        >
          <Text style={styles.buttonText}>{language.reason.illness}</Text>
        </Pressable>
        <Pressable style={styles.button}
          onPress={() => {
            //go to injury FrameFifteen
            navigation.navigate("FrameFifteen", {reason: "injury"})
          }}>
          <Text style={styles.buttonText}>{language.reason.injury}</Text>
        </Pressable>
        <Pressable style={styles.button}
          onPress={() => {
            //go to vaccine FrameEight
            navigation.navigate("FrameEight", {reason: "vaccine"})
          }}
        >
          <Text style={styles.buttonText}>{language.reason.vaccine}</Text>
        </Pressable>
        <Pressable style={styles.button}
        onPress={() => {
          //go to pain location FrameSeven
          navigation.navigate("FrameSeven", {reason: "test"})
        }}
        >
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
  buttons: {
    gap: 30,
  },
  button: {
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor:'white',
    padding: 20,
    minWidth: 300,
  },
  buttonText: {
    fontSize: 35,
    textAlign: 'center',
    color: 'black'
  },
  switch: {
    marginBottom: 40,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
});

export default FrameOne;