import React, { useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { FONTS, SIZES, COLORS, icons, images, dummyData } from '../../constants';
import {
  Header,
  IconButton,
  CartQuantityButton,
  IconLabel,
  TextButton,
  LineDivider,
  Rating,
  StepperInput,
} from '../../components';

const FoodDetail = ({ navigation }) => {
  const [foodItem, setFoodItem] = useState(dummyData.vegBiryani);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <Header
        title="DETAILS"
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
            onPress={() => {}}
          />
        }
        rightComponent={<CartQuantityButton quantity={3} />}
        containerStyle={{
          height: 50,
          paddingHorizontal: SIZES.padding,
          marginTop: 40,
          alignItems: 'center',
        }}
      />
      <ScrollView>
        <View
          style={{
            marginTop: SIZES.radius,
            marginBottom: SIZES.padding,
            paddingHorizontal: 10,
          }}
        >
          <View
            style={{
              height: 190,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.lightGray2,
            }}
          >
            <View
              style={{
                marginTop: 10,
                justifyContent: 'space-between',
                paddingHorizontal: SIZES.radius,
                flexDirection: 'row',
              }}
            >
              <View
                style={{
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
                  {foodItem.calories} Calories
                </Text>
              </View>
              <Image
                source={icons.love}
                style={{
                  height: 20,
                  width: 20,
                  tintColor: foodItem.isFavourite ? COLORS.primary : COLORS.gray,
                }}
              />
            </View>

            <Image
              source={foodItem.image}
              resizeMode="contain"
              style={{
                height: '100%',
                width: '100%',
              }}
            />
          </View>
          <View
            style={{
              marginTop: SIZES.padding,
            }}
          >
            <Text
              style={{
                ...FONTS.h2,
              }}
            >
              {foodItem.name}
            </Text>
            <Text
              style={{
                marginTop: 10,
                color: COLORS.darkGray2,
                textAlign: 'justify',
                ...FONTS.body4,
              }}
            >
              {foodItem.description}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: SIZES.padding,
              }}
            >
              <IconLabel
                containerStyle={{
                  backgroundColor: COLORS.primary,
                }}
                icon={icons.star}
                label="4.5"
                labelStyle={{
                  color: COLORS.white,
                }}
              />
              <IconLabel
                icon={icons.clock}
                label="30 Mins"
                iconStyle={{
                  tintColor: COLORS.black,
                }}
              />
              <IconLabel
                icon={icons.dollar}
                label="Free Shipping"
                iconStyle={{
                  tintColor: COLORS.black,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: SIZES.padding,
              }}
            >
              <Text
                style={{
                  ...FONTS.h4,
                }}
              >
                Sizes:
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  marginLeft: SIZES.padding,
                }}
              >
                {dummyData.sizes.map((item, index) => {
                  return (
                    <TextButton
                      key={`Sizes-${index}`}
                      buttonContainerStyle={{
                        width: 45,
                        height: 45,
                        margin: 10,
                        borderWidth: 1,
                        borderRadius: SIZES.radius,
                        borderColor: selectedSize == item.id ? COLORS.primary : COLORS.gray2,
                        backgroundColor: selectedSize == item.id ? COLORS.primary : null,
                      }}
                      label={item.label}
                      labelStyle={{
                        color: selectedSize == item.id ? COLORS.white : COLORS.gray2,
                        ...FONTS.body3,
                      }}
                      onPress={() => setSelectedSize(item.id)}
                    />
                  );
                })}
              </View>
            </View>
          </View>
        </View>
        <LineDivider />
        <View
          style={{
            flexDirection: 'row',
            marginVertical: SIZES.padding,
            paddingHorizontal: 10,
            alignItems: 'center',
          }}
        >
          <Image
            source={images.profile}
            style={{
              width: 50,
              height: 50,
              borderRadius: SIZES.radius,
            }}
          />
          <View
            style={{
              flex: 1,
              marginLeft: SIZES.radius,
              justifyContent: 'center',
            }}
          >
            <Text style={{ ...FONTS.h3 }}>{dummyData.myProfile?.name}</Text>
            <Text
              style={{
                color: COLORS.gray,
                ...FONTS.body4,
              }}
            >
              1.2 km
            </Text>
          </View>
          <Rating rating={3} iconStyle={{ marginLeft: 3 }} />
        </View>
      </ScrollView>
      <LineDivider />
      <View
        style={{
          flexDirection: 'row',
          height: 90,
          alignItems: 'center',
          paddingHorizontal: SIZES.padding,
        }}
      >
        <StepperInput
          onAdd={() => setQuantity(quantity + 1)}
          onMinus={() => (quantity > 1 ? setQuantity(quantity - 1) : null)}
          value={quantity}
        />
        <TextButton
          buttonContainerStyle={{
            flex: 1,
            flexDirection: 'row',
            height: 60,
            marginLeft: SIZES.radius,
            paddingHorizontal: SIZES.radius,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
          }}
          label="Buy Now"
          label2="$15.99"
          onPress={() => navigation.navigate('MyCart')}
        />
      </View>
    </View>
  );
};

export default FoodDetail;
