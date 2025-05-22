import {View, Text, StyleSheet, TextInput} from 'react-native';
import React, {useCallback, useMemo, useRef} from 'react';
import MaxWidthContainer from '../../../layout/max-width-container';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SlidersHorizontal} from 'lucide-react-native';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from '@gorhom/bottom-sheet';

const Search = () => {
  const sheetRef = useRef<BottomSheet>(null);

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
    <SafeAreaView style={styles.container}>
      <MaxWidthContainer>
        <TextInput placeholder="Search arts" />
        <View>
          <Text>Search art page</Text>
        </View>
        <SlidersHorizontal onPress={handleOpenPress} />
      </MaxWidthContainer>

      <BottomSheet
        index={-1}
        ref={sheetRef}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        enablePanDownToClose={true}>
        <BottomSheetView>
          <Text>Awesome 🔥</Text>
        </BottomSheetView>
      </BottomSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Search;
