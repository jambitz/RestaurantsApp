import {SCREEN_NAMES} from '@constants';

export type StackParamList = {
  [SCREEN_NAMES.RESTAURANT_DETAIL]: {locationId: string};
  [SCREEN_NAMES.RESTAURANTS_LOCATOR]: undefined;
};
