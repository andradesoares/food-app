import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { AuthLayout } from '../';
import { FormInput, CustomSwitch, TextButton, TextIconButton } from '../../components';
import { SIZES, FONTS, COLORS, icons } from '../../constants';
import { utils } from '../../utils';

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const isEnableSend = () => {
    return email != '' && emailError == '';
  };

  return (
    <AuthLayout
      title={'Password Recovery'}
      subTitle="Please enter your email address to recovery your password"
    >
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding * 2,
        }}
      >
        <FormInput
          label="Email"
          keyboardType="email-address"
          autoComplete="email"
          onChange={(value) => {
            utils.validateEmail(value, setEmailError);
            setEmail(value);
          }}
          email={email}
          errorMsg={emailError}
          appendComponent={
            <View
              style={{
                justifyContent: 'center',
              }}
            >
              <Image
                source={
                  email == '' || (email != '' && emailError == '') ? icons.correct : icons.cancel
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    email == ''
                      ? COLORS.gray
                      : email != '' && emailError == ''
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
        />
        <TextButton
          label="Send Email"
          disabled={isEnableSend() ? false : true}
          buttonContainerStyle={{
            height: 55,
            alignItems: 'center',
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: isEnableSend() ? COLORS.primary : COLORS.transparentPrimary,
          }}
        />
      </View>
    </AuthLayout>
  );
};

export default ForgotPassword;
