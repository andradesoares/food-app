import React from 'react';
import { Image, TouchableWithoutFeedback, Text, TouchableOpacity } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { COLORS, FONTS, SIZES } from '../constants';

const IconButton = ({ containerStyle, icon, iconStyle, onPress }) => {
  return (
    <TouchableOpacity style={{ ...containerStyle }} onPress={onPress}>
      <Image
        source={icon}
        style={{
          width: 20,
          height: 20,
          tintColor: COLORS.white,
          ...iconStyle,
        }}
      />
    </TouchableOpacity>
  );
};

export default IconButton;
