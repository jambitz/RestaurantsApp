import React from 'react';
import {View, Text} from 'react-native';

import {Card} from '@components';
import {styles} from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBookOpen} from '@fortawesome/free-solid-svg-icons/faBookOpen';
import {faPerson} from '@fortawesome/free-solid-svg-icons/faPerson';
import {ReviewCardProps} from '@types';

const ReviewCard = ({title, author, summary}: ReviewCardProps) => {
  return (
    <Card containerStyle={styles.reviewCard} pressDisabled>
      <>
        <View style={styles.infoContainer}>
          <FontAwesomeIcon size={18} icon={faBookOpen} style={styles.icon} />
          <Text style={styles.text}>
            {title.length > 23 ? title.slice(0, 23) + '..' : title}
          </Text>
        </View>
        <Card containerStyle={styles.reviewContainer} pressDisabled>
          <>
            <Text style={styles.review}>{summary}</Text>
            <View style={styles.authorContainer}>
              <FontAwesomeIcon
                size={18}
                icon={faPerson}
                style={styles.darkIcon}
              />
              <Text style={styles.darkText}>{author}</Text>
            </View>
          </>
        </Card>
      </>
    </Card>
  );
};

export {ReviewCard};
