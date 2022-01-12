import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { SIZES, FONTS, COLORS } from '../constants';

const FormInput = ({
  containerStyle,
  inputContainerStyle,
  label,
  placeholder,
  inputStyle,
  value = '',
  prependComponent,
  appendComponent,
  onChange,
  secureTextEntry,
  keyboardType = 'default',
  autoComplete = 'off',
  autoCapitalize = 'none',
  errorMsg = '',
  maxLength,
}) => {
  return (
    <View
      style={{
        ...containerStyle,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Text
          style={{
            color: COLORS.gray,
            ...FONTS.body4,
          }}
        >
          {label}
        </Text>
        <Text
          style={{
            color: COLORS.red,
            ...FONTS.body4,
          }}
        >
          {errorMsg}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: 55,
          paddingHorizontal: SIZES.padding,
          marginTop: 10,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGray2,
          ...inputContainerStyle,
        }}
      >
        {prependComponent}
        <TextInput
          style={{
            flex: 1,
            ...inputStyle,
          }}
          value={value}
          placeholder={placeholder}
          placeholderTextColot={COLORS.gray}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoComplete={autoComplete}
          autoCapitalize={autoCapitalize}
          maxLength={maxLength}
          onChangeText={(text) => onChange(text)}
        />
        {appendComponent}
      </View>
    </View>
  );
};

export default FormInput;
