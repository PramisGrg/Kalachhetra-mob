import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import React from 'react';
import {useGetArtsQuery} from '../../../services/tanstack-query/queries/artist/artist.query';
import {SingleArt} from '../../../types/art.types';

const ArtCart = () => {
  const {data: arts} = useGetArtsQuery();
  const artsData = arts?.data || [];

  return (
    <View style={styles.container}>
      <FlatList
        data={artsData}
        keyExtractor={(item: SingleArt) => item._id}
        renderItem={({item}) => (
          <View style={{flex: 1}}>
            <Image
              style={{width: '100%', height: 180}}
              source={{uri: item.images.featured}}
            />
            <Text>hellodsadasdd</Text>
            <Text>{item.title}</Text>
          </View>
        )}
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

export default ArtCart;
