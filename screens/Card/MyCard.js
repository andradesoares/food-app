import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import {
  Header,
  IconButton,
  CartQuantityButton,
  StepperInput,
  FooterTotal,
  CardItem,
  TextButton,
} from '../../components';
import { FONTS, SIZES, COLORS, icons, dummyData } from '../../constants';

const MyCard = ({ navigation }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <Header
        title="MY CARDS"
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
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.radius,
        }}
      >
        <View>
          {dummyData.myCards.map((item, index) => {
            return (
              <CardItem
                key={`MyCard-${item.id}`}
                isSelected={`${selectedCard?.key}-${selectedCard?.id}` == `MyCard-${item.id}`}
                item={item}
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
          <Text
            style={{
              ...FONTS.h3,
            }}
          >
            Add New Card
          </Text>
          {dummyData.allCards.map((item, index) => {
            return (
              <CardItem
                key={`NewCard-${item.id}`}
                isSelected={`${selectedCard?.key}-${selectedCard?.id}` == `NewCard-${item.id}`}
                item={item}
                onPress={() => setSelectedCard({ ...item, key: 'NewCard' })}
              />
            );
          })}
        </View>
      </ScrollView>
      <View
        style={{
          paddingTop: SIZES.radius,
          paddingBottom: SIZES.padding,
          paddingHorizontal: SIZES.padding,
        }}
      >
        <TextButton
          disabled={selectedCard == null}
          buttonContainerStyle={{
            height: 60,
            borderRadius: SIZES.radius,
            backgroundColor: selectedCard == null ? COLORS.gray : COLORS.primary,
          }}
          label={selectedCard?.key == 'NewCard' ? 'Add' : 'Place your Order'}
          onPress={() => {
            selectedCard?.key == 'NewCard'
              ? navigation.navigate('AddCard', { selectedCard: selectedCard })
              : navigation.navigate('Checkout', { selectedCard: selectedCard });
          }}
        />
      </View>
    </View>
  );
};

export default MyCard;
