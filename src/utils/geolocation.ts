import {Coordinates} from '@types';
import {PermissionsAndroid, Platform} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const requestPermissions = async () => {
  if (Platform.OS === 'ios') {
    Geolocation.requestAuthorization('always');
  }

  if (Platform.OS === 'android') {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
  }
};

type OnSuccess = (cordinates: Coordinates) => void;

const getCurrentLocation = (onSuccess: OnSuccess) => {
  requestPermissions();
  return Geolocation.getCurrentPosition(
    position => {
      onSuccess({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    },
    error => {
      console.log(error.code, error.message);
    },
    {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
  );
};

export const GeolocationUtils = {
  requestPermissions,
  getCurrentLocation,
};
