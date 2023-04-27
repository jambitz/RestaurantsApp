import React from 'react';
import {ViewStyle, TouchableOpacity} from 'react-native';

import {styles} from './styles';

interface CardProps {
  onPress?: () => void;
  containerStyle?: ViewStyle;
  children?: JSX.Element;
  pressDisabled?: boolean;
}

const Card = ({
  onPress,
  containerStyle,
  children,
  pressDisabled,
}: CardProps) => (
  <TouchableOpacity
    disabled={pressDisabled}
    style={[styles.container, containerStyle]}
    onPress={onPress}>
    {children}
  </TouchableOpacity>
);

export {Card};
