import React from 'react';
import {Text, View, Dimensions} from 'react-native';
import {styles} from './styles';
import {useRestaurant} from '@hooks';
import {Card, Loader} from '@components';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMapLocationDot} from '@fortawesome/free-solid-svg-icons/faMapLocationDot';
import {faKitchenSet} from '@fortawesome/free-solid-svg-icons/faKitchenSet';
import {FlatList, Image} from 'react-native';
import {ReviewCard} from '../../components';

interface Cuisine {
  name: string;
}

const RestaurantDetail = ({route}: any) => {
  const {locationId} = route.params;

  const {restaurant, isLoading} = useRestaurant(locationId);

  return (
    <Loader isLoading={isLoading}>
      <View style={styles.container}>
        <Card pressDisabled containerStyle={styles.card}>
          <Text style={styles.title}>{restaurant?.name}</Text>
        </Card>
        {restaurant?.photo?.images?.medium?.url && (
          <Card pressDisabled containerStyle={styles.card}>
            <Image
              style={styles.image}
              source={{
                uri: restaurant?.photo?.images?.medium?.url,
                width: 350,
                height: 180,
              }}
            />
          </Card>
        )}
        <Card pressDisabled containerStyle={styles.card}>
          <>
            <View style={styles.dataContainer}>
              <FontAwesomeIcon
                size={24}
                icon={faMapLocationDot}
                style={styles.icon}
              />
              <Text style={styles.data}>
                {restaurant?.address_obj?.street1}
              </Text>
            </View>
            <View style={styles.dataContainer}>
              <FontAwesomeIcon
                size={24}
                icon={faKitchenSet}
                style={styles.icon}
              />
              <Text style={styles.data}>
                {restaurant?.cuisine
                  ?.map((cuisine: Cuisine) => cuisine.name)
                  .join(', ')}
              </Text>
            </View>
          </>
        </Card>
        <FlatList
          contentContainerStyle={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
          }}
          data={restaurant?.reviews.slice(0, 10)}
          renderItem={({item}: any) => (
            <ReviewCard
              title={item.title}
              author={item.author}
              summary={item.summary}
            />
          )}
          keyExtractor={item => item.author}
        />
      </View>
    </Loader>
  );
};

export {RestaurantDetail};
