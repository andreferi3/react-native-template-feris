import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { navigationRef } from './NavigationServices';
const Stack = createStackNavigator();

// * Bunch list of Screen
import Home from '../screens/Home';

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Home} />
    </Stack.Navigator>
  );
};

const AppContainer = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Routes />
    </NavigationContainer>
  );
};

export default AppContainer;
