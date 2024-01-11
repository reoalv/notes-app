import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Routes, RoutesStackParams} from './Screen.types';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';

const Stack = createNativeStackNavigator<RoutesStackParams>();

const RoutesScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false, animation: 'none'}}
        initialRouteName={Routes.HomeScreen}>
        <Stack.Screen name={Routes.HomeScreen} component={HomeScreen} />
        <Stack.Screen name={Routes.DetailScreen} component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RoutesScreen;
