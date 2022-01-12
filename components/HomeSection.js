import React from 'react';
import { Image, TouchableOpacity, Text, View } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { COLORS, FONTS, SIZES, icons } from '../constants';

const HomeSection = ({ title, onPress, children }) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: SIZES.padding,
          marginTop: 30,
          marginBottom: 20,
        }}
      >
        <Text style={{ flex: 1, ...FONTS.h3 }}>{title}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text
            style={{
              color: COLORS.primary,
              ...FONTS.body3,
            }}
          >
            Show All
          </Text>
        </TouchableOpacity>
      </View>
      {children}
    </View>
  );
};

export default HomeSection;
