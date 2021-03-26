import React from 'react';
import {View, ImageBackground, Text, Pressable} from 'react-native';
import styles from './styles';

const DummyScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.name}</Text>
    </View>
  );
};

export default DummyScreen;
