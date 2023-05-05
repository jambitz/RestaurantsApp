import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  resultContainer: {
    backgroundColor: COLORS.METALLIC_BLUE,
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  loader: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: '50%',
  },
});

export {styles};
