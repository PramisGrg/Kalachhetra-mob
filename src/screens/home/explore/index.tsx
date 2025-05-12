import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ArtList from '../../../components/art/art-list';
import MaxWidthContainer from '../../../layout/max-width-container';
import SearchBar from './search-bar';

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
    paddingTop: 10,
  },
});

export default Explore;
