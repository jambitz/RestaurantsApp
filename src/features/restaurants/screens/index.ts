import {SCREEN_NAMES, COLORS} from '@constants';
import {RestaurantDetail} from './RestaurantDetail';
import {RestaurantsLocator} from './RestaurantsLocator';

const Screens = {
  SearchRestaurants: {
    name: SCREEN_NAMES.RESTAURANTS_LOCATOR,
    component: RestaurantsLocator,
    options: {
      headerShown: false,
    },
  },
  RestaurantDetail: {
    name: SCREEN_NAMES.RESTAURANT_DETAIL,
    component: RestaurantDetail,
    options: {
      title: 'Restaurant Detail',
      headerStyle: {backgroundColor: COLORS.DARK_BLUE},
      headerTintColor: COLORS.LIGHTBLUE,
    },
  },
};

export {Screens};
