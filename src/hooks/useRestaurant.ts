import {useQuery} from '@tanstack/react-query';

import {QUERY_KEYS} from '../constants';
import {ApiRestaurants} from '../api';

const useRestaurant = (locationId: string) => {
  const {data, isError, isLoading, isFetching} = useQuery(
    [QUERY_KEYS.GET_RESTAURANT_DETAIL],
    () => ApiRestaurants.getRestaurantDetail(locationId),
    {enabled: !!locationId},
  );

  return {restaurant: data, isError, isLoading: isLoading || isFetching};
};

export {useRestaurant};
