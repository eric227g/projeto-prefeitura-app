import { FC } from 'react';
import Home from 'pages/home';
import { PropsGroup } from './types';
import Profile from '../pages/profile';
import Registration from 'pages/registration';
import ScreenRelato from 'pages/ScreenRelato';
import SugestaoScreen from 'pages/ScreenSugestao';
import Login from 'pages/Login';
import StartScren from 'pages/startScren';

const AppRoutes: FC<PropsGroup> = function ({ Drawer }: PropsGroup) {
  return (
    <Drawer.Group>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Perfil" component={Profile} />
      <Drawer.Screen name="Registro" component={Registration} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen
      name="Tela Inicial"
      component={StartScren}
      options={{
        headerShown: false,
        gestureHandlerProps:{
          enable: false,
        },
      }}
      />
      <Drawer.Screen
        name="ScreenRelato"
        component={ScreenRelato}
        options={{
          drawerItemStyle: { height: 0 },
        }}
      />
      <Drawer.Screen
        name="SugestaoScreen"
        component={SugestaoScreen}
        options={{
          drawerItemStyle: { height: 0 },
        }}
      />
    </Drawer.Group>
  );
};

export default AppRoutes;
