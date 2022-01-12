import React from 'react';
import { View, Text, Image } from 'react-native';
import { FONTS, SIZES } from '../constants';

const IconLabel = ({ containerStyle, icon, iconStyle, label, labelStyle }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 7,
        paddingHorizontal: SIZES.radius,
        borderRadius: SIZES.radius,
        ...containerStyle,
      }}
    >
      <Image
        source={icon}
        style={{
          width: 14,
          height: 14,
          ...iconStyle,
        }}
      />
      <Text
        style={{
          marginLeft: 10,
          ...FONTS.body4,
          ...labelStyle,
        }}
      >
        {label}
      </Text>
    </View>
  );
};

export default IconLabel;
