import { StyleSheet, Text, View, Pressable, Switch } from 'react-native';
import { useState, useEffect } from 'react';
import en from '../localize/en.json';
import ja from '../localize/ja.json';

export default function FrameThree() {
  // We should probably extract the language toggle into a separate 
  // component so we don't have to keep copy-pasting it on every page
  const [language, setLanguage] = useState(en);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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