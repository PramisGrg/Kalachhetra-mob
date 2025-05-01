import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text>I am Pramis</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
