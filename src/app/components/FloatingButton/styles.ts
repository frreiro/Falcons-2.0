import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  position: {
    bottom: 90,
    right: 50,
  },
  container: {
    position: 'absolute',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    shadowColor: '#00213B',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    justifyContent: 'center',
    alignItems: 'center',
  },

  menu: {
    backgroundColor: '#00213B',
  },

  submenu: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    backgroundColor: '#00213B',
  },
});
