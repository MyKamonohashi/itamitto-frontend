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
      <Text style={styles.header}>{language.title.final_report}</Text>
      { finalReport.reason === "test" ? (
        <View>
            <Text>{language.final_report.test}</Text>
            <Text>{finalReport.test}</Text>
            <Text>{finalReport.other_medication}</Text>
            <Text>{finalReport.pregnancy}</Text>
        </View>
      ) : (
        finalReport.reason === "vaccine" ? (
        <View>
                <Text>{language.final_report.vaccine}</Text>
            <Text>{finalReport.vaccine}</Text>
            <Text>{finalReport.other_medication}</Text>
            <Text>{finalReport.pregnancy}</Text>
        </View>
      ) : (
        <View>
            <Text>{language.final_report.symptoms}</Text>
                <Text>{finalReport.symptoms}</Text>
            <View>
                <Text>{language.final_report.pain}</Text>
                <Text>{finalReport.pain}</Text>
            </View>
            <View>
                <Text>{language.final_report.pain_description}</Text>
                <Text>{finalReport.pain_description}</Text>
            </View>
            <View>
                <Text>{language.final_report.pain_scale}</Text>
                <Text>{finalReport.pain_scale}</Text>
            </View>
            <View>
                <Text>{language.final_report.duration}</Text>
                <Text>{finalReport.duration}</Text>
            </View>
            <View>
                <Text>{finalReport.other_medication}</Text>
                <Text>{finalReport.pregnancy}</Text>
            </View>
        </View>
        )
        )}
        <LanguageToggle onValueChange={toggleSwitch} isEnabled={isEnabled}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    fontSize: 35,
    textAlign: 'center',
    minWidth:'100%',
    paddingBottom: 20,
    paddingTop: 20,
    marginTop: 10,
    marginBottom: 10
  },
});