import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ArtList from '../../../components/art/art-list';
import SearchBar from '../../../components/search-bar/search-bar';

const Explore = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
      <ArtList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 10,
  },
});

export default Explore;
