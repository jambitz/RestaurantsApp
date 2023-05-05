import React, {useRef} from 'react';
import {View} from 'react-native';
import {
  GooglePlacesAutocomplete,
  GooglePlacesAutocompleteRef,
} from 'react-native-google-places-autocomplete';
import {Config} from '@config';
import {inputStyles, styles} from './styles';

import {
  CurrentLocationButton,
  ClearButton,
  ListEmptyComponent,
} from './components/';
import {COLORS} from '@constants';

const SearchPlacesInput = ({onPress}: any) => {
  const ref = useRef<GooglePlacesAutocompleteRef>(null);

  return (
    <View style={styles.InputContainer}>
      <GooglePlacesAutocomplete
        ref={ref}
        placeholder="Search"
        minLength={2}
        listEmptyComponent={ListEmptyComponent}
        onFail={error => console.log(error)}
        onNotFound={() => console.log('no results')}
        fetchDetails={true}
        styles={{...inputStyles}}
        enablePoweredByContainer={false}
        onPress={(_, details = null) => {
          onPress({
            latitude: details?.geometry.location.lat,
            longitude: details?.geometry.location.lng,
          });
        }}
        query={{
          key: Config.mapsAPIKey,
          language: 'en',
        }}
        textInputProps={{
          placeholderTextColor: COLORS.LIGHTBLUE,
          autoFocus: true,
        }}
        renderRightButton={() => (
          <ClearButton
            inputText={ref.current?.getAddressText()}
            onPress={() => ref.current?.setAddressText('')}
          />
        )}
        renderLeftButton={() => (
          <CurrentLocationButton
            onPress={onPress}
            onClear={() => ref.current?.setAddressText('')}
          />
        )}
      />
    </View>
  );
};

export {SearchPlacesInput};
