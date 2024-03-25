import { Pressable, StyleSheet, Text } from "react-native";

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