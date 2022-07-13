import { FC } from 'react';
import { PropsGroup } from './types';
import ScreenRelato from '../Pages/ScreenRelato';
import ScreenSugestao from '../Pages/ScreenSugestao';
import Componente from '../Pages/Componentes/Relato';

const AppRoutes: FC<PropsGroup> = function ({ Drawer }: PropsGroup) {
  return (
    <Drawer.Group>
      <Drawer.Screen name="Relato" component={ScreenRelato} />
      <Drawer.Screen name="Sugestao" component={ScreenSugestao} />
    </Drawer.Group>
  );
};

export default AppRoutes;
