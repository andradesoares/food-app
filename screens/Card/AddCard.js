import React, { useEffect, useState } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { FormInput, Header, IconButton, RadioButton, TextButton } from '../../components';
import { SIZES, FONTS, COLORS, icons, images } from '../../constants';
import { utils } from '../../utils';

const AddCard = ({ navigation, route }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardNumber, setCardNumber] = useState('');
  const [cardNumberError, setCardNumberError] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardNameError, setCardNameError] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [expireDateError, setExpireDateError] = useState('');
  const [cvv, setCvv] = useState('');
  const [cvvError, setCvvError] = useState('');
  const [isRemember, setIsRemember] = useState(false);

  useEffect(() => {
    let { selectedCard } = route.params;

    setSelectedCard(selectedCard);
  }, []);

  const isEnableCard = () => {
    return (
      cardNumber != '' &&
      cardName != '' &&
      expireDate != '' &&
      cvv != '' &&
      cardNumberError == '' &&
      cardNameError == '' &&
      expireDateError == '' &&
      cvvError == ''
    );
  };

  const FormInputCheck = ({ value, error }) => {
    return (
      <View
        style={{
          justifyContent: 'center',
        }}
      >
        <Image
          source={value == '' || (value != '' && error == '') ? icons.correct : icons.cancel}
          style={{
            height: 20,
            width: 20,
            tintColor:
              value == '' ? COLORS.gray : value != '' && error == '' ? COLORS.green : COLORS.red,
          }}
        />
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <Header
        title="ADD NEW CARD"
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
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: SIZES.padding,
        }}
      >
        <ImageBackground
          source={images.card}
          style={{
            height: 200,
            width: '100%',
            marginTop: SIZES.radius,
            borderRadius: SIZES.radius,
            overflow: 'hidden',
          }}
        >
          <Image
            source={selectedCard?.icon}
            resizeMode="contain"
            style={{
              position: 'absolute',
              top: 20,
              right: 20,
              height: 40,
              width: 80,
            }}
          />
          <View
            style={{
              position: 'absolute',
              bottom: 10,
              left: 0,
              right: 0,
              paddingHorizontal: SIZES.padding,
            }}
          >
            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>{cardName}</Text>
            <View
              style={{
                flexDirection: 'row',
              }}
            >
              <Text style={{ flex: 1, color: COLORS.white, ...FONTS.body3 }}>{cardNumber}</Text>
              <Text style={{ color: COLORS.white, ...FONTS.body3 }}>{expireDate}</Text>
            </View>
          </View>
        </ImageBackground>
        <View
          style={{
            marginTop: SIZES.padding * 2,
          }}
        >
          <FormInput
            label="Card Number"
            keyboardType="number-pad"
            maxLength={19}
            value={cardNumber}
            onChange={(value) => {
              setCardNumber(
                value
                  .replace(/\s/g, '')
                  .replace(/(\d{4})/g, '$1 ')
                  .trim()
              );
              utils.validateInput(value, 19, setCardNumberError);
            }}
            containerStyle={{
              marginTop: SIZES.radius,
            }}
            errorMsg={cardNumberError}
            appendComponent={<FormInputCheck value={cardNumber} error={cardNumberError} />}
          />
          <FormInput
            label="Card Name"
            value={cardName}
            onChange={(value) => {
              setCardName(value);
              utils.validateInput(value, 1, setCardNameError);
            }}
            containerStyle={{
              marginTop: SIZES.radius,
            }}
            errorMsg={cardNameError}
            appendComponent={<FormInputCheck value={cardName} error={cardNameError} />}
          />
          <View
            style={{
              flexDirection: 'row',
              marginTop: SIZES.radius,
            }}
          >
            <FormInput
              label="Expire Date"
              keyboardType="number-pad"
              placeholder="MM/YY"
              maxLength={5}
              value={expireDate}
              onChange={(value) => {
                setExpireDate(
                  value
                    .replace(/\s/g, '')
                    .replace(/(\d{2})$/g, '$1/')
                    .trim()
                );
                utils.validateInput(value, 5, setExpireDateError);
              }}
              containerStyle={{
                flex: 1,
              }}
              appendComponent={<FormInputCheck value={expireDate} error={expireDateError} />}
            />
            <FormInput
              label="CVV"
              keyboardType="number-pad"
              placeholder="CVV"
              maxLength={3}
              value={cvv}
              onChange={(value) => {
                setCvv(value);
                utils.validateInput(value, 3, setCvvError);
              }}
              containerStyle={{
                flex: 1,
                marginLeft: SIZES.radius,
              }}
              appendComponent={<FormInputCheck value={cvv} error={cvvError} />}
            />
          </View>
          <View
            style={{
              alignItems: 'flex-start',
              marginTop: SIZES.padding,
            }}
          >
            <RadioButton
              label="Remember this card details"
              isSelected={isRemember}
              onPress={() => setIsRemember(!isRemember)}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
      <View
        style={{
          paddingTop: SIZES.radius,
          paddingBottom: SIZES.padding,
          paddingHorizontal: SIZES.padding,
        }}
      >
        <TextButton
          label="Add Card"
          disabled={!isEnableCard()}
          buttonContainerStyle={{
            height: 60,
            borderRadius: SIZES.radius,
            backgroundColor: isEnableCard() ? COLORS.primary : COLORS.transparentPrimary,
          }}
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
};

export default AddCard;
