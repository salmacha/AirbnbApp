import React from 'react';
import {
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Transition, Transitioning} from 'react-native-reanimated';
import data from '../../../assets/data/data';
import Cards from '../../components/Cards';
import styles from './styles.js';

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
);

const index = () => {
  const [currentIndex, setCurrentIndex] = React.useState(null);
  const ref = React.useRef();
  return (
    <Transitioning.View
      ref={ref}
      transition={transition}
      style={styles.container}>
      <StatusBar hidden />
      {data.map(({bg, color, category, subCategories}, index) => {
        return (
          <TouchableOpacity
            key={category}
            onPress={() => {
              ref.current.animateNextTransition();
              setCurrentIndex(index === currentIndex ? null : index);
            }}
            style={styles.cardContainer}
            activeOpacity={0.9}>
            <View
              style={[
                styles.card,
                {backgroundColor: bg},
              ]}>
              <Text style={[styles.heading, {color}]}>{category}</Text>
              {index === currentIndex && (
                <ScrollView
                  style={styles.subCategoriesList}
                  showsHorizontalScrollIndicator={false}
                  horizontal>
                  {subCategories.map((subCategorie) => (
                    <Cards key={subCategorie.id} card={subCategorie} />
                  ))}
                </ScrollView>
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </Transitioning.View>
  );
};

export default index;
