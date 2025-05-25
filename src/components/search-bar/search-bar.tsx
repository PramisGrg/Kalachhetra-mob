import {Search} from 'lucide-react-native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
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
    navigation.navigate('SearchScreen');
  };

  return (
    <TouchableWithoutFeedback onPress={() => handleNext()}>
      <MaxWidthContainer>
        <View style={styles.container}>
          <Search style={styles.icon} />
          <Text>Search your art</Text>
        </View>
      </MaxWidthContainer>
    </TouchableWithoutFeedback>
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
