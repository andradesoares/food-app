import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  Modal,
  TouchableWithoutFeedbackBase,
  Animated,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { COLORS, FONTS, SIZES, constants, icons } from '../../constants';
import { IconButton, TwoPointSlider, TextButton, TextIconButton } from '../../components';

const Section = ({ containerStyle, title, children }) => {
  return (
    <View
      style={{
        marginTop: SIZES.padding,
        ...containerStyle,
      }}
    >
      <Text
        style={{
          ...FONTS.h3,
        }}
      >
        {title}
      </Text>
      {children}
    </View>
  );
};

const FilterModal = ({ isVisible, onClose }) => {
  const [showFilterModal, setShowFilterModal] = useState(isVisible);
  const [deliveryTime, setDeliveryTime] = useState('');
  const [ratings, setRatings] = useState('');
  const [tags, setTags] = useState('');

  const modalAnimatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    showFilterModal
      ? Animated.timing(modalAnimatedValue, {
          toValue: 1,
          duration: 500,
          useNativeDriver: false,
        }).start()
      : Animated.timing(modalAnimatedValue, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }).start(() => onClose());
  }, [showFilterModal]);

  const modalY = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [SIZES.height, SIZES.height - 500],
  });

  const renderDistance = () => {
    return (
      <Section title="Distance">
        <View
          style={{
            alignItems: 'center',
          }}
        >
          <TwoPointSlider
            values={[3, 10]}
            min={1}
            max={20}
            postfix="km"
            onValuesChange={() => {}}
          />
        </View>
      </Section>
    );
  };

  const renderDeliveryTime = () => {
    return (
      <Section
        title="Delivery Time"
        containerStyle={{
          marginTop: 40,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: SIZES.radius,
          }}
        >
          {constants.delivery_time.map((item, index) => {
            return (
              <TextButton
                key={`delivery_time-${index}`}
                label={item.label}
                labelStyle={{
                  color: item.id === deliveryTime ? COLORS.white : COLORS.gray,
                  ...FONTS.body3,
                }}
                buttonContainerStyle={{
                  width: '30%',
                  height: 50,
                  margin: 5,
                  alignItems: 'center',
                  borderRadius: 10,
                  backgroundColor: item.id == deliveryTime ? COLORS.primary : COLORS.lightGray2,
                }}
                onPress={() => setDeliveryTime(item.id)}
              />
            );
          })}
        </View>
      </Section>
    );
  };

  const renderPriceRange = () => {
    return (
      <Section title="Pricing Range">
        <View
          style={{
            alignItems: 'center',
          }}
        >
          <TwoPointSlider
            values={[10, 50]}
            min={1}
            max={100}
            prefix="$"
            onValuesChange={() => {}}
          />
        </View>
      </Section>
    );
  };

  const renderRating = () => {
    return (
      <Section
        title="Rating"
        containerStyle={{
          marginTop: 40,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: SIZES.radius,
          }}
        >
          {constants.ratings.map((item, index) => {
            return (
              <TextIconButton
                key={`ratings-${index}`}
                label={item.label}
                iconPosition="right"
                labelStyle={{
                  color: item.id === ratings ? COLORS.white : COLORS.gray,
                  ...FONTS.body3,
                }}
                containerStyle={{
                  flex: 1,
                  width: '30%',
                  height: 50,
                  margin: 5,
                  alignItems: 'center',
                  borderRadius: 10,
                  backgroundColor: item.id == ratings ? COLORS.primary : COLORS.lightGray2,
                }}
                icon={icons.star}
                iconStyle={{
                  tintColor: item.id == ratings ? COLORS.white : COLORS.gray,
                }}
                onPress={() => setRatings(item.id)}
              />
            );
          })}
        </View>
      </Section>
    );
  };
  const renderTags = () => {
    return (
      <Section title="Tags">
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          {constants.tags.map((item, index) => {
            return (
              <TextButton
                key={`tags-${index}`}
                label={item.label}
                labelStyle={{
                  color: item.id == tags ? COLORS.white : COLORS.gray,
                  ...FONTS.body3,
                }}
                buttonContainerStyle={{
                  height: 50,
                  margin: 5,
                  paddingHorizontal: SIZES.padding,
                  alignItems: 'center',
                  borderRadius: 10,
                  backgroundColor: item.id == tags ? COLORS.primary : COLORS.lightGray2,
                }}
                onPress={() => setTags(item.id)}
              />
            );
          })}
        </View>
      </Section>
    );
  };
  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.transparentBlack7,
        }}
      >
        <TouchableWithoutFeedback onPress={() => setShowFilterModal(false)}>
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          ></View>
        </TouchableWithoutFeedback>
        <Animated.View
          style={{
            position: 'absolute',
            left: 0,
            top: modalY,
            width: '100%',
            height: '100%',
            padding: SIZES.padding,
            borderTopRightRadius: SIZES.padding,
            borderTopLeftRadius: SIZES.padding,
            backgroundColor: COLORS.white,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                flex: 1,
                ...FONTS.h3,
                fontSize: 18,
              }}
            >
              Fliter your search
            </Text>
            <IconButton
              containerStyle={{
                borderWidth: 2,
                borderRadius: 10,
                borderColor: COLORS.gray2,
              }}
              icon={icons.cross}
              iconStyle={{
                tintColor: COLORS.gray2,
              }}
              onPress={() => setShowFilterModal(false)}
            />
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 250,
            }}
          >
            {renderDistance()}
            {renderDeliveryTime()}
            {renderPriceRange()}
            {renderRating()}
            {renderTags()}
          </ScrollView>
          <View
            style={{
              position: 'absolute',
              bottom: 110,
              left: 0,
              right: 0,
              height: 110,
              paddingHorizontal: SIZES.padding,
              paddingVertical: SIZES.radius,
              backgroundColor: COLORS.white,
            }}
          >
            <TextButton
              label="Apply Filters"
              buttonContainerStyle={{
                height: 50,
                borderRadius: 10,
                backgroundColor: COLORS.primary,
              }}
              onPress={() => {}}
            />
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default FilterModal;
