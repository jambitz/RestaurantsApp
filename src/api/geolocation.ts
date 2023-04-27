import {mapsApi} from './api';

interface LocationByCoordsResponse {
  results: [{formatted_address: string}];
}

interface LocationByCoordsParams {
  lat: string;
  long: string;
  key: string;
}

const getLocationByCoordenates = async ({
  lat,
  long,
  key,
}: LocationByCoordsParams) => {
  const {data} = await mapsApi.get<LocationByCoordsResponse>('/geocode/json', {
    params: {
      latlng: `${lat},${long}`,
      key,
    },
  });
  return data;
};

export const ApiGeolocation = {
  getLocationByCoordenates,
};
