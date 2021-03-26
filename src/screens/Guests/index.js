import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import styles from './styles.js';

const GuestsScreen = (props) => {
  const navigation = useNavigation();

  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  return (
    <View style={styles.container}>
      <View>
        {/* Row 1: Adults */}
        <View style={styles.row}>
          {/* Titles */}
          <View>
            <Text style={styles.title}>Adults</Text>
            <Text style={styles.subtitle}>Ages 13 or above</Text>
          </View>
          {/* Buttons with value */}
          <View style={styles.rowButtons}>
            {/* - */}
            <Pressable
              style={styles.button}
              onPress={() => setAdults(Math.max(0, adults - 1))}>
              <Text style={styles.textButton}>-</Text>
            </Pressable>
            {/* value */}
            <Text style={styles.text}>{adults}</Text>
            {/* + */}
            <Pressable
              style={styles.button}
              onPress={() => setAdults(adults + 1)}>
              <Text style={styles.textButton}>+</Text>
            </Pressable>
          </View>
        </View>

        {/* Row 2: Children */}
        <View style={styles.row}>
          {/* Titles */}
          <View>
            <Text style={styles.title}>Children</Text>
            <Text style={styles.subtitle}>Ages 2-12</Text>
          </View>
          {/* Buttons with value */}
          <View style={styles.rowButtons}>
            {/* - */}
            <Pressable
              style={styles.button}
              onPress={() => setChildren(Math.max(0, children - 1))}>
              <Text style={styles.textButton}>-</Text>
            </Pressable>
            {/* value */}
            <Text style={styles.text}>{children}</Text>
            {/* + */}
            <Pressable
              style={styles.button}
              onPress={() => setChildren(children + 1)}>
              <Text style={styles.textButton}>+</Text>
            </Pressable>
          </View>
        </View>

        {/* Row 1: Infants */}
        <View style={styles.row}>
          {/* Titles */}
          <View>
            <Text style={styles.title}>Infants</Text>
            <Text style={styles.subtitle}>Under 2</Text>
          </View>
          {/* Buttons with value */}
          <View style={styles.rowButtons}>
            {/* - */}
            <Pressable
              style={styles.button}
              onPress={() => setInfants(Math.max(0, infants - 1))}>
              <Text style={styles.textButton}>-</Text>
            </Pressable>
            {/* value */}
            <Text style={styles.text}>{infants}</Text>
            {/* + */}
            <Pressable
              style={styles.button}
              onPress={() => setInfants(infants + 1)}>
              <Text style={styles.textButton}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <Pressable style={styles.searchButton}>
        <Text
          onPress={() =>
            navigation.navigate('Home', {
              screen: 'Explore',
              params: {
                screen: 'SearchResults',
              },
            })
          }
          style={styles.textSearchButton}>
          Search
        </Text>
      </Pressable>
    </View>
  );
};

export default GuestsScreen;
