import { FC } from 'react';
import Home from 'pages/home';
import { PropsGroup } from './types';
import Profile from '../pages/profile';
import Registration from 'pages/registration';
import ScreenRelato from 'pages/ScreenRelato';
import SugestaoScreen from 'pages/ScreenSugestao';
import Theme from 'pages/Theme/logic';
import TelaMascara from '../MaskedTeste';

const AppRoutes: FC<PropsGroup> = function ({ Drawer }: PropsGroup) {
  return (
    <Drawer.Group>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Perfil" component={Profile} />
      <Drawer.Screen name="Registro" component={Registration} />
      <Drawer.Screen name="Mascara" component={TelaMascara} />
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
