import { Pressable, StyleSheet, Text } from "react-native";
import { GestureResponderEvent } from "react-native";

type SubmitButtonProps = {
  onPress: GestureResponderEvent,
}


export default function SubmitButton() {
  return (
    <>
      <Pressable style={styles.submit}>
        <Text>{}</Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  submit: {

  }
});