import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faX} from '@fortawesome/free-solid-svg-icons/faX';
import {TouchableOpacity} from 'react-native';
import {styles} from './styles';

interface ClearButtonProps {
  inputText?: string;
  onPress: () => void;
}

const ClearButton = ({inputText, onPress}: ClearButtonProps) => (
  <>
    {!!inputText && (
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <FontAwesomeIcon icon={faX} style={styles.Icon} />
      </TouchableOpacity>
    )}
  </>
);

export {ClearButton};
