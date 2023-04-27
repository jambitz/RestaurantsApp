import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faX} from '@fortawesome/free-solid-svg-icons/faX';
import {TouchableOpacity} from 'react-native';
import {styles} from './style';

const ClearButton = (ref: any) => {
  return (
    <>
      {!!ref.current?.getAddressText() && (
        <TouchableOpacity
          onPress={() => {
            ref.current.setAddressText('');
          }}
          style={styles.container}>
          <FontAwesomeIcon icon={faX} style={styles.Icon} />
        </TouchableOpacity>
      )}
    </>
  );
};

export {ClearButton};
