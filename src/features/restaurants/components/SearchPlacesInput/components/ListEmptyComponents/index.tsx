import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

const ListEmptyComponent = (
  <View style={styles.container}>
    <Text style={styles.text}>No results were found!</Text>
  </View>
);

export {ListEmptyComponent};
