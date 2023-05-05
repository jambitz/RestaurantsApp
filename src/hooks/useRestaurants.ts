import {useQuery} from '@tanstack/react-query';
import {ApiRestaurants} from '@api';
import {QUERY_KEYS} from '@constants';
import {Coordinates} from '@types';

const useRestaurants = ({latitude, longitude}: Coordinates) => {
  const {data, isError, isFetching, isSuccess} = useQuery(
    [QUERY_KEYS.GET_RESTAURANTS, {latitude, longitude}],
    () =>
      ApiRestaurants.getRestaurants({
        latitude: latitude!.toString(),
        longitude: longitude!.toString(),
      }),
    {enabled: !!latitude && !!longitude, staleTime: 60000},
  );

  const restaurants = data?.data
    .filter(r => r.name && r.rating)
    .sort((a, b) => Number(b.rating) - Number(a.rating))
    .slice(0, 10);

  return {restaurants, isError, isFetching, isSuccess};
};

export {useRestaurants};
