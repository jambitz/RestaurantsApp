import {Restaurant} from '../types';
import {api} from './api';

interface RestaurantsResponse {
  data: Restaurant[];
}

interface GetRestaurantsParams {
  latitude: string;
  longitude: string;
}

const getRestaurants = async ({latitude, longitude}: GetRestaurantsParams) => {
  const {data} = await api.get<RestaurantsResponse>('/list-by-latlng', {
    params: {
      latitude,
      longitude,
      distance: '2',
      open_now: 'false',
      lunit: 'km',
      lang: 'en_US',
    },
  });
  return data;
};

const getRestaurantDetail = async (locationId: string) => {
  const {data} = await api.get<Restaurant>('/get-details', {
    params: {
      location_id: locationId,
      lang: 'en_US',
    },
  });
  return data;
};

export const ApiRestaurants = {
  getRestaurants,
  getRestaurantDetail,
};
