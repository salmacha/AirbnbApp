import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DestinationSearchScreen from '../screens/DestinationSearch';
import GuestsScreen from '../screens/Guests';

import HomeTabNavigator from './HomeTabNavigator';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeNavigator = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Home'}
        component={HomeTabNavigator}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={'Destination Search'}
        component={DestinationSearchScreen}
        options={{
          title: 'Search your destination',
        }}
      />

      <Stack.Screen
        name={'Guests'}
        component={GuestsScreen}
        options={{
          title: 'How many people ?',
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
