import {StyleSheet} from 'react-native';
import {COLORS} from '@constants';

const styles = StyleSheet.create({
  card: {
    height: 120,
  },
  title: {
    color: COLORS.LIGHTBLUE,
    marginLeft: '2%',
    letterSpacing: 4,
    fontWeight: '300',
    fontSize: 18,
  },
  titleContainer: {
    flexDirection: 'row',
  },
  rating: {
    color: COLORS.WHITE,
    textAlign: 'left',
    letterSpacing: 1,
    fontSize: 18,
    fontWeight: '500',
    paddingLeft: '2%',
  },
  address: {
    textAlign: 'left',
    letterSpacing: 2,
    color: COLORS.DARK_BLUE,
    fontSize: 13,
  },
  image: {
    width: 70,
    height: 70,
    alignSelf: 'flex-end',
    borderColor: COLORS.METALLIC_BLUE,
    borderRadius: 70,
    borderWidth: 4,
    marginRight: '2%',
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addresContainer: {
    marginLeft: '2%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    marginLeft: '1%',
    color: COLORS.LIGHTBLUE,
  },
  locationIcon: {
    marginRight: '2%',
    alignSelf: 'center',
    color: COLORS.LIGHTBLUE,
  },
});

export {styles};
