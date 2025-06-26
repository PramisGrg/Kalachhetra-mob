import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ArtistLogo, ArtLogo} from '../../assets/icons';
import {colors} from '../../theme';
import Hello from '../../assets/icons/art.svg';

const options = [
  {
    label: 'Art',
    logo: ArtLogo,
    value: 'ART',
  },
  {
    label: 'Artist',
    logo: ArtistLogo,
    value: 'ARTIST',
  },
];

const RadioButton = () => {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
      }}>
      {options.map(item => (
        <TouchableOpacity
          style={{
            borderWidth: 2,
            borderColor: colors.border,
            width: '50%',
          }}
          key={item.label}>
          <View>
            <Text>{item.label}</Text>
          </View>
        </TouchableOpacity>
      ))}
      {/* <Hello /> */}
    </View>
  );
};

export default RadioButton;
