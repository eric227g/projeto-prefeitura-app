import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppRoutes from './app.routes';
import { useAuth } from 'hooks/auth/index';
import { useEffect, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import { Text, View } from 'react-native';

const Drawer = createDrawerNavigator();

export const screenOptions = {
  headerStyle: {
    backgroundColor: '#2B47FC',
  },
  headerTintColor: '#fff',
};

export default function Routes() {

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Tela Inicial" screenOptions={screenOptions}>
        {AppRoutes({ Drawer })}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
