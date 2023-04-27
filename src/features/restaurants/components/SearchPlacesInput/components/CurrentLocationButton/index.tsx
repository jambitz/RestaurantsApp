import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faLocationCrosshairs} from '@fortawesome/free-solid-svg-icons/faLocationCrosshairs';
import {TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {GeolocationUtils} from '@utils';

const CurrentLocationButton = ({onPress, inputRef}: any) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          GeolocationUtils.getCurrentLocation(onPress);
          inputRef.current.setAddressText('');
        }}
        style={styles.container}>
        <FontAwesomeIcon icon={faLocationCrosshairs} style={styles.icon} />
      </TouchableOpacity>
    </>
  );
};

export {CurrentLocationButton};
