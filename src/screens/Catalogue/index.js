import React from 'react';
import {
  StatusBar,
  FlatList,
  Image,
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Easing,
  SafeAreaViewBase,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import catalogue from '../../../assets/data/catalogue';
const {width, height} = Dimensions.get('screen');
import faker from 'faker';
import feed from '../../../assets/data/feed';

faker.seed(10);

const DATA = [...Array(30).keys()].map((_, i) => {
  return {
    key: faker.random.uuid(),
    image: `https://randomuser.me/api/portraits/${faker.helpers.randomize([
      'women',
      'men',
    ])}/${faker.random.number(60)}.jpg`,
    name: faker.name.findName(),
    jobTitle: faker.name.jobTitle(),
    email: faker.internet.email(),
  };
});

// Credits to
const BG_IMG =
  'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500';

const SPACING = 10;
// const AVATAR_SIZE = 180;
const AVATAR_SIZE = 120;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

const index = () => {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Image
        source={{uri: BG_IMG}}
        style={StyleSheet.absoluteFillObject}
        blurRadius={80}
      />
      <Animated.FlatList
        data={catalogue}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          padding: SPACING,
          paddingTop: StatusBar.currentHeight || 42,
        }}
        renderItem={({item, index}) => {
          const inputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 2),
          ];

          const opacityInputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 0.5),
          ];

          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          });

          const opacity = scrollY.interpolate({
            inputRange: opacityInputRange,
            outputRange: [1, 1, 1, 0],
          });

          return (
            <Animated.View
              style={{
                flexDirection: 'row',
                // padding: SPACING,
                marginBottom: SPACING,
                backgroundColor: 'rgba(255,255,255,0.8)',
                borderRadius: 12,
                shadowOffset: {
                  width: 0,
                  height: 10,
                },
                shadowOpacity: 0.3,
                shadowRadius: 20,
                opacity,
                transform: [{scale}],
              }}>
              {/* <Image
                source={{uri: item.image}}
                style={{
                  width: AVATAR_SIZE,
                  height: AVATAR_SIZE,
                  borderRadius: AVATAR_SIZE,
                  marginRight: SPACING / 2,
                }}
              /> */}
              <ImageBackground
                source={{
                  uri: item.image,
                }}
                style={{
                  // width: AVATAR_SIZE,
                  // height: AVATAR_SIZE,
                  // borderRadius: AVATAR_SIZE,
                  // marginRight: SPACING / 2,
                  //   opacity: 0.9,
                  width: '100%',
                  // height: 500,
                  height: 120,
                  borderRadius: 12,
                  resizeMode: 'cover',
                  justifyContent: 'center',
                }}>
                {/* <Text style={{fontSize: 22, fontWeight: '700'}}>Go Near</Text> */}
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: '700',
                    color: 'white',
                    textAlign: 'center',
                  }}>
                  {item.type}
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    opacity: 0.8,
                    color: 'white',
                    textAlign: 'center',
                  }}>
                  {item.number}
                </Text>
              </ImageBackground>
              <FlatList
                data={feed}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item1) => item1.id}
                contentContainerStyle={{
                  paddingVertical: 20,
                }}
                renderItem={({item1, index1}) => {
                  return (
                    <TouchableOpacity
                      style={{
                        padding: 10,
                        paddingBottom: 20,
                        backgroundColor: '#fc6d3f',
                        borderRadius: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 10,
                      }}>
                      <View
                        style={{
                          width: 50,
                          height: 50,
                          borderRadius: 25,
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: 'white',
                        }}></View>
                    </TouchableOpacity>
                  );
                }}
              />
              {/* <View>
                <Text style={{fontSize: 22, fontWeight: '700'}}>
                  {item.name}
                </Text>
                <Text style={{fontSize: 18, opacity: 0.7}}>
                  {item.jobTitle}
                </Text>
                <Text style={{fontSize: 14, opacity: 0.8, color: '#0099cc'}}>
                  {item.email}
                </Text>
              </View> */}
            </Animated.View>
          );
        }}
      />
    </View>
  );
};

export default index;
