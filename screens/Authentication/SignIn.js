import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { AuthLayout } from '../';
import { FormInput, CustomSwitch, TextButton, TextIconButton } from '../../components';
import { SIZES, FONTS, COLORS, icons } from '../../constants';
import { utils } from '../../utils';

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [saveMe, setSaveMe] = useState(false);

  const isEnableSignIn = () => {
    return email != '' && password != '' && emailError == '';
  };

  return (
    <AuthLayout title={"Let's Sign You In"} subTitle="Welcome back">
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
        <FormInput
          label="Password"
          secureTextEntry={!showPass}
          autoComplete="password"
          containerStyle={{
            marginTop: SIZES.radius,
          }}
          onChange={(value) => {
            setPassword(value);
          }}
          appendComponent={
            <TouchableOpacity
              style={{
                width: 40,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => setShowPass(!showPass)}
            >
              <Image
                source={showPass ? icons.eye_close : icons.eye}
                style={{
                  marginRight: -20,
                  height: 20,
                  width: 20,
                  tintColor: COLORS.gray,
                }}
              />
            </TouchableOpacity>
          }
        />

        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            justifyContent: 'space-between',
          }}
        >
          <CustomSwitch value={saveMe} onChange={(value) => setSaveMe(value)} />
          <TextButton
            label="Forgot Password"
            buttonContainerStyle={{
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.gray,
              ...FONTS.body4,
            }}
            onPress={() => navigation.navigate('ForgotPassword')}
          />
        </View>

        <TextButton
          label="Sign In"
          disabled={isEnableSignIn() ? false : true}
          buttonContainerStyle={{
            height: 55,
            alignItems: 'center',
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: isEnableSignIn() ? COLORS.primary : COLORS.transparentPrimary,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              color: COLORS.darkGray,
              ...FONTS.body3,
            }}
          >
            Don't have an account?
          </Text>
          <TextButton
            label="Sign Up."
            buttonContainerStyle={{
              marginLeft: 4,
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.h3,
            }}
            onPress={() => navigation.navigate('SignUp')}
          />
        </View>
      </View>
      {/* <View>
        <TextIconButton
          containerStyle={{
            height: 50,
            alignItems: 'center',
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.blue,
          }}
          icon={icons.fb}
          iconPosition="left"
          iconStyle={{
            width: 20,
            height: 20,
            tintColor: COLORS.white,
          }}
          label="Continue with Facebook"
          labelStyle={{
            marginLeft: SIZES.radius,
            color: COLORS.white,
          }}
          onPress={() => {}}
        />
        <TextIconButton
          containerStyle={{
            height: 50,
            alignItems: 'center',
            marginTop: SIZES.radius,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
          }}
          icon={icons.google}
          iconPosition="left"
          iconStyle={{
            width: 20,
            height: 20,
            tintColor: COLORS.black,
          }}
          label="Continue with Google"
          labelStyle={{
            marginLeft: SIZES.radius,
            color: COLORS.black,
          }}
          onPress={() => {}}
        />
      </View> */}
    </AuthLayout>
  );
};

export default SignIn;
