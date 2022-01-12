import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FONTS, icons, COLORS } from '../constants';

const Rating = ({
  rating,
  iconStyle,
  activeColor = COLORS.orange,
  inactiveColor = COLORS.lightOrange3,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
      }}
    >
      <Image
        source={icons.star}
        style={{
          tintColor: rating >= 1 ? activeColor : inactiveColor,
          height: 15,
          width: 15,
          ...iconStyle,
        }}
      />
      <Image
        source={icons.star}
        style={{
          tintColor: rating >= 2 ? activeColor : inactiveColor,
          height: 15,
          width: 15,
          ...iconStyle,
        }}
      />
      <Image
        source={icons.star}
        style={{
          tintColor: rating >= 3 ? activeColor : inactiveColor,
          height: 15,
          width: 15,
          ...iconStyle,
        }}
      />
      <Image
        source={icons.star}
        style={{
          tintColor: rating >= 4 ? activeColor : inactiveColor,
          height: 15,
          width: 15,
          ...iconStyle,
        }}
      />
      <Image
        source={icons.star}
        style={{
          tintColor: rating >= 5 ? activeColor : inactiveColor,
          height: 15,
          width: 15,
          ...iconStyle,
        }}
      />
    </View>
  );
};

export default Rating;
