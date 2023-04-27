import {StyleSheet} from 'react-native';
import {COLORS} from '@constants';

const styles = StyleSheet.create({
  reviewCard: {
    backgroundColor: COLORS.DARK_BLUE,
  },
  text: {
    color: COLORS.LIGHTBLUE,
    paddingVertical: '2%',
    textAlign: 'left',
    letterSpacing: 2,
    fontWeight: '600',
    fontSize: 12,
  },
  darkText: {
    color: COLORS.DARK_BLUE,
    paddingVertical: '2%',
    textAlign: 'left',
    letterSpacing: 2,
    fontWeight: '600',
    fontSize: 12,
  },
  infoContainer: {
    flexDirection: 'row',
    alignContent: 'space-between',
  },
  star: {
    alignSelf: 'flex-end',
    color: COLORS.WHITE,
  },
  icon: {
    alignSelf: 'center',
    marginHorizontal: '4%',
    color: COLORS.WHITE,
  },
  darkIcon: {
    alignSelf: 'center',
    marginHorizontal: '4%',
    color: COLORS.DARK_BLUE,
  },
  reviewContainer: {
    backgroundColor: COLORS.LIGHTBLUE,
  },
  review: {
    color: COLORS.DARK_BLUE,
    padding: '2%',
    textAlign: 'left',
    letterSpacing: 1,
    fontWeight: '300',
    fontSize: 12,
  },
  authorContainer: {
    flexDirection: 'row',
  },
});

export {styles};
