/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useGetArtsQuery} from '../../services/tanstack-query/queries/artist/artist.query';
import spacing from '../../theme/spacing';
import {SingleArt} from '../../types/art.types';
import ArtCard from './art-card';

const ArtList = () => {
  const {data: arts} = useGetArtsQuery();
  const artsData = arts?.data || [];

  return (
    <View style={styles.container}>
      <FlatList
        data={artsData}
        keyExtractor={(item: SingleArt) => item._id}
        renderItem={({item}) => <ArtCard item={item} />}
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
});

export default ArtList;
