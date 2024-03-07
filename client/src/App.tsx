import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import en from './localize/en.json';
import ja from './localize/ja.json'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{en.title.reason}</Text>
      <View>
        <Button title={en.reason.illness}></Button>
        <Button title={en.reason.injury}></Button>
        <Button title={en.reason.vaccine}></Button>
        <Button title={en.reason.test}></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

registerRootComponent(App);