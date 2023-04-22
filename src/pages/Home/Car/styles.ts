import {StyleSheet} from 'react-native';
import {GlobalStyles} from '../../../styles/GlobalStyles';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  box: {
    width: 281,
    height: 177,
    backgroundColor: GlobalStyles.colors.third,
    borderRadius: 20,
    position: 'relative',
    marginBottom: 72,
  },
  car: {
    width: '130%',
    height: 267,
    position: 'absolute',
    top: -20,
    right: -50,
    shadowColor: '#000',
    shadowOffset: {width: 10, height: 15},
    shadowRadius: 10,
    shadowOpacity: 0.6,
  },
  car_text: {
    fontFamily: 'ShareTechMono-Regular',
    color: GlobalStyles.colors.light,
    fontSize: 20,
  },
});
