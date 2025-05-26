import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import backgroundImage from '../../assets/images/backgroung.jpeg';
import {typography} from '../../theme';
import MaxWidthContainer from '../../layout/max-width-container';

const Onbaroding = () => {
  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.background}
      resizeMode="cover">
      <MaxWidthContainer>
        <View style={styles.headerContainer}>
          <Text style={styles.text}>Pramis Gurung</Text>
          <Text style={styles.titleText}>Kalachhetra</Text>
          <Text style={styles.text}>where imagination meets creation</Text>
        </View>
        <Text style={styles.text}>A Palette of emotions</Text>
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
    marginBottom: '20%',
  },
  titleText: {
    fontSize: 70,
    color: 'white',
  },
  text: {
    color: 'white',
    fontSize: typography.fontSizes.md,
  },
});

export default Onbaroding;
