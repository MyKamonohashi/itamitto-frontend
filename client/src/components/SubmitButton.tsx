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
        <Text>{language.button.submit}</Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  submit: {

  }
});