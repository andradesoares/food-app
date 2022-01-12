import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';
import { connect } from 'react-redux';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { MainLayout } from '../screens';
import { COLORS, FONTS, SIZES, constants, icons, dummyData } from '../constants';
import { setSelectedTab } from '../stores/tab/tabActions';

const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({ label, icon, isFocused, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        height: 40,
        marginBottom: SIZES.base,
        alignItems: 'center',
        paddingLeft: SIZES.radius,
        borderRadius: SIZES.base,
        backgroundColor: isFocused ? COLORS.transparentBlack1 : null,
      }}
      onPress={onPress}
    >
      <Image
        source={icon}
        style={{
          width: 20,
          height: 20,
          tintColor: COLORS.white,
        }}
      />
      <Text
        style={{
          marginLeft: 15,
          color: COLORS.white,
          ...FONTS.h6,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const CustomDrawerContent = ({ navigation, selectedTab, setSelectedTab }) => {
  return (
    <DrawerContentScrollView scrollEnabled={true} contentContainerStyle={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.radius,
        }}
      >
        <View
          style={{
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => navigation.closeDrawer()}
          >
            <Image
              source={icons.cross}
              style={{
                height: 25,
                width: 25,
                tintColor: COLORS.white,
              }}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            alignItems: 'center',
          }}
          onPress={() => console.log('profile')}
        >
          <Image
            source={dummyData.myProfile?.profile_image}
            style={{
              height: 50,
              width: 50,
              borderRadius: SIZES.radius,
            }}
          />
          <View
            style={{
              marginLeft: SIZES.radius,
            }}
          >
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.h3,
              }}
            >
              {dummyData.myProfile?.name}
            </Text>
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.body4,
              }}
            >
              View your profile
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            marginTop: SIZES.padding,
          }}
        >
          <CustomDrawerItem
            label={constants.screens.home}
            icon={icons.home}
            isFocused={selectedTab == constants.screens.home}
            onPress={() => {
              setSelectedTab(constants.screens.home);
              navigation.navigate('MainLayout');
            }}
          />
          <CustomDrawerItem
            label={constants.screens.my_wallet}
            icon={icons.wallet}
            isFocused={selectedTab == constants.screens.my_wallet}
            onPress={() => {
              setSelectedTab(constants.screens.my_wallet);
              navigation.navigate('MainLayout');
            }}
          />
          <CustomDrawerItem
            label={constants.screens.notification}
            icon={icons.notification}
            isFocused={selectedTab == constants.screens.notification}
            onPress={() => {
              setSelectedTab(constants.screens.notification);
              navigation.navigate('MainLayout');
            }}
          />
          <CustomDrawerItem
            label={constants.screens.favourite}
            icon={icons.favourite}
            isFocused={selectedTab == constants.screens.favourite}
            onPress={() => {
              setSelectedTab(constants.screens.favourite);
              navigation.navigate('MainLayout');
            }}
          />
          <View
            style={{
              height: 1,
              marginVertical: SIZES.radius,
              marginLeft: SIZES.radius,
              backgroundColor: COLORS.lightGray1,
            }}
          />
          <CustomDrawerItem
            label="Track Your Order"
            icon={icons.location}
            isFocused={selectedTab == 'Track Your Order'}
            onPress={() => {
              setSelectedTab('Track Your Order');
              navigation.navigate('MainLayout');
            }}
          />
          <CustomDrawerItem
            label="Coupons"
            icon={icons.coupon}
            isFocused={selectedTab == 'Coupons'}
            onPress={() => {
              setSelectedTab('Coupons');
              navigation.navigate('MainLayout');
            }}
          />
          <CustomDrawerItem
            label="Settings"
            icon={icons.setting}
            isFocused={selectedTab == 'Settings'}
            onPress={() => {
              setSelectedTab('Settings');
              navigation.navigate('MainLayout');
            }}
          />
          <CustomDrawerItem
            label="Invite a Friend"
            icon={icons.profile}
            isFocused={selectedTab == 'Invite a Friend'}
            onPress={() => {
              setSelectedTab('Invite a Friend');
              navigation.navigate('MainLayout');
            }}
          />
          <CustomDrawerItem
            label="Help Center"
            icon={icons.help}
            isFocused={selectedTab == 'Help Center'}
            onPress={() => {
              setSelectedTab('Help Center');
              navigation.navigate('MainLayout');
            }}
          />
        </View>
        <View
          style={{
            marginBottom: SIZES.padding,
          }}
        >
          <CustomDrawerItem label="Logout" icon={icons.logout} />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const CustomDrawer = ({ selectedTab, setSelectedTab }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
      }}
    >
      <Drawer.Navigator
        initialRouteName="MainLayout"
        screenOptions={{
          drawerType: 'slide',
          overlayColor: 'transparent',
          headerShown: false,
          sceneContainerStyle: {
            backgroundColor: 'transparent',
          },
          drawerStyle: {
            flex: 1,
            width: '65%',
            paddingRight: 20,
            backgroundColor: 'transparent',
          },
        }}
        drawerContent={(props) => {
          return (
            <CustomDrawerContent
              navigation={props.navigation}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          );
        }}
      >
        <Drawer.Screen name="MainLayout">{(props) => <MainLayout {...props} />}</Drawer.Screen>
      </Drawer.Navigator>
    </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);
