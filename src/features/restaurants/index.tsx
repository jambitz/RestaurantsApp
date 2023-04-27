import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from './screens';

const Stack = createNativeStackNavigator();

const RestaurantsStack = () => (
  <Stack.Navigator>
    <Stack.Screen {...Screens.SearchRestaurants} />
    <Stack.Screen {...Screens.RestaurantDetail} />
  </Stack.Navigator>
);

export {RestaurantsStack};
