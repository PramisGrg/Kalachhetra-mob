import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import MaxWidthContainer from '../../../layout/max-width-container';
import SearchBar from './search-bar';
import ArtCard from './art-card';

const Explore = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <MaxWidthContainer style={{gap: 10}}>
          <SearchBar />
          <ArtCard />
        </MaxWidthContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Explore;
