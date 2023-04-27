import React, {useEffect} from 'react';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import {NavigationContainer} from './navigation';
import {GeolocationUtils} from './utils';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  const queryClient = new QueryClient();

  useEffect(() => {
    GeolocationUtils.requestPermissions();
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer />
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
};

export default App;
