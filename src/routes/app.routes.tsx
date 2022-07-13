import { FC } from 'react';
import Home from 'pages/home';
import { PropsGroup } from './types';
import Profile from '../pages/profile';
import Registration from 'pages/registration';

const AppRoutes: FC<PropsGroup> = function ({ Drawer }: PropsGroup) {
  return (
    <Drawer.Group>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Perfil" component={Profile} />
      <Drawer.Screen name="Registro" component={Registration} />
    </Drawer.Group>
  );
};

export default AppRoutes;
