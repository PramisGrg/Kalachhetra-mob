import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaxWidthContainer from '../../../layout/max-width-container';
import SearchBar from './search-bar';
import ArtList from '../../../components/art/art-list';

const Explore = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MaxWidthContainer style={{gap: 10}}>
        <SearchBar />
        <ArtList />
      </MaxWidthContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Explore;
