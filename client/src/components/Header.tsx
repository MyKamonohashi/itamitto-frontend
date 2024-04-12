import { StyleSheet, Text, Image } from 'react-native';

type HeaderProps = {
  text: string
}

export default function Header({ text }: HeaderProps) {
  return (
    <>
      <Image source={require('../assets/logo.png')} />
      <Text style={styles.header}>{text}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    textAlign: 'center',
    minWidth:'100%',
    paddingBottom: 20,
    paddingTop: 20,
  },
});