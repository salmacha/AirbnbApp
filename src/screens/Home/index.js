import React from 'react';
import {View, ImageBackground, Text, Pressable} from 'react-native';

import Fontisto from 'react-native-vector-icons/Fontisto';

import styles from './styles';

const HomeScreen = (props) => {
  return (
    <View>
      {/* Search bard */}
      <Pressable
        style={styles.searchButton}
        onPress={() => console.warn(`data: Search btn clicked`)}>
        <Fontisto name="search" size={25} color={'#f15454'} />
        <Text style={styles.searchButtonText}>Where are you going?</Text>
      </Pressable>

      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}>
        {/* Title */}
        <Text style={styles.title}>Go Near</Text>

        {/* Button */}
        <Pressable
          style={styles.button}
          onPress={() => console.warn(`data: Explore btn clicked`)}>
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
