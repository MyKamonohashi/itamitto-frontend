import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { ListItem } from '@rneui/themed';
import { ListItemCheckBox } from '@rneui/base/dist/ListItem/ListItem.CheckBox';
import { ListItemContent } from '@rneui/base/dist/ListItem/ListItem.Content';
import { ListItemTitle } from '@rneui/base/dist/ListItem/ListItem.Title';

type LanguageType = {
  title: {
    pain_description: string
  },
  pain_description: {
    sharp: string,
    throbbing: string,
    aching: string,
    burning: string,
    cramping: string,
    numbness: string,
    constant: string,
    sudden: string
  },
  button: {
    submit: string
  }
}

interface FrameProps {
  language: LanguageType,
}

export default function FrameFour({language}: FrameProps) {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
  }

  return (
    <View style={styles.container}>
      <Text>{language.title.pain_description}</Text>
      <View>
        <ListItem>
          <ListItemCheckBox 
            checked={checked}
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            onPress={handleChecked}
            />
          <ListItemContent>
            <ListItemTitle>{language.pain_description.sharp}</ListItemTitle>
          </ListItemContent>
        </ListItem>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'space-around'
  },
});