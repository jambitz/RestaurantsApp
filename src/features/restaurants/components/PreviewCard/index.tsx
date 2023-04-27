import React from 'react';
import {View, Text, Image} from 'react-native';
import {Card} from '@components';
import {styles} from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons/faStar';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons/faLocationDot';

interface PreviewCardProps {
  name: string;
  address?: string;
  rating: string;
  thumbnail?: string;
  onPress: () => void;
}

const PreviewCard = ({
  name,
  address,
  rating,
  thumbnail,
  onPress,
}: PreviewCardProps) => {
  return (
    <Card onPress={onPress} containerStyle={styles.card}>
      <>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {name.length > 16 ? name.slice(0, 16) + '..' : name}
          </Text>
          <Text style={styles.rating}>{rating}</Text>
          <FontAwesomeIcon icon={faStar} style={styles.starIcon} />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.addresContainer}>
            {address && (
              <>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={styles.locationIcon}
                />
                <Text style={styles.address}>
                  {address.length > 24 ? address.slice(0, 27) + '..' : address}
                </Text>
              </>
            )}
          </View>
          <Image
            style={styles.image}
            source={{uri: thumbnail, width: 70, height: 70}}
          />
        </View>
      </>
    </Card>
  );
};

export {PreviewCard};
