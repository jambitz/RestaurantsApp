import React, {useState, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  BottomSheetFlatList,
  BottomSheetFlatListMethods,
} from '@gorhom/bottom-sheet';
import {View} from 'react-native';
import {BottonDrawer, Loader} from '@components';
import {SCREEN_NAMES} from '@constants';
import {useRestaurants} from '@hooks';
import {Coordinates} from '@types';
import {WORDING} from '@constants';
import {SearchPlacesInput, PreviewCard, Map} from '../../components';
import {styles} from './styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from '@navigation';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from 'react-native';

type NavigationProps = NativeStackNavigationProp<
  StackParamList,
  'RESTAURANTS_LOCATOR'
>;

const RestaurantsLocator = () => {
  const {navigate} = useNavigation<NavigationProps>();

  const [location, setLocation] = useState<Coordinates>({});

  const {restaurants, isFetching, isSuccess} = useRestaurants(location);

  const ref = useRef<BottomSheetFlatListMethods>(null);

  return (
    <>
      <SafeAreaView>
        <SearchPlacesInput onPress={setLocation} location={location} />
        <View style={styles.container}>
          <Map restaurants={restaurants} location={location} listRef={ref} />
        </View>
      </SafeAreaView>
      <Loader isLoading={isFetching} style={styles.loader}>
        <>
          {isSuccess && (
            <BottonDrawer>
              {restaurants?.length ? (
                <BottomSheetFlatList
                  ref={ref}
                  data={restaurants}
                  keyExtractor={item => item.location_id}
                  renderItem={({item}) => (
                    <PreviewCard
                      name={item.name}
                      rating={item.rating}
                      address={item.address_obj.street1}
                      thumbnail={item?.photo?.images?.small?.url}
                      onPress={() =>
                        navigate(SCREEN_NAMES.RESTAURANT_DETAIL, {
                          locationId: item.location_id,
                        })
                      }
                    />
                  )}
                />
              ) : (
                <View style={{alignItems: 'center'}}>
                  <Text>{WORDING.RESTAURANTS_NOT_FOUND}</Text>
                </View>
              )}
            </BottonDrawer>
          )}
        </>
      </Loader>
    </>
  );
};

export {RestaurantsLocator};
