import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';

const TextIconButton = ({
  label,
  labelStyle,
  containerStyle,
  icon,
  iconPosition,
  iconStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        ...containerStyle,
      }}
      onPress={onPress}
    >
      {iconPosition == 'left' && (
        <Image
          source={icon}
          style={{
            marginLeft: 5,
            width: 12,
            height: 12,
            tintColor: COLORS.black,
            ...iconStyle,
          }}
        />
      )}
      <Text
        style={{
          ...FONTS.body3,
          ...labelStyle,
        }}
      >
        {label}
      </Text>
      {iconPosition == 'right' && (
        <Image
          source={icon}
          style={{
            marginLeft: 5,
            width: 12,
            height: 12,
            tintColor: COLORS.black,
            ...iconStyle,
          }}
        />
      )}
    </TouchableOpacity>
  );
};

export default TextIconButton;
