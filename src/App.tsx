import React, {useEffect} from 'react';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import {NavigationContainer} from './navigation';
import {GeolocationUtils} from './utils';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  const queryClient = new QueryClient();

  useEffect(() => {
    GeolocationUtils.requestPermissions();
  }, []);

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer />
        </QueryClientProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;
