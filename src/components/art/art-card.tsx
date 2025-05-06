import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import ArtActions from './art-actions';
import typography from '../../theme/typography';
import spacing from '../../theme/spacing';
import {SingleArt} from '../../types/art.types';

const ArtCard = ({item}: {item: SingleArt}) => {
  return (
    <View style={{gap: spacing.xs}}>
      <Image
        style={styles.image}
        source={{uri: item.images.featured}}
        resizeMode="cover"
      />
      <Text style={styles.header}>{item.title}</Text>
      <Text numberOfLines={2}>{item.description}</Text>
      <ArtActions likeCount={item.likeCount} commentCount={item.commentCount} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 350,
    borderRadius: 10,
  },
  header: {
    fontWeight: typography.fontWeight.bold,
    fontSize: typography.fontSizes.lg,
  },
});

export default ArtCard;
