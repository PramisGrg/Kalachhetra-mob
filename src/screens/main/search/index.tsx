import {View, Text, StyleSheet, TextInput} from 'react-native';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import MaxWidthContainer from '../../../layout/max-width-container';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SlidersHorizontal} from 'lucide-react-native';
import {Search as SearchIcon} from 'lucide-react-native';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {useTheme} from '@react-navigation/native';
import {borderRadius, spacing} from '../../../theme';

const Search = () => {
  const [focus, setFocus] = useState(false);
  const sheetRef = useRef<BottomSheet>(null);
  const {colors} = useTheme();

  const snapPoints = useMemo(() => ['70%'], []);

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
      <MaxWidthContainer style={{paddingTop: 10}}>
        <View
          style={[
            styles.inputWrapper,
            {borderColor: focus ? colors.secondary : colors.border},
          ]}>
          <View
            style={{
              flexDirection: 'row',
              gap: spacing.sm,
              alignItems: 'center',
            }}>
            <SearchIcon />
            <TextInput
              onBlur={() => setFocus(false)}
              onFocus={() => setFocus(true)}
              placeholder="Search arts"
            />
          </View>
          <SlidersHorizontal onPress={handleOpenPress} />
        </View>
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
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.lg,
  },
});

export default Search;
