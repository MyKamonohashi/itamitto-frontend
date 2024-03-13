import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState, useEffect } from 'react';

export default function FrameThree() {

  return (
    <View>
      <Text>{language.title.pain_location}</Text>
      <View>
        <Pressable>
          <Text>{language.pain_location.head}</Text>
        </Pressable>
        <Pressable>
          <Text>{language.pain_location.stomach}</Text>
        </Pressable>
        <Pressable>
          <Text>{language.pain_location.arm}</Text>
        </Pressable>
        <Pressable>
          <Text>{language.pain_location.leg}</Text>
        </Pressable>
        <Pressable>
          <Text>{language.pain_location.back}</Text>
        </Pressable>
        <Pressable>
          <Text>{language.pain_location.shoulder}</Text>
        </Pressable>
        <Pressable>
          <Text>{language.pain_location.neck}</Text>
        </Pressable>
        <Pressable>
          <Text>{language.pain_location.chest}</Text>
        </Pressable>
        <Pressable>
          <Text>{language.pain_location.eyes_ears_nose}</Text>
        </Pressable>
        <Pressable>
          <Text>{language.button.submit}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

});