import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { StackParams } from '../App';
import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import LanguageToggle from '../components/LanguageToggle';
import en from '../localize/en';
import ja from '../localize/ja';
import objFinalReport from './ObjectFinalReport';

type FinalReportRouteProp = RouteProp<StackParams, 'FinalReport'>;
type FinalReportProps = NativeStackScreenProps<StackParams, 'FinalReport'>; 

export default function FinalReport({ route }: FinalReportProps) {
  const [language, setLanguage] = useState(route.params.language);
  const [isEnabled, setIsEnabled] = useState(route.params.isEnabled);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [finalReport, setFinalReport] = useState(objFinalReport)

//   setFinalReport({
//     symptoms: "no input",
//     pain: "no input",
//     duration: "no input",
//     test: "no input",
//     vaccine: "no input",
//     special_notes: "no input"
//   })

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
      <Text>{language.title.final_report}</Text>
      <View>
        <Text>{finalReport.symptoms}</Text>
      </View>
      <View>
        <Text>{finalReport.pain}</Text>
      </View>
      <View>
        <Text>{finalReport.duration}</Text>
      </View>
      <View>
        <Text>{finalReport.test}</Text>
      </View>
      <View>
        <Text>{finalReport.vaccine}</Text>
      </View>
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
  }
});