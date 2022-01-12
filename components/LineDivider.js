import React from 'react';
import { View, Text } from 'react-native';
import { COLORS } from '../constants';

const LineDivider = ({ lineStyle }) => {
  return (
    <View
      style={{
        height: 2,
        width: '100%',
        backgroundColor: COLORS.lightGray2,
        ...lineStyle,
      }}
    />
  );
};

export default LineDivider;
