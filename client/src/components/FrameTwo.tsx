import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useContext } from 'react';
import { StackParams, LanguageContext } from '../App';
import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type FrameTwoRouteProp = RouteProp<StackParams, 'FrameTwo'>;

type FrameTwoProps = NativeStackScreenProps<StackParams, 'FrameTwo'>; 

const FrameTwo: React.FC<FrameTwoProps>  = ({ route, navigation }) => {
  const language = useContext(LanguageContext);
  const { reason } = route.params;
  console.log("🍎:",reason)
  
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
        <Pressable style={styles.buttonOne}
          onPress={() => {
            //go to pain location FrameThree
            navigation.navigate("FrameThree", {symptom: "pain"})
          }}
          >
          <Text style={styles.buttonText}>{language.symptoms.pain}</Text>
        </Pressable>
        <Pressable style={styles.buttonOne}>
          <Text style={styles.buttonText}>{language.symptoms.congestion}</Text>
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
      // marginTop: 150,
      fontSize: 35,
      textAlign: 'center',
      minWidth:'100%',
      paddingBottom: 10,
      paddingTop: 10,
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
      padding: 5,
      minWidth: 300,
    },
  });

  export default FrameTwo;