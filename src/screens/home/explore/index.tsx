import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const Explore = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text>Explore</Text>
          <Text>This is Ejajd</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Explore;
