import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 180,
    width: 110,
    borderRadius: 40,
    padding: 15,
    marginLeft: 10,
  },
  image: {
    // width: '100%',
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',

    // aspectRatio: 3 / 2,
    resizeMode: 'cover',
  },
  col: {
    flexDirection: 'row',
  },
  title: {
    marginTop: 10,
    color: '#5b5b5b',
    fontWeight: 'bold',
    fontSize: 13,
  },
  number: {
    fontWeight: 'bold',
    fontSize: 22,
  },
});

export default styles;
