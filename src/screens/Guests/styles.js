import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    height: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  title: {
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#8d8d8d',
  },
  rowButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: '#676767',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 20,
    color: '#474747',
  },
  text: {
    marginHorizontal: 20,
    fontSize: 16,
  },
  searchButton: {
    marginBottom: 20,
    backgroundColor: '#f15454',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  textSearchButton: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
