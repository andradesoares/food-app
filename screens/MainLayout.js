import React, { useEffect, useRef } from 'react';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import { useDrawerProgress } from '@react-navigation/drawer';
import { LinearGradient } from 'expo-linear-gradient';
import { setSelectedTab } from '../stores/tab/tabActions';
import { Home, Search, CartTab, Favourite, Notification } from '../screens';
import { COLORS, FONTS, SIZES, icons, constants, dummyData } from '../constants';
import { Header, TabButton } from '../components';

const MainLayout = ({ drawerAnimationStyle, navigation, selectedTab, setSelectedTab }) => {
  const flatListRef = useRef();

  const progress = useDrawerProgress();

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 26],
  });

  const animatedStyle = { borderRadius, transform: [{ scale }], overflow: 'hidden' };

  const homeTabFlex = useSharedValue(1);
  const homeTabColor = useSharedValue(COLORS.white);
  const searchTabFlex = useSharedValue(1);
  const searchTabColor = useSharedValue(COLORS.white);
  const cartTabFlex = useSharedValue(1);
  const cartTabColor = useSharedValue(COLORS.white);
  const favouriteTabFlex = useSharedValue(1);
  const favouriteTabColor = useSharedValue(COLORS.white);
  const notificationTabFlex = useSharedValue(1);
  const notificationTabColor = useSharedValue(COLORS.white);

  const homeFlexStyle = useAnimatedStyle(() => {
    return {
      flex: homeTabFlex.value,
    };
  });

  const homeColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: homeTabColor.value,
    };
  });

  const searchFlexStyle = useAnimatedStyle(() => {
    return {
      flex: searchTabFlex.value,
    };
  });

  const searchColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: searchTabColor.value,
    };
  });

  const cartFlexStyle = useAnimatedStyle(() => {
    return {
      flex: cartTabFlex.value,
    };
  });

  const cartColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: cartTabColor.value,
    };
  });

  const favouriteFlexStyle = useAnimatedStyle(() => {
    return {
      flex: favouriteTabFlex.value,
    };
  });

  const favouriteColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: favouriteTabColor.value,
    };
  });

  const notificationFlexStyle = useAnimatedStyle(() => {
    return {
      flex: notificationTabFlex.value,
    };
  });

  const notificationColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: notificationTabColor.value,
    };
  });

  useEffect(() => {
    setSelectedTab(constants.screens.home);
  }, []);

  useEffect(() => {
    selectedTab == constants.screens.home
      ? ((homeTabFlex.value = withTiming(4, { duration: 500 })),
        (homeTabColor.value = withTiming(COLORS.primary, { duration: 500 })),
        flatListRef?.current?.scrollToIndex({ index: 0, animated: false }))
      : ((homeTabFlex.value = withTiming(1, { duration: 500 })),
        (homeTabColor.value = withTiming(COLORS.white, { duration: 500 })));
    selectedTab == constants.screens.search
      ? ((searchTabFlex.value = withTiming(4, { duration: 500 })),
        (searchTabColor.value = withTiming(COLORS.primary, { duration: 500 })),
        flatListRef?.current?.scrollToIndex({ index: 1, animated: false }))
      : ((searchTabFlex.value = withTiming(1, { duration: 500 })),
        (searchTabColor.value = withTiming(COLORS.white, { duration: 500 })));
    selectedTab == constants.screens.cart
      ? ((cartTabFlex.value = withTiming(4, { duration: 500 })),
        (cartTabColor.value = withTiming(COLORS.primary, { duration: 500 })),
        flatListRef?.current?.scrollToIndex({ index: 2, animated: false }))
      : ((cartTabFlex.value = withTiming(1, { duration: 500 })),
        (cartTabColor.value = withTiming(COLORS.white, { duration: 500 })));
    selectedTab == constants.screens.favourite
      ? ((favouriteTabFlex.value = withTiming(4, { duration: 500 })),
        (favouriteTabColor.value = withTiming(COLORS.primary, { duration: 500 })),
        flatListRef?.current?.scrollToIndex({ index: 3, animated: false }))
      : ((favouriteTabFlex.value = withTiming(1, { duration: 500 })),
        (favouriteTabColor.value = withTiming(COLORS.white, { duration: 500 })));
    selectedTab == constants.screens.notification
      ? ((notificationTabFlex.value = withTiming(4, { duration: 500 })),
        (notificationTabColor.value = withTiming(COLORS.primary, { duration: 500 })),
        flatListRef?.current?.scrollToIndex({ index: 4, animated: false }))
      : ((notificationTabFlex.value = withTiming(1, { duration: 500 })),
        (notificationTabColor.value = withTiming(COLORS.white, { duration: 500 })));
  }, [selectedTab]);

  return (
    <Animated.View
      style={[
        {
          flex: 1,
          backgroundColor: COLORS.white,
        },
        animatedStyle,
      ]}
    >
      <Header
        containerStyle={{
          height: 50,
          paddingHorizontal: SIZES.padding,
          marginTop: 40,
          alignItems: 'center',
        }}
        title={selectedTab.toUpperCase()}
        leftComponent={
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: COLORS.gray2,
              borderRadius: SIZES.radius,
            }}
            onPress={() => navigation.openDrawer()}
          >
            <Image source={icons.menu} />
          </TouchableOpacity>
        }
        rightComponent={
          <TouchableOpacity
            style={{
              borderRadius: SIZES.radius,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              source={dummyData?.myProfile?.profile_image}
              style={{
                width: 40,
                height: 40,
                borderRadius: SIZES.radius,
              }}
            />
          </TouchableOpacity>
        }
      />
      <View
        style={{
          flex: 1,
        }}
      >
        <FlatList
          ref={flatListRef}
          horizontal
          scrollEnabled={false}
          pagingEnabled
          snapToAlignment="center"
          snapToInterval={SIZES.width}
          showsHorizontalScrollIndicator={false}
          data={constants.bottom_tabs}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  height: SIZES.height,
                  width: SIZES.width,
                }}
              >
                {item.label == constants.screens.home && <Home />}
                {item.label == constants.screens.search && <Search />}
                {item.label == constants.screens.cart && <CartTab />}
                {item.label == constants.screens.favourite && <Favourite />}
                {item.label == constants.screens.notification && <Notification />}
              </View>
            );
          }}
        />
      </View>
      <View
        style={{
          height: 70,
          justifyContent: 'flex-end',
        }}
      >
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 4 }}
          colors={[COLORS.transparent, COLORS.gray2]}
          style={{
            position: 'absolute',
            top: -20,
            left: 0,
            right: 0,
            height: 30,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            paddingHorizontal: SIZES.radius,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: COLORS.white,
            borderRadius: 26,
          }}
        >
          <TabButton
            label={constants.screens.home}
            icon={icons.home}
            isFocused={selectedTab == constants.screens.home}
            outerContainerStyle={homeFlexStyle}
            innerContainerStyle={homeColorStyle}
            onPress={() => setSelectedTab(constants.screens.home)}
          />
          <TabButton
            label={constants.screens.search}
            icon={icons.search}
            isFocused={selectedTab == constants.screens.search}
            outerContainerStyle={searchFlexStyle}
            innerContainerStyle={searchColorStyle}
            onPress={() => setSelectedTab(constants.screens.search)}
          />
          <TabButton
            label={constants.screens.cart}
            icon={icons.cart}
            isFocused={selectedTab == constants.screens.cart}
            outerContainerStyle={cartFlexStyle}
            innerContainerStyle={cartColorStyle}
            onPress={() => setSelectedTab(constants.screens.cart)}
          />
          <TabButton
            label={constants.screens.favourite}
            icon={icons.favourite}
            isFocused={selectedTab == constants.screens.favourite}
            outerContainerStyle={favouriteFlexStyle}
            innerContainerStyle={favouriteColorStyle}
            onPress={() => setSelectedTab(constants.screens.favourite)}
          />
          <TabButton
            label={constants.screens.notification}
            icon={icons.notification}
            isFocused={selectedTab == constants.screens.notification}
            outerContainerStyle={notificationFlexStyle}
            innerContainerStyle={notificationColorStyle}
            onPress={() => setSelectedTab(constants.screens.notification)}
          />
        </View>
      </View>
    </Animated.View>
  );
};

function mapStateToProps(state) {
  return {
    selectedTab: state.tabReducer.selectedTab,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSelectedTab: (selectedTab) => {
      return dispatch(setSelectedTab(selectedTab));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
