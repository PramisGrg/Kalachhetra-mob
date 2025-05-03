import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import MaxWidthContainer from '../../../layout/max-width-container';
import SearchBar from './search-bar';

const Explore = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <MaxWidthContainer style={{gap: 10}}>
          <SearchBar />
          <Text>Explore</Text>
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
