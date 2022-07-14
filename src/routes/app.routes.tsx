import { FC } from 'react';
import Home from 'pages/home';
import { PropsGroup } from './types';
import Profile from '../pages/profile';

const AppRoutes: FC<PropsGroup> = function ({ Drawer }: PropsGroup) {
  return (
    <Drawer.Group>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Perfil" component={Profile} />
    </Drawer.Group>
  );
};

export default AppRoutes;
