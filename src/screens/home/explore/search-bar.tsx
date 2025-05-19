import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {Search, SlidersHorizontal} from 'lucide-react-native';
import React, {useCallback, useMemo, useRef} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const SearchBar = () => {
  const sheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['50%'], []);

  const handleOpenPress = useCallback(() => {
    sheetRef.current?.expand();
  }, []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.1}
      />
    ),
    [],
  );
  return (
    <>
      <View style={styles.container}>
        <Search style={styles.icon} />
        <TextInput
          placeholder="Search Art"
          style={styles.input}
          placeholderTextColor="#999"
        />
        <SlidersHorizontal
          onPress={handleOpenPress}
          style={styles.filterButton}
        />
      </View>

      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        enablePanDownToClose={true}>
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🔥</Text>
        </BottomSheetView>
      </BottomSheet>
    </>
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
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
