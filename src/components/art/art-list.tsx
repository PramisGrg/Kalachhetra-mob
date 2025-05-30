import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useGetArtsQuery} from '../../services/tanstack-query/queries/artist/artist.query';
import spacing from '../../theme/spacing';
import {SingleArt} from '../../types/art.types';
import ArtCard from './art-card';
import MaxWidthContainer from '../../layout/max-width-container';

const ArtList = () => {
  const {data: arts} = useGetArtsQuery();
  const artsData = arts?.data || [];

  return (
    <View style={styles.container}>
      <MaxWidthContainer>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={artsData}
          keyExtractor={(item: SingleArt) => item._id}
          renderItem={({item}) => <ArtCard item={item} />}
          ItemSeparatorComponent={() => <View style={{height: spacing.lg}} />}
        />
      </MaxWidthContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ArtList;
