import React from 'react';
import { Image, TouchableWithoutFeedback, Text } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { COLORS, FONTS, SIZES } from '../constants';

const TabButton = ({
  label,
  icon,
  isFocused,
  onPress,
  outerContainerStyle,
  innerContainerStyle,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View
        style={[
          {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          },
          outerContainerStyle,
        ]}
      >
        <Animated.View
          style={[
            {
              flexDirection: 'row',
              width: '80%',
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 25,
            },
            innerContainerStyle,
          ]}
        >
          <Image
            source={icon}
            style={{
              width: 18,
              height: 18,
              tintColor: isFocused ? COLORS.white : COLORS.gray,
            }}
          />
          {isFocused && (
            <Text numberOfLines={1} style={{ marginLeft: 7, color: COLORS.white, ...FONTS.h4 }}>
              {label}
            </Text>
          )}
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default TabButton;
