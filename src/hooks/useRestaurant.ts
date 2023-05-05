import {useQuery} from '@tanstack/react-query';

import {QUERY_KEYS} from '@constants';
import {ApiRestaurants} from '@api';

const useRestaurant = (locationId: string) => {
  const {data, isError, isLoading} = useQuery(
    [QUERY_KEYS.GET_RESTAURANT_DETAIL, locationId],
    () => ApiRestaurants.getRestaurantDetail(locationId),
    {enabled: !!locationId, staleTime: 60000},
  );

  return {restaurant: data, isError, isLoading: isLoading};
};

export {useRestaurant};
