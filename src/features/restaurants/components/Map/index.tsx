import React, {useMemo} from 'react';
import {View, Keyboard} from 'react-native';
import {styles} from './styles';
import MapView, {Marker} from 'react-native-maps';
import {Coordinates, Restaurant} from '@types';
import {GEOLOCATION} from '@constants';

interface MapProps {
  restaurants?: Restaurant[];
  location: Coordinates;
  listRef: any;
}

const Map = ({restaurants, location, listRef}: MapProps) => {
  const markers = useMemo(
    () =>
      restaurants &&
      restaurants
        .filter(m => !isNaN(m.latitude) && !isNaN(m.longitude))
        .map((restuarant, index) => (
          <Marker
            identifier={restuarant.location_id}
            key={restuarant.location_id}
            coordinate={{
              latitude: Number(restuarant.latitude),
              longitude: Number(restuarant.longitude),
            }}
            title={restuarant.name}
            description={restuarant.description}
            onPress={() => {
              listRef.current?.scrollToIndex({index});
            }}
          />
        )),
    [restaurants],
  );

  return (
    <View style={styles.container}>
      <MapView
        onPress={() => Keyboard.dismiss()}
        region={
          !location.latitude && location.longitude
            ? GEOLOCATION.INITIAL_REGION
            : {
                ...GEOLOCATION.INITIAL_REGION,
                ...location,
              }
        }
        style={styles.map}>
        {markers}
      </MapView>
    </View>
  );
};

export {Map};
