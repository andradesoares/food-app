import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Header, IconButton, FormInput, CardItem, FooterTotal } from '../../components';
import { FONTS, SIZES, COLORS, icons, dummydata, dummyData } from '../../constants';

const Checkout = ({ navigation, route }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    let { selectedCard } = route.params;

    setSelectedCard(selectedCard);
  });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <Header
        title="CHECKOUT"
        containerStyle={{
          height: 50,
          marginHorizontal: SIZES.padding,
          marginTop: 40,
        }}
        leftComponent={
          <IconButton
            icon={icons.back}
            containerStyle={{
              width: 40,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderRadius: SIZES.radius,
              borderColor: COLORS.gray2,
            }}
            iconStyle={{
              width: 20,
              height: 20,
              tintColor: COLORS.gray2,
            }}
            onPress={() => navigation.goBack()}
          />
        }
        rightComponent={<View style={{ width: 40 }} />}
        containerStyle={{
          height: 50,
          paddingHorizontal: SIZES.padding,
          marginTop: 40,
          alignItems: 'center',
        }}
      />
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        extraScrollHeight={-200}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: SIZES.padding,
          paddingBottom: 20,
        }}
      >
        <View>
          {selectedCard &&
            dummyData.myCards.map((item, index) => {
              return (
                <CardItem
                  key={`MyCard-${item.id}`}
                  item={item}
                  isSelected={`${selectedCard?.key}-${selectedCard.id}` == `MyCard-${item.id}`}
                  onPress={() => setSelectedCard({ ...item, key: 'MyCard' })}
                />
              );
            })}
        </View>

        <View
          style={{
            marginTop: SIZES.padding,
          }}
        >
          <Text style={{ ...FONTS.h3 }}>Delivery Address</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: SIZES.radius,
              paddingVertical: SIZES.radius,
              paddingHorizontal: SIZES.padding,
              borderWidth: 2,
              borderRadius: SIZES.radius,
              borderColor: COLORS.lightGray2,
            }}
          >
            <Image
              source={icons.location1}
              style={{
                width: 40,
                height: 40,
              }}
            />
            <Text style={{ marginLeft: SIZES.radius, width: '85%', ...FONTS.body3 }}>
              300 Post Street San Francisco, CA
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: SIZES.padding,
          }}
        >
          <Text style={{ ...FONTS.h3 }}>Add Coupon</Text>
          <FormInput
            inputContainerStyle={{
              marginTop: 0,
              paddingLeft: SIZES.padding,
              paddingRight: 0,
              borderWidth: 2,
              borderColor: COLORS.lightGray2,
              backgroundColor: COLORS.white,
              overflow: 'hidden',
            }}
            placeholder="Coupon Code"
            appendComponent={
              <View
                style={{
                  width: 60,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: COLORS.primary,
                }}
              >
                <Image
                  source={icons.discount}
                  style={{
                    width: 40,
                    height: 40,
                  }}
                />
              </View>
            }
          />
        </View>
      </KeyboardAwareScrollView>
      <FooterTotal
        subTotal={37.97}
        shippingFee={0.0}
        total={37.97}
        onPress={() => navigation.replace('Success')}
      />
    </View>
  );
};

export default Checkout;
