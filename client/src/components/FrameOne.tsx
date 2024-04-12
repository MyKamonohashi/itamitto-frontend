import { StyleSheet, Text, View, Pressable, Switch } from 'react-native';
import { useState, useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParams, LanguageContext } from '../App';


type Props = NativeStackScreenProps<StackParams, "FrameOne">

const FrameOne: React.FC<Props> = ({ navigation }) => {
  const language = useContext(LanguageContext);
  
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{language.title.reason}</Text>
      <View style={styles.buttons}>
        <Pressable  style={styles.buttonOne}
          onPress={() => {
            //go to illness FrameTwo
            navigation.navigate("FrameTwo", {reason: "illness"})
          }}
        >
          <Text style={styles.buttonText}>{language.reason.illness}</Text>
        </Pressable>
        <Pressable style={styles.buttonTwo}
          onPress={() => {
            //go to injury FrameFifteen
            navigation.navigate("FrameFifteen", {reason: "injury"})
          }}>
          <Text style={styles.buttonText}>{language.reason.injury}</Text>
        </Pressable>
        <Pressable style={styles.buttonThree}
          onPress={() => {
            //go to vaccine FrameEight
            navigation.navigate("FrameEight", {reason: "vaccine"})
          }}
        >
          <Text style={styles.buttonText}>{language.reason.vaccine}</Text>
        </Pressable>
        <Pressable style={styles.buttonFour}
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
  switch: {
    marginBottom: 40,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  }
});

export default FrameOne;