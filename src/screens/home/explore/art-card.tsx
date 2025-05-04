import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useGetArtsQuery} from '../../../services/tanstack-query/queries/artist/artist.query';
import {SingleArt} from '../../../types/art.types';
import {Bookmark, Heart, MessageCircle} from 'lucide-react-native';
import spacing from '../../../theme/spacing';
import typography from '../../../theme/typography';

const ArtCart = () => {
  const {data: arts} = useGetArtsQuery();
  const artsData = arts?.data || [];

  return (
    <View style={styles.container}>
      <FlatList
        data={artsData}
        keyExtractor={(item: SingleArt) => item._id}
        renderItem={({item}) => (
          <View style={{gap: spacing.xs}}>
            <Image
              style={styles.image}
              source={{uri: item.images.featured}}
              resizeMode="cover"
            />
            <Text style={styles.textBold}>{item.title}</Text>
            <Text numberOfLines={2}>{item.description}</Text>
            <View style={{flexDirection: 'row', gap: 16}}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: spacing.xs,
                }}>
                <Heart />
                <Text>{item.likeCount}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: spacing.xs,
                }}>
                <MessageCircle />
                <Text>{item.commentCount}</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Bookmark />
              </TouchableOpacity>
            </View>
          </View>
        )}
        // eslint-disable-next-line react/no-unstable-nested-components
        ItemSeparatorComponent={() => <View style={{height: spacing.lg}} />}
        contentContainerStyle={{paddingBottom: 120}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textBold: {
    fontWeight: typography.fontWeight.bold,
  },
  image: {
    width: '100%',
    height: 350,
    borderRadius: 10,
  },
});

export default ArtCart;
