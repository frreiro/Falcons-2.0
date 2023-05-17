import {StyleSheet} from 'react-native';
import {GlobalStyles} from '../../../styles/GlobalStyles';

export const styles = StyleSheet.create({
  container: {
    height: 120,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: GlobalStyles.colors.primary,
  },
  text_title: {
    fontFamily: 'HandjetCircle-Bold',
    fontSize: 36,
    color: GlobalStyles.colors.light,
  },
});
