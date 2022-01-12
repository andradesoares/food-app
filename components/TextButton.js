import React from 'react';
import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { COLORS, FONTS, SIZES } from '../constants';

const TextButton = ({
  label,
  labelStyle,
  buttonContainerStyle,
  onPress,
  disabled,
  label2 = '',
  label2Style,
}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        ...buttonContainerStyle,
      }}
      disabled={disabled}
      onPress={onPress}
    >
      <Text
        style={{
          color: COLORS.white,
          ...FONTS.h3,
          ...labelStyle,
        }}
      >
        {label}
      </Text>
      {label2 != '' && (
        <Text
          style={{
            flex: 1,
            textAlign: 'right',
            color: COLORS.white,
            ...FONTS.h3,
            ...label2Style,
          }}
        >
          {label2}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default TextButton;
