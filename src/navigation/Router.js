import React from 'react';
import {View, Button, Text, Pressable, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  DrawerItem,
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import Feather from 'react-native-vector-icons/Feather';
import Animated from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';

// import the screens
import HomeNavigator from './HomeNavigator';
import CustomDrawer from './CustomDrawer';
import DummyScreen from '../screens/Dummy';
import CatalogueScreen from '../screens/Catalogue';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';

// [x] create stacks for each screen
// [x] add header button to show the drawer

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Screens = ({navigation, style}) => {
  return (
    <Animated.View style={[{flex: 1, overflow: 'hidden'}, style]}>
      <Stack.Navigator
        screenOptions={{
          // headerTransparent: true,
          headerTitle: null,
          headerLeft: () => (
            <Pressable onPress={() => navigation.openDrawer()}>
              <Feather
                name="menu"
                // size={26}
                size={32}
                color="black"
                style={{paddingHorizontal: 10}}
              />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Screen3')}
              style={{position: 'relative'}}>
              <Feather
                name="shopping-cart"
                size={35}
                color="black"
                style={{paddingHorizontal: 12}}
              />
              <Text
                style={{
                  position: 'absolute',
                  top: -8,
                  right: 8,
                  backgroundColor: '#d3215f',
                  padding: 4,
                  borderRadius: 25,
                  color: '#fff',
                }}>
                3
              </Text>
            </Pressable>
          ),
        }}>
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
        <Stack.Screen name="Catalogue" component={CatalogueScreen} />
        <Stack.Screen name="Home" component={HomeNavigator} />
        <Stack.Screen name="Search">
          {() => <DummyScreen name={'Search'} />}
        </Stack.Screen>
        <Stack.Screen name="Destination">
          {() => <DummyScreen name={'Destination'} />}
        </Stack.Screen>
      </Stack.Navigator>
    </Animated.View>
  );
};

// [x] build custom Drawer menu
// [] style the Drawer menu

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Screen1"
        onPress={() => props.navigation.navigate('Screen1')}
      />
      <DrawerItem
        label="Catalogue"
        onPress={() => props.navigation.navigate('Catalogue')}
      />
      <DrawerItem
        label="Home"
        onPress={() => props.navigation.navigate('Home')}
      />
      <DrawerItem
        label="Search"
        onPress={() => props.navigation.navigate('Search')}
      />
      <DrawerItem
        label="Destination"
        onPress={() => props.navigation.navigate('Destination')}
      />
    </DrawerContentScrollView>
  );
};
const Router = (props) => {
  const [progress, setProgress] = React.useState(new Animated.Value(0));
  //create animation for screen scale
  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  // animate the borderRadius of the scene screens
  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 10],
  });

  const screensStyles = {borderRadius, transform: [{scale}]};
  return (
    // '#004177', '#01eafb'
    <LinearGradient style={{flex: 1}} colors={['#002f43', '#14a8b2']}>
      <Drawer.Navigator
        // the drawer -> screen animated should be slide
        drawerType="slide"
        overlayColor="transparent"
        initialRouteName="Screen1"
        drawerStyle={{width: '50%', backgroundColor: 'transparent'}}
        // contentContainerStyle={{flex: 1}}
        drawerContentOptions={{
          activeBackgroundColor: 'transparent',
          activeTintColor: 'green',
          inactiveTintColor: 'green',
        }}
        // set the scene background th transparent
        sceneContainerStyle={{backgroundColor: 'transparent'}}
        drawerContent={(
          props,
          // props: DrawerContentComponentProps<DrawerContentOptions>,
        ) => {
          setProgress(props.progress);
          return <CustomDrawer {...props} />;
        }}
        // drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Drawer.Screen name="Screens">
          {(props) => <Screens {...props} style={screensStyles} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </LinearGradient>
  );
};

export default Router;
