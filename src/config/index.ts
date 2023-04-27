import ENV from 'react-native-config';

const Config = {
  apiURL: ENV.API_URL,
  rapidAPIKey: ENV.API_KEY,
  mapsURL: ENV.GOOGLE_MAPS_API_KEY,
  mapsAPIKey: ENV.GOOGLE_MAPS_API_KEY,
};

export {Config};
