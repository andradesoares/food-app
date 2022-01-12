import React from 'react';
import { Image, TouchableOpacity, Text, View } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { COLORS, FONTS, SIZES, icons } from '../constants';

const VerticalFoodCart = ({ containerStyle, imageStyle, item, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        width: 200,
        padding: SIZES.radius,
        alignItems: 'center',
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
          }}
        >
          <Image
            source={icons.calories}
            style={{
              height: 30,
              width: 30,
            }}
          />
          <Text
            style={{
              color: COLORS.darkGray2,
              ...FONTS.body5,
            }}
          >
            {item.calories} Calories
          </Text>
        </View>
        <Image
          source={icons.love}
          style={{
            height: 20,
            width: 20,
            tintColor: item.isFavourite ? COLORS.primary : COLORS.gray,
          }}
        />
      </View>
      <View
        style={{
          height: 150,
          width: 150,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          source={item.image}
          style={{
            height: '100%',
            width: '100%',
          }}
        />
      </View>
      <View
        style={{
          alignItems: 'center',
          marginTop: -20,
        }}
      >
        <Text
          style={{
            ...FONTS.h3,
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            color: COLORS.darkGray2,
            textAlign: 'center',
            ...FONTS.body5,
          }}
        >
          {item.description}
        </Text>
        <Text
          style={{
            marginTop: SIZES.radius,
            ...FONTS.h2,
          }}
        >
          ${item.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default VerticalFoodCart;
