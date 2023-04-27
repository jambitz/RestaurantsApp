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
import {COLORS} from '@constants';
import {SearchPlacesInput, PreviewCard, Map} from '../../components';
import {styles} from './styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from '@navigation';

type NavigationProps = NativeStackNavigationProp<
  StackParamList,
  'RESTAURANT_DETAIL'
>;

const RestaurantsLocator = () => {
  const {navigate} = useNavigation<NavigationProps>();

  const [location, setLocation] = useState<Coordinates>({});

  const {restaurants, isLoading} = useRestaurants(location);

  const ref = useRef<BottomSheetFlatListMethods>(null);

  return (
    <>
      <SearchPlacesInput onPress={setLocation} location={location} />
      <View style={styles.container}>
        <Map restaurants={restaurants} location={location} listRef={ref} />
      </View>
      <Loader isLoading={isLoading}>
        <BottonDrawer>
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
            contentContainerStyle={{backgroundColor: COLORS.METALLIC_BLUE}}
          />
        </BottonDrawer>
      </Loader>
    </>
  );
};

export {RestaurantsLocator};
