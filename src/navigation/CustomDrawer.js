import React from 'react';
import {Pressable, Text, View, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
// import {Feather, AntDesign} from 'react-native-vector-icons';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';

const BG_IMG =
  'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500';

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{flex: 1}}>
      <View style={styles.container}>
        {/* User Row */}
        <View style={styles.userRow}>
          <View style={styles.pictureUser}>
            {/* <Image
              source={{uri: BG_IMG}}
              style={styles.pictureUser}
              // resizeMode="center"
            /> */}
            <Image
              source={require('../assets/person.png')}
              style={{height: 60, width: 60, borderRadius: 30}}
            />
          </View>
          <View>
            <Text style={styles.nameUser}>Youssef Barani</Text>
            {/* <Text style={styles.starUser}>5.00 *</Text> */}
          </View>
        </View>

        {/* Messages Row */}
        <View style={styles.messagesRow}>
          <Pressable onPress={() => console.warn('Messages')}>
            <Text style={styles.textMakeMoney}>Messages</Text>
          </Pressable>
        </View>

        {/* Do more */}
        <Pressable onPress={() => console.warn('Do more with your account')}>
          <Text style={styles.textDoMore}>Do more with your account</Text>
        </Pressable>

        {/* Make money */}
        {/* <Pressable onPress={() => console.warn('Make Money Driving')}>
          <Text style={styles.textMakeMoney}>Make money driving</Text>
        </Pressable> */}
      </View>
      {/* <DrawerItemList  /> */}
      <View>
        <DrawerItem
          label="Screen1"
          labelStyle={{color: 'white', marginLeft: -16}}
          onPress={() => props.navigation.navigate('Screen1')}
          icon={() => <Feather name="box" color="white" size={16} />}
        />
        <DrawerItem
          label="Screen2"
          labelStyle={{color: 'white', marginLeft: -16}}
          onPress={() => props.navigation.navigate('Screen2')}
          icon={() => <Feather name="box" color="white" size={16} />}
        />
        <DrawerItem
          label="Screen3"
          labelStyle={{color: 'white', marginLeft: -16}}
          onPress={() => props.navigation.navigate('Screen3')}
          icon={() => <Feather name="box" color="white" size={16} />}
        />
        <DrawerItem
          label="Catalogue"
          labelStyle={{color: 'white', marginLeft: -16}}
          onPress={() => props.navigation.navigate('Catalogue')}
          icon={() => <Feather name="book-open" color="white" size={16} />}
        />
        <DrawerItem
          label="Home"
          labelStyle={{color: 'white', marginLeft: -16}}
          onPress={() => props.navigation.navigate('Home')}
          icon={() => <Feather name="home" color="white" size={16} />}
        />
        <DrawerItem
          label="Search"
          labelStyle={{color: 'white', marginLeft: -16}}
          onPress={() => props.navigation.navigate('Search')}
          icon={() => <Feather name="search" color="white" size={16} />}
        />
        <DrawerItem
          label="Destination"
          labelStyle={{color: 'white', marginLeft: -16}}
          onPress={() => props.navigation.navigate('Destination')}
          icon={() => <Feather name="map-pin" color="white" size={16} />}
        />
      </View>
      {/* add logout button :) */}
      <View>
        <DrawerItem
          label="Logout"
          labelStyle={{color: 'white', marginLeft: -16}}
          onPress={() => alert('Are you sure to logout?')}
          icon={() => <Feather name="log-out" color="white" size={16} />}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
