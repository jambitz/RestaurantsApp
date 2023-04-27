import * as React from 'react';
import {NavigationContainer as RNNavigationContainer} from '@react-navigation/native';
import {RestaurantsStack} from '../features';

const NavigationContainer = () => {
  return (
    <RNNavigationContainer>
      <RestaurantsStack />
    </RNNavigationContainer>
  );
};

export {NavigationContainer};
