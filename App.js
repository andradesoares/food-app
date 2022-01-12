import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import rootReducer from './stores/rootReducer';
import CustomDrawer from './navigation/CustomDrawer';

import {
  FoodDetail,
  Checkout,
  MyCart,
  Success,
  AddCard,
  MyCard,
  DeliveryStatus,
  Map,
} from './screens';

const Stack = createStackNavigator();

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  const [loaded] = useFonts({
    'Poppins-Black': require('./assets/fonts/Poppins-Black.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={'Map'}
        >
          <Stack.Screen name="FoodDetail" component={FoodDetail} />

          <Stack.Screen name="Checkout" component={Checkout} />

          <Stack.Screen name="MyCart" component={MyCart} />

          <Stack.Screen name="Success" component={Success} options={{ gestureEnabled: false }} />

          <Stack.Screen name="AddCard" component={AddCard} />

          <Stack.Screen name="MyCard" component={MyCard} />

          <Stack.Screen
            name="DeliveryStatus"
            component={DeliveryStatus}
            options={{ gestureEnabled: false }}
          />

          <Stack.Screen name="Map" component={Map} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
