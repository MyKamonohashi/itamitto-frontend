import { Pressable, StyleSheet, Text } from "react-native";
import { GestureResponderEvent } from "react-native";
import { LanguageType } from "../type/type";

type SubmitButtonProps = {
  language: LanguageType,
  onPress: (event: GestureResponderEvent) => void
}

export default function SubmitButton({language, onPress}: SubmitButtonProps) {
  return (
    <>
      <Pressable style={styles.submit} onPress={onPress}>
        <Text style={styles.buttonText}>{language.button.submit}</Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  submit: {
    backgroundColor: '#039388',
    padding: 5,
    paddingHorizontal: 35,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 30
  }
});