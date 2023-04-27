import React from 'react';
import {ActivityIndicator, View, ViewStyle} from 'react-native';
import {COLORS} from '@constants';
import {styles} from './styles';

interface LoaderProps {
  isLoading: boolean;
  children?: JSX.Element;
  size?: number;
  color?: string;
  style?: ViewStyle;
}

const Loader = ({isLoading, size, color, style, children}: LoaderProps) =>
  isLoading ? (
    <View style={[styles.container, style]}>
      <ActivityIndicator
        size={size || 'large'}
        color={color || COLORS.STEEL_BLUE}
      />
    </View>
  ) : (
    <>{children}</>
  );

export {Loader};
