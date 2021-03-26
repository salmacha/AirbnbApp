import React from 'react';
import {Pressable, View, Text, Image} from 'react-native';
// import Icon2 from '@expo/vector-icons/MaterialCommunityIcons'
// import Icon from '@expo/vector-icons/Ionicons'
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

import styles from './styles.js';

const Cards = (props) => {
  const card = props.card;
  const navigation = useNavigation();

  return (
    <View style={[styles.container, {backgroundColor: '#FFF'}]}>
      <Pressable
        style={styles.searchButton}
        onPress={() =>
          navigation.navigate('Screen2', {
            data: card.products,
          })
        }>
        <Image
          style={styles.image}
          source={{
            uri: card.image,
          }}
        />
        <Text style={styles.title} numberOfLines={3}>
          {card.title}
        </Text>
      </Pressable>
      {/* <View style={styles.col}>
               <Icon 
                 name={this.props.icon}
                 size={30}
                 color={this.props.bg == "red" ? "#FFF":"red"}
               />
               <TouchableOpacity onPress={this.props.onPress}>
                    <Icon2
                        style={{marginLeft:50}}
                        name="dots-vertical"
                        size={30}
                        color="#b8b8aa"
                    />
               </TouchableOpacity>
            </View> */}
      {/* Image */}
      {/* <Image
        style={styles.image}
        source={{
          uri: card.image,
        }}
      />
      <Text style={styles.title} numberOfLines={3}>
        {card.title}
      </Text> */}
      {/* <Text
        style={[
          styles.number,
          {
            color: '#FFF',
          },
        ]}>
        {card.totalPrice}
      </Text> */}
    </View>
  );
};

export default Cards;
