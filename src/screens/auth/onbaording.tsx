import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import backgroundImage from '../../assets/images/backgroung.jpeg';
import {spacing, typography} from '../../theme';
import MaxWidthContainer from '../../layout/max-width-container';
import CustomButton from '../../components/ui/button';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthNavigationType} from '../../types/navigation.types';

type NavigationProp = StackNavigationProp<AuthNavigationType>;

const Onbaroding = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.background}
      resizeMode="cover">
      <MaxWidthContainer style={{flex: 1, justifyContent: 'space-between'}}>
        <View style={styles.headerContainer}>
          <Text style={styles.text}>Made by Pramis Gurung</Text>
          <Text style={styles.titleText}>Kalachhetra</Text>
          <Text style={styles.text}>where imagination meets creation</Text>
          <Text style={[styles.text, {marginTop: '20%'}]}>
            A Palette of emotions
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            style={{width: '50%'}}
            onPress={() => {
              navigation.navigate('RegisterScreen');
            }}
            variant="ghost"
            title="Sign Up"
          />
          <CustomButton
            style={{width: '50%'}}
            onPress={() => {
              navigation.navigate('LoginScreen');
            }}
            title="Get Started"
          />
        </View>
      </MaxWidthContainer>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  headerContainer: {
    marginTop: '30%',
  },
  titleText: {
    fontSize: 70,
    color: 'white',
  },
  text: {
    color: 'white',
    fontSize: typography.fontSizes.md,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: '15%',
    gap: spacing.md,
  },
});

export default Onbaroding;
