import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#212121',
    padding: 15,
  },
  userRow: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  pictureUser: {
    backgroundColor: '#cacaca',
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    marginBottom: 20,
  },
  nameUser: {
    color: 'white',
    fontSize: 24,
    marginBottom: 20,
  },
  starUser: {
    color: 'lightgrey',
  },
  textMakeMoney: {
    color: 'white',
    paddingVertical: 5,
  },
  textDoMore: {
    color: '#dddddd',
    paddingVertical: 5,
  },
  messagesRow: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#919191',
    borderBottomColor: '#919191',
    paddingVertical: 5,
    marginVertical: 10,
  },
});

export default styles;
