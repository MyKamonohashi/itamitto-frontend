import { StyleSheet, Text, View, Switch } from 'react-native';

interface LanguageToggleProps {
  isEnabled: boolean,
  onValueChange: () => void
}

export default function LanguageToggle({ isEnabled, onValueChange }: LanguageToggleProps) {

  return (
    <View style={styles.switch}>
      <Text>EN</Text>
      <Switch 
        onValueChange={onValueChange}
        value={isEnabled} /> 
      <Text>JP</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  switch: {
    marginBottom: 40,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  }
});