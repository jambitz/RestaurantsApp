import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../constants/colors';

const styles = StyleSheet.create({
  card: {
    marginBottom: '2%',
    width: '93%',
  },

  container: {
    backgroundColor: COLORS.METALLIC_BLUE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    margin: 4,
    color: COLORS.LIGHTBLUE,
    textAlign: 'center',
    letterSpacing: 5,
    fontWeight: '300',
    fontSize: 30,
  },
  data: {
    maxWidth: '80%',
    letterSpacing: 3,
    fontWeight: '200',
    color: COLORS.LIGHTBLUE,
    fontSize: 14,
  },
  dataContainer: {
    flexDirection: 'row',
    marginVertical: '1%',
    paddingVertical: '2%',
  },
  icon: {
    alignSelf: 'center',
    marginHorizontal: '4%',
    color: COLORS.WHITE,
  },
  image: {
    alignSelf: 'center',
    borderColor: COLORS.DARK_BLUE,
    borderWidth: 2,
    marginVertical: 4,
    borderRadius: 12,
  },
  reviewCard: {
    backgroundColor: COLORS.JELLY_BEAN_BLUE,
  },
});

export {styles};
