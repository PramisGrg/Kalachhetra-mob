import React, {useCallback, useRef} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import {Search, SlidersHorizontal} from 'lucide-react-native';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const SearchBar = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <View style={styles.container}>
          <Search style={styles.icon} />
          <TextInput
            placeholder="Search Art"
            style={styles.input}
            placeholderTextColor="#999"
          />
          <SlidersHorizontal
            onPress={handlePresentModalPress}
            style={styles.filterButton}
          />
        </View>

        <BottomSheetModal
          ref={bottomSheetModalRef}
          onChange={handleSheetChanges}>
          <BottomSheetView>
            <Text>Awesome 🎉</Text>
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',

    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    // elevation: 4,
    paddingHorizontal: 1,
  },
  icon: {
    marginHorizontal: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  filterButton: {
    padding: 4,
    marginHorizontal: 8,
  },
});
