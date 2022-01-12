import React, { useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Header, LineDivider, TextButton, TextIconButton } from '../../components';
import { SIZES, FONTS, COLORS, icons, constants, dummyData } from '../../constants';

const DeliveryStatus = ({ navigation }) => {
  const [currentStep, setCurrentStep] = useState(2);

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: SIZES.padding,
        backgroundColor: COLORS.white,
      }}
    >
      <Header
        title="DELIVERY STATUS"
        containerStyle={{
          height: 50,
          marginHorizontal: SIZES.padding,
          marginTop: 40,
        }}
      />
      <View
        style={{
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.padding,
        }}
      >
        <Text style={{ textAlign: 'center', color: COLORS.gray, ...FONTS.body4 }}>
          Estimated Delivery
        </Text>
        <Text style={{ textAlign: 'center', color: COLORS.black, ...FONTS.h2 }}>
          28 Dec 2021 / 12:30PM
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginTop: SIZES.padding,
            paddingVertical: SIZES.padding,
            borderRadius: SIZES.radius,
            borderWidth: 2,
            borderColor: COLORS.lightGray2,
            backgroundColor: COLORS.white2,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 20,
              paddingHorizontal: SIZES.padding,
            }}
          >
            <Text style={{ ...FONTS.h3 }}>Track Order</Text>
            <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>NY01234</Text>
          </View>
          <LineDivider
            lineStyle={{
              backgroundColor: COLORS.lightGray2,
            }}
          />
          <View
            style={{
              marginTop: SIZES.padding,
              paddingHorizontal: SIZES.padding,
            }}
          >
            {constants.track_order_status.map((item, index) => {
              return (
                <View key={`StatusList-${index}`}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginVertical: -5,
                    }}
                  >
                    <Image
                      source={icons.check_circle}
                      style={{
                        width: 25,
                        height: 25,
                        tintColor: index <= currentStep ? COLORS.primary : COLORS.lightGray1,
                      }}
                    />
                    <View
                      style={{
                        marginLeft: SIZES.radius,
                      }}
                    >
                      <Text style={{ ...FONTS.h3 }}>{item.title}</Text>
                      <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>{item.sub_title}</Text>
                    </View>
                  </View>
                  {index < constants.track_order_status.length - 1 && (
                    <View>
                      {index < currentStep && (
                        <View
                          style={{
                            height: 35,
                            width: 3,
                            marginLeft: 11,
                            backgroundColor: COLORS.primary,
                            zIndex: -1,
                          }}
                        />
                      )}
                      {index >= currentStep && (
                        <Image
                          source={icons.dotted_line}
                          resizeMode="cover"
                          style={{ width: 3, height: 35, marginLeft: 11 }}
                        />
                      )}
                    </View>
                  )}
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          marginTop: SIZES.radius,
          marginBottom: SIZES.padding,
        }}
      >
        {currentStep < constants.track_order_status.length - 1 && (
          <View
            style={{
              flexDirection: 'row',
              height: 55,
            }}
          >
            <TextButton
              buttonContainerStyle={{
                width: '40%',
                borderRadius: 10,
                backgroundColor: COLORS.lightGray2,
              }}
              label="Cancel"
              labelStyle={{
                color: COLORS.primary,
              }}
              onPress={() => navigation.navigate('FoodDetail')}
            />
            <TextIconButton
              containerStyle={{
                flex: 1,
                marginLeft: SIZES.radius,
                borderRadius: 10,
                backgroundColor: COLORS.primary,
              }}
              label="Map View"
              labelStyle={{
                color: COLORS.white,
                ...FONTS.h3,
              }}
              icon={icons.map}
              iconPosition="left"
              iconStyle={{
                width: 25,
                height: 25,
                marginRight: 10,
                tintColor: COLORS.white,
              }}
              onPress={() => navigation.navigate('Map')}
            />
          </View>
        )}
        {currentStep == constants.track_order_status.length - 1 && (
          <TextButton
            buttonContainerStyle={{
              height: 55,
              borderRadius: 10,
            }}
            label="Done"
            onPress={() => navigation.navigate('FoodDetail')}
          />
        )}
      </View>
    </View>
  );
};

export default DeliveryStatus;
