import {StyleSheet} from 'react-native';
import {COLORS} from '@constants';

const inputStyles = StyleSheet.create({
  textInputContainer: {
    width: '100%',
    backgroundColor: COLORS.METALLIC_BLUE,
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  textInput: {
    backgroundColor: COLORS.METALLIC_BLUE,
    color: COLORS.LIGHTBLUE,
    fontSize: 16,
  },
  description: {
    color: COLORS.LIGHTBLUE,
    fontSize: 16,
  },
  row: {
    color: COLORS.LIGHTBLUE,
    backgroundColor: COLORS.TEAL_BLUE,
  },
});

const styles = StyleSheet.create({
  InputContainer: {
    width: '100%',
    flexDirection: 'row',
    elevation: 1,
  },
});

export {inputStyles, styles};
