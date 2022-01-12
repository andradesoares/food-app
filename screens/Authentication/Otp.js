import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import { FONTS, SIZES, COLORS } from '../../constants';
import { TextButton } from '../../components';
import { AuthLayout } from '../';

const Otp = ({ navigation }) => {
  const [code, setCode] = useState('');
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          return prevTimer;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AuthLayout
      title="OTP Authentication"
      subTitle="An authentication code has been sent to your email"
      titleContainerStyle={{
        marginTop: SIZES.padding * 2,
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          marginTop: SIZES.padding * 2,
        }}
      >
        <SmoothPinCodeInput
          style={{
            width: '100%',
            height: 50,
          }}
          cellStyle={{
            width: 65,
            height: 65,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
          }}
          value={code}
          restrictToNumbers={true}
          onTextChange={(code) => setCode(code)}
          onFulfill={(code) => {}}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: SIZES.padding,
          }}
        >
          <Text
            style={{
              color: COLORS.darkGray,
              ...FONTS.body3,
            }}
          >
            Didn't receice code?
          </Text>
          <TextButton
            label={`Resend (${timer}s)`}
            disabled={timer == 0 ? false : true}
            buttonContainerStyle={{
              marginLeft: 10,
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.h3,
            }}
            onPress={() => setTimer(60)}
          />
        </View>
      </View>
      <View style={{}}>
        <TextButton
          label="Continue"
          buttonContainerStyle={{
            height: 50,
            alignItems: 'center',
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
          }}
          onPress={() => {}}
        />
        <View
          style={{
            marginTop: SIZES.padding,
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: COLORS.darkGray,
              ...FONTS.body3,
            }}
          >
            By signing up you agree to our
          </Text>
          <TextButton
            label="terms and conditions."
            buttonContainerStyle={{
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.body3,
            }}
            onPress={() => {}}
          />
        </View>
      </View>
    </AuthLayout>
  );
};

export default Otp;
