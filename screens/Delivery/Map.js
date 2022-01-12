import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Platform } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { LinearGradient } from 'expo-linear-gradient';
import { IconButton, Header } from '../../components';
import { SIZES, COLORS, FONTS, icons, images, dummyData, constants } from '../../constants';
import { utils } from '../../utils';

const Map = ({ navigation }) => {
  const mapView = useRef();
  const [tracksViewChanges, setTracksViewChanges] = useState(true);
  const [region, setRegion] = useState(null);
  const [toLoc, setToLoc] = useState(null);
  const [fromLoc, setFromLoc] = useState(null);
  const [angle, setAngle] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [duration, setDuration] = useState('');

  React.useEffect(() => {
    let initialRegion = {
      latitude: 1.5496614931250685,
      longitude: 110.36381866919922,
      latitudeDelta: 0.02,
      longitudeDelta: 0.02,
    };

    let destination = {
      latitude: 1.5496614931250685,
      longitude: 110.36381866919922,
    };
    setRegion(initialRegion);
    setToLoc(destination);
    setFromLoc(dummyData.fromLocs[1]);
  }, []);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <MapView
        ref={mapView}
        style={{
          flex: 1,
        }}
        provider={PROVIDER_GOOGLE}
        initialRegion={region}
      >
        {fromLoc && (
          <Marker
            key={'FromLoc'}
            coordinate={fromLoc}
            tracksViewChanges={tracksViewChanges}
            rotation={angle}
            anchor={{ x: 0.5, y: 0.5 }}
          >
            <Image
              source={icons.navigator1}
              style={{ width: 26, height: 28 }}
              resizeMode="contain"
              onLoadEnd={() => setTracksViewChanges(false)}
            />
          </Marker>
        )}
        {toLoc && (
          <Marker
            key={'ToLoc'}
            coordinate={toLoc}
            tracksViewChanges={tracksViewChanges}
            anchor={{ x: 0.5, y: 0.5 }}
          >
            <Image
              source={icons.location_pin}
              style={{ width: 26, height: 28 }}
              resizeMode="contain"
              onLoadEnd={() => setTracksViewChanges(true)}
            />
          </Marker>
        )}
        <MapViewDirections
          lineDashPattern={[0]}
          origin={fromLoc}
          destination={toLoc}
          apikey={constants.GOOGLE_MAP_API_KEY}
          strokeWidth={5}
          strokeColor={COLORS.primary}
          optimizeWaypoints={true}
          onReady={(result) => {
            setDuration(Math.ceil(result.duration));

            if (!isReady) {
              mapView.current.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: SIZES.width * 0.1,
                  bottom: 100,
                  left: SIZES.width * 0.1,
                  top: SIZES.height * 0.1,
                },
              });

              if (result.coordinates.length >= 2) {
                let angle = utils.calculateAngle(result.coordinates);

                setAngle(angle);
              }
              setIsReady(true);
            }
          }}
        />
      </MapView>
      <>
        <IconButton
          icon={icons.back}
          containerStyle={{
            position: 'absolute',
            top: SIZES.padding * 2,
            left: SIZES.padding,
            ...styles.buttonStyle,
          }}
          iconStyle={{
            width: 20,
            height: 20,
            tintColor: COLORS.gray2,
          }}
          onPress={() => navigation.goBack()}
        />
        <View
          style={{
            position: 'absolute',
            top: SIZES.padding * 2,
            right: SIZES.padding,
          }}
        >
          <IconButton
            icon={icons.globe}
            containerStyle={{
              ...styles.buttonStyle,
            }}
            iconStyle={{
              width: 20,
              height: 20,
              tintColor: COLORS.gray,
            }}
          />
          <IconButton
            icon={icons.focus}
            containerStyle={{
              marginTop: SIZES.radius,
              ...styles.buttonStyle,
            }}
            iconStyle={{
              width: 20,
              height: 20,
              tintColor: COLORS.gray,
            }}
          />
        </View>
      </>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
        }}
      >
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={[COLORS.transparent, COLORS.lightGray1]}
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
            padding: SIZES.padding,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: COLORS.white,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Image
              source={icons.clock}
              style={{
                width: 25,
                height: 25,
                tintColor: COLORS.black,
              }}
            />
            <View
              style={{
                marginLeft: SIZES.padding,
              }}
            >
              <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>Your Delivery Time</Text>
              <Text style={{ ...FONTS.h3 }}>{duration} minutes</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: SIZES.padding,
            }}
          >
            <Image
              source={icons.focus}
              style={{
                width: 25,
                height: 25,
                tintColor: COLORS.black,
              }}
            />
            <View
              style={{
                marginLeft: SIZES.padding,
              }}
            >
              <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>Your Address</Text>
              <Text style={{ ...FONTS.h3 }}>88, Jln Padungan, Kuching</Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              height: 50,
              marginTop: SIZES.padding,
              borderRadius: SIZES.radius,
              paddingHorizontal: SIZES.radius,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: COLORS.primary,
            }}
          >
            <Image
              source={images.profile}
              style={{
                width: 30,
                height: 30,
                borderRadius: 5,
              }}
            />
            <View
              style={{
                flex: 1,
                marginLeft: SIZES.radius,
              }}
            >
              <Text style={{ color: COLORS.white, ...FONTS.h4 }}>ByProgrammers</Text>
              <Text style={{ color: COLORS.white, ...FONTS.body5 }}>Delivery Man</Text>
            </View>
            <View
              style={{
                height: 30,
                width: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
                borderWidth: 1,
                borderColor: COLORS.white,
                backgroundColor: COLORS.transparentWhite1,
              }}
            >
              <Image
                source={icons.call}
                style={{
                  width: 25,
                  height: 25,
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    width: 40,
    height: 40,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.gray2,
    backgroundColor: COLORS.white,
  },
});

export default Map;
