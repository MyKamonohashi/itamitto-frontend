import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { CheckBox } from '@rneui/themed';
import LanguageToggle from './LanguageToggle';
import { StackParams } from '../App';
import en from '../localize/en';
import { RouteProp } from '@react-navigation/native';
import ja from '../localize/ja';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type FrameFourRouteProp = RouteProp<StackParams, 'FrameFour'>;
type FrameFourProps = NativeStackScreenProps<StackParams, 'FrameFour'>; 

const FrameFour: React.FC<FrameFourProps>  = ({ route, navigation }) =>  {

  const { pain_location } = route.params;
  console.log("pain_location🍍", pain_location);

  const [language, setLanguage] = useState(route.params.language);
  const [isEnabled, setIsEnabled] = useState(route.params.isEnabled);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [painDescription, setPainDescription] = useState('');

  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [checked6, setChecked6] = useState(false);
  const [checked7, setChecked7] = useState(false);
  const [checked8, setChecked8] = useState(false);
  
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


  const handleDataInput = () => {
    const result = [];
    if (checked1) {
      result.push(language.pain_description.sharp);
    }
    if (checked2) {
      result.push(language.pain_description.throbbing);
    }
    if (checked3) {
      result.push(language.pain_description.aching);
    }
    if (checked4) {
      result.push(language.pain_description.burning);
    }
    if (checked5) {
      result.push(language.pain_description.cramping);
    }
    if (checked6) {
      result.push(language.pain_description.numbness);
    }
    if (checked7) {
      result.push(language.pain_description.constant);
    }
    if (checked8) {
      result.push(language.pain_description.sudden);
    }
    setPainDescription(result.join('/'));
  }

  return (
    <View style={styles.container}>
      <Text>{language.title.pain_description}</Text>
      <View>
        <CheckBox checked={checked1} title={language.pain_description.sharp} onPress={() => {setChecked1(!checked1)}}/>
        <CheckBox checked={checked2} title={language.pain_description.throbbing} onPress={() => {setChecked2(!checked2)}}/>
        <CheckBox checked={checked3} title={language.pain_description.aching} onPress={() => {setChecked3(!checked3)}}/>
        <CheckBox checked={checked4} title={language.pain_description.burning} onPress={() => {setChecked4(!checked4)}}/>
        <CheckBox checked={checked5} title={language.pain_description.cramping} onPress={() => {setChecked5(!checked5)}}/>
        <CheckBox checked={checked6} title={language.pain_description.numbness} onPress={() => {setChecked6(!checked6)}}/>
        <CheckBox checked={checked7} title={language.pain_description.constant} onPress={() => {setChecked7(!checked7)}}/>
        <CheckBox checked={checked8} title={language.pain_description.sudden} onPress={() => {setChecked8(!checked8)}}/>
      </View>
      <Pressable 
      // uncomment when FrameFive is created to navigate
        // onPress={() => {
        //handleDataInput;
        // navigation.navigate("FrameFive", {
        // pain_description: data.join(', '), || painDescription,
        // language: language,
        // isEnabled: isEnabled})
        // }
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
});

export default FrameFour;