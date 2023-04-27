import {StyleSheet} from 'react-native';
import {COLORS} from '@constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.ERROR_RED,
  },
  text: {
    color: COLORS.DARK_GRAY,
  },
});

export {styles};
