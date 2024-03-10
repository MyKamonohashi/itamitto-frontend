import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import FrameOne from './components/FrameOne';

export default function App() {
  return (
    <View>
      <FrameOne />
      <View>
        <StatusBar style="auto" />
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
    backgroundColor: '#B9F3E4',
    fontSize: 35,
    textAlign: 'center',
    width:'100%',
    paddingBottom: 20,
    paddingTop: 20,
    marginTop: -25
  },
  buttons: {
    gap: 30
  },
  buttonText: {
    fontSize: 35,
    textAlign: 'center',
  },
  switch: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  }
});

registerRootComponent(App);