import {Search} from 'lucide-react-native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import MaxWidthContainer from '../../layout/max-width-container';
import spacing from '../../theme/spacing';
import {TouchableWithoutFeedback} from '@gorhom/bottom-sheet';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const SearchBar = () => {
  const navigation = useNavigation<
    NavigationProp<{
      SearchScreen: undefined;
    }>
  >();

  const handleNext = () => {
    console.log('I am pramis gurung');
    navigation.navigate('SearchScreen');
  };

  //   const sheetRef = useRef<BottomSheet>(null);

  //   // variables
  //   const snapPoints = useMemo(() => ['50%'], []);

  //   const handleOpenPress = useCallback(() => {
  //     sheetRef.current?.expand();
  //   }, []);

  //   const renderBackdrop = useCallback(
  //     (props: any) => (
  //       <BottomSheetBackdrop
  //         {...props}
  //         disappearsOnIndex={-1}
  //         appearsOnIndex={0}
  //         opacity={0.1}
  //       />
  //     ),
  //     [],
  //   );
  return (
    <>
      <TouchableWithoutFeedback onPress={() => handleNext()}>
        <MaxWidthContainer>
          <View style={styles.container}>
            <Search style={styles.icon} />
            <Text>Search your art</Text>
          </View>
        </MaxWidthContainer>
      </TouchableWithoutFeedback>

      {/* <SlidersHorizontal
              onPress={handleOpenPress}
              style={styles.filterButton}
            /> */}
      {/* <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        enablePanDownToClose={true}>
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🔥</Text>
        </BottomSheetView>
      </BottomSheet> */}
    </>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    height: 60,
    borderWidth: 1,
    borderRadius: 40,
    borderColor: '#ccc',
    //ios shadow
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    //android shadow
    backgroundColor: 'white',
    elevation: 4,
    paddingHorizontal: 1,
  },
  icon: {
    alignContent: 'center',
  },
});
