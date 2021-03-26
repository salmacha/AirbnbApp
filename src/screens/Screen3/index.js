import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import foods from '../../consts/foods';
import {PrimaryButton} from '../../components/Button';
import styles from './styles.js';

const index = ({navigation}) => {
  const CartCard = ({item}) => {
    return (
      <View style={styles.cartCard}>
        <Image source={item.image} style={{height: 80, width: 80}} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.name}</Text>
          <Text style={{fontSize: 13, color: COLORS.grey}}>
            {item.ingredients}
          </Text>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>
            {item.price} dt
          </Text>
        </View>
        {/* Buttons with value */}
        <View style={styles.rowButtons}>
          {/* - */}
          <Pressable
            style={styles.button}
          >
            <Text style={styles.textButton}>-</Text>
          </Pressable>
          {/* value */}
          <Text style={styles.text}>3</Text>
          {/* + */}
          <Pressable
            style={styles.button}
          >
            <Text style={styles.textButton}>+</Text>
          </Pressable>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <View style={styles.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Cart</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        data={foods}
        renderItem={({item}) => <CartCard item={item} />}
        ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
        ListFooterComponent={() => (
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 15,
              }}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                Total Price
              </Text>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>50 dt</Text>
            </View>
            <View style={{marginHorizontal: 30}}>
              <PrimaryButton title="CHECKOUT" />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default index;
