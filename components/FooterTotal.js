import React from 'react';
import { View, Text, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TextButton, LineDivider } from '../components';
import { FONTS, SIZES, COLORS } from '../constants';

const FooterTotal = ({ subTotal, shippingFee, total, onPress }) => {
  return (
    <View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 4 }}
        colors={[COLORS.transparent, COLORS.gray2]}
        style={{
          position: 'absolute',
          top: -20,
          left: 0,
          right: 0,
          height: 30,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
      />
      <View
        style={{
          padding: SIZES.padding,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: COLORS.white,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          <Text
            style={{
              flex: 1,
              ...FONTS.body3,
            }}
          >
            Subtotal
          </Text>
          <Text
            style={{
              ...FONTS.h3,
            }}
          >
            ${subTotal.toFixed(2)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            marginBottom: SIZES.padding,
          }}
        >
          <Text
            style={{
              flex: 1,
              ...FONTS.body3,
            }}
          >
            Shipping Fee
          </Text>
          <Text
            style={{
              ...FONTS.h3,
            }}
          >
            ${shippingFee.toFixed(2)}
          </Text>
        </View>
        <LineDivider />
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.padding,
          }}
        >
          <Text
            style={{
              flex: 1,
              ...FONTS.h2,
            }}
          >
            Total
          </Text>
          <Text
            style={{
              ...FONTS.h2,
            }}
          >
            ${total.toFixed(2)}
          </Text>
        </View>
        <TextButton
          buttonContainerStyle={{
            height: 60,
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
          }}
          label="Place your Order"
          onPress={onPress}
        />
      </View>
    </View>
  );
};

export default FooterTotal;
