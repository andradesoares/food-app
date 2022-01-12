import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { AuthLayout } from '../';
import { FONTS, SIZES, COLORS, icons } from '../../constants';
import { FormInput, TextButton, TextIconButton } from '../../components';
import { utils } from '../../utils';

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPass, setShowPass] = useState(false);

  const isEnableSignUp = () => {
    return (
      email != '' &&
      username != '' &&
      password != '' &&
      emailError == '' &&
      usernameError != '' &&
      passwordError != ''
    );
  };

  return (
    <AuthLayout
      title="Getting Started"
      subTitle="Create an account to contiune"
      titleContainerStyle={{
        marginTop: SIZES.radius,
      }}
    >
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding,
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
          label="Username"
          containerStyle={{
            marginTop: SIZES.radius,
          }}
          onChange={(value) => {
            setUsername(value);
          }}
          errorMsg={usernameError}
          appendComponent={
            <View
              style={{
                justifyContent: 'center',
              }}
            >
              <Image
                source={
                  username == '' || (username != '' && usernameError == '')
                    ? icons.correct
                    : icons.cancel
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    username == ''
                      ? COLORS.gray
                      : username != '' && usernameError == ''
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
        />
        <FormInput
          label="Password"
          autoComplete="password"
          containerStyle={{
            marginTop: SIZES.radius,
          }}
          onChange={(value) => {
            utils.validatePassword(value, setPasswordError);

            setPassword(value);
          }}
          errorMsg={passwordError}
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

        <TextButton
          label="Sign Up"
          //   disabled={isEnableSignUp() ? false : true}
          buttonContainerStyle={{
            height: 55,
            alignItems: 'center',
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: isEnableSignUp() ? COLORS.primary : COLORS.transparentPrimary,
          }}
          onPress={() => navigation.navigate('Otp')}
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
            Already Have an account?
          </Text>
          <TextButton
            label="Sign In."
            buttonContainerStyle={{
              marginLeft: 4,
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.h3,
            }}
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    </AuthLayout>
  );
};

export default SignUp;
