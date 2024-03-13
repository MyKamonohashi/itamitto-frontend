import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import FrameOne from 'FrameOne';
import FrameThree from 'FrameThree';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <FrameThree />
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